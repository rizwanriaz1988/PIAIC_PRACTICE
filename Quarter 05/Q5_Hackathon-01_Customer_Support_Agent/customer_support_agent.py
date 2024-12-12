from langgraph.checkpoint.memory import MemorySaver
from langgraph.graph import MessagesState
from langgraph.graph import START, StateGraph, END
from langgraph.prebuilt import tools_condition, ToolNode
from langgraph.graph.state import CompiledStateGraph
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.tools import tool
import os
import psycopg2

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

system_message = SystemMessage(content=sys_msg_FAQs_database)

llm: ChatGoogleGenerativeAI = ChatGoogleGenerativeAI(model = "gemini-1.5-flash", max_retries=2)

def db_query(order_id: int):


  """
  Queries a PostgreSQL database and returns the results.

  Args:
      order_id: order_id to make a query to database.

  Returns:
      The results of the SQL query.
  """

  
  DATABASE_URL =os.environ["DATABASE_URL"]

  # Connect to PostgreSQL
  conn = psycopg2.connect(DATABASE_URL)
  cur = conn.cursor()

  # Execute a raw SQL query
  cur.execute(f"SELECT status FROM orders where order_id={order_id}")

  # Fetch all results
  results = cur.fetchall()
  cur.close()
  conn.close()

  return results[0][0]

tools: list[tool] = [db_query]
llm_with_tools = llm.bind_tools(tools)

# state
def chat_bot(state: MessagesState):
  llm_response = llm_with_tools.invoke([system_message] + state["messages"])
  return {"messages": [llm_response] }

builder: StateGraph = StateGraph(MessagesState)

# Define nodes: these do the work
builder.add_node("Chat_Bot", chat_bot)
builder.add_node("tools", ToolNode(tools))

# Define edges
builder.add_edge(START, "Chat_Bot")
builder.add_conditional_edges("Chat_Bot",tools_condition)
builder.add_edge("tools", "Chat_Bot")

# Add Memory
memory: MemorySaver = MemorySaver()

# compile graph with memory
graph: CompiledStateGraph = builder.compile(checkpointer=memory)

# # graph.invoke({"messages": [HumanMessage(content="Hi")]})
