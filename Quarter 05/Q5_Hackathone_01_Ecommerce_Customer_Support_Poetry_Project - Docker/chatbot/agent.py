# agent.py
import os
import psycopg2
from langchain_core.messages import HumanMessage, SystemMessage

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.tools import tool
from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import MessagesState, START, StateGraph, END
from langgraph.graph.state import CompiledStateGraph
from langgraph.prebuilt import tools_condition, ToolNode
from dotenv import load_dotenv
import google.auth

# Load environment variables from a .env file
load_dotenv()


# Path to your credentials JSON file which were downloaded from google console 
# credentials_path = r"E:\FREELANCING\PIAIC\PIAIC_PRACTICE\Quarter 05\Q5_Hackathone_01_Ecommerce_Customer_Support_Poetry_Project - Docker\gen-lang-client-0599181679-e2473123f764.json"
credentials_path = "./gen-lang-client-0599181679-e2473123f764.json"

# Load credentials manually
credentials, project = google.auth.load_credentials_from_file(credentials_path)
if credentials and project:
    print(f"Successfully loaded credentials for project {project}")
else:
    print("Failed to load credentials.")

# Initialize the Google Generative AI Model
try:
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-flash", 
        credentials=credentials  # Pass credentials explicitly
    )
    print("Successfully authenticated and initialized the model!")
except Exception as e:
    print(f"Error initializing the model: {str(e)}")

# System message for FAQ responses
sys_msg_FAQs_database = """System Message:

You are an AI-powered eCommerce chatbot. Your task is to assist customers by answering their common order-related queries and providing them with useful information about the store. You should be polite, professional, and ensure that the customer feels heard. If the query falls under common questions (FAQs), answer with one of the pre-defined responses. 

FAQs:
How do I track my order?
Response:
"You can track your order by giving me your order id"

How do I cancel my order?
Response:
"Orders can be canceled within 30 minutes of placing the order, provided the order has not yet been processed or shipped. Please check your order status and if eligible, you can proceed to cancel from your order page. Otherwise, please contact customer support for further assistance."

How can I update my shipping address?
Response:
"If your order has not been processed or shipped, you can update your shipping address through your account settings. For orders that are already shipped, please contact customer support immediately for assistance."

What payment methods do you accept?
Response:
"We accept various payment methods, including credit/debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For any other queries regarding payments, please check our Payment Methods page."

Can I return an item?
Response:
"Yes, you can return items within 30 days of purchase as long as they are unused and in original packaging. Please visit our Returns page for more details on the return process."

When will my order arrive?
Response:
"The delivery time depends on your location and the shipping method you selected at checkout. You will receive an estimated delivery date in your order confirmation email. You can also track your order to get the latest delivery updates."

Do you offer gift cards?
Response:
"Yes, we offer digital gift cards that can be purchased through our website. You can find them under the 'Gift Cards' section in the main menu."

Do you offer international shipping?
Response:
"Yes, we offer international shipping to most countries. Shipping fees and delivery times vary based on the destination country. You can find more information on international shipping on our Shipping Information page."

Your Role:
You will use these FAQs as reference responses when the user asks related questions. If the user's query is not covered by the FAQ list, escalate the matter or respond with a helpful suggestion.

"""

# System message initialization
system_message = SystemMessage(content=sys_msg_FAQs_database)

# Define database query tool (PostgreSQL)

def db_query(order_id: int):
    """
    Queries a PostgreSQL database and returns the results.

    Args:
        order_id: The order ID to query.

    Returns:
        The order status from the database.
    """
    DATABASE_URL = os.getenv("DATABASE_URL")
    # ====================================================For Debugging=======================================
    from sqlalchemy import create_engine
    import logging
    # Set up logging
    logging.basicConfig(level=logging.DEBUG)
    logger = logging.getLogger(__name__)

    DATABASE_URL = os.getenv("DATABASE_URL")
    if not DATABASE_URL:
        logger.error("DATABASE_URL is not set!")
    else:
        logger.info(f"Connecting to database: {DATABASE_URL}")

    try:
        engine = create_engine(DATABASE_URL)
        logger.info("Engine created successfully.")

        with engine.connect() as connection:
            logger.info("Successfully connected to the database.")
            result = connection.execute("SELECT 1")
            logger.info(f"Test query result: {result}")
    except Exception as e:
        logger.error(f"Failed to connect to the database: {e}")
    # =====================================================================================================
    # Connect to PostgreSQL
    conn = psycopg2.connect(DATABASE_URL)
    cur = conn.cursor()

    # Execute SQL query to get order status
    cur.execute(f"SELECT status FROM orders WHERE order_id = {order_id}")
    results = cur.fetchall()

    # Close the connection
    cur.close()
    conn.close()

    # Return the order status
    return results[0][0] if results else "Order not found."

# List of tools (e.g., database query tool)
tools = [db_query]

# Bind tools to the LLM (Gemini model)
llm_with_tools = llm.bind_tools(tools)

# Define chat state function
def chat_bot(state: MessagesState):
    """
    Handles the user input and gets the response from the model.
    
    Args:
        state: The state of the conversation.

    Returns:
        A dictionary containing the response message.
    """
    llm_response = llm_with_tools.invoke([system_message] + state["messages"])
    return {"messages": [llm_response]}

# Build the state graph using LangGraph
builder = StateGraph(MessagesState)

# Add nodes to the state graph
builder.add_node("Chat_Bot", chat_bot)
builder.add_node("tools", ToolNode(tools))

# Define edges (connections between nodes)
builder.add_edge(START, "Chat_Bot")
builder.add_conditional_edges("Chat_Bot", tools_condition)
builder.add_edge("tools", "Chat_Bot")

# Memory for the state graph
memory = MemorySaver()

# Compile the state graph with memory
graph = builder.compile(checkpointer=memory)

# Test the chatbot with a sample query (e.g., "How do I track my order?")
# if __name__ == "__main__":
#     sample_message = HumanMessage(content="How do I track my order?")
#     response = graph.invoke({"messages": [sample_message]})
#     print(response)
