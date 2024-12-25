# main.py
from fastapi import FastAPI
from pydantic import BaseModel

from chatbot.agent import graph

from langchain_core.messages import HumanMessage
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware, # type: ignore
    allow_origins=[
        "http://localhost:3000",  # Next.js default development URL
        "http://127.0.0.1:3000",
        "http://localhost:8000",
        "http://127.0.0.1:8000"
        # "http://0.0.0.0:8000"
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.post("/chatbot")
async def predict(question:str):
    print(question)
    # Thread
    config = {"configurable": {"thread_id": "1"}}
    # response =await graph.ainvoke({"messages": [HumanMessage(content=question)]})
    response = graph.invoke({"messages": [HumanMessage(content=question)]}, config=config)
    # return response
    return response["messages"][-1].content
# ===============================================================================================
