# fastapi_neon/main.py
from contextlib import asynccontextmanager
from typing import Union, Optional, Annotated
# from fastapi_neon import settings
from sqlmodel import Field, Session, SQLModel, create_engine, select
from fastapi import Depends, FastAPI
from app import settings
from fastapi.middleware.cors import CORSMiddleware


class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(index=True)
    description: str
    status: bool
    completed:str 


# only needed for psycopg 3 - replace postgresql
# with postgresql+psycopg in settings.DATABASE_URL
connection_string = str(settings.DATABASE_URL).replace(
    "postgresql", "postgresql+psycopg"
)


# recycle connections after 5 minutes
# to correspond with the compute scale down
engine = create_engine(
    connection_string, connect_args={"sslmode": "require"}, pool_recycle=300
)



def create_db_and_tables():
    SQLModel.metadata.create_all(engine)



# The first part of the function, before the yield, will
# be executed before the application starts

@asynccontextmanager    
async def lifespan(app: FastAPI):
    print("Creating tables..")
    create_db_and_tables()
    yield



app = FastAPI(lifespan=lifespan, title="Hello World API with DB", 
    version="0.0.1",
    servers=[
        {
            "url": "http://127.0.0.1:8000", # ADD NGROK URL Here Before Creating GPT Action
            "description": "Development Server"
        }
        ])
# app = FastAPI(lifespan=lifespan)

# Allow requests from localhost:3000
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE","PATCH"],
    allow_headers=["Authorization", "Content-Type"],
)

def get_session():
    with Session(engine) as session:
        yield session



@app.get("/")
def read_root():
    return {"Hello": "World with dev docker rizi with postgres and pgadmin 2"}


@app.get("/todos/")
def read_todos(session: Annotated[Session, Depends(get_session)]):
    todos = session.exec(select(Todo)).all()
    return todos

@app.get("/todos/{todo_id}")
def read_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
    todo = session.get(Todo, todo_id)
    return todo

@app.post("/todos/")
def create_todo(todo: Todo, session: Annotated[Session, Depends(get_session)]):
    session.add(todo)
    session.commit()
    session.refresh(todo) #to restart the session with the new todo
    return todo
    

@app.delete("/todos/{todo_id}")
def delete_todo(todo_id: int, session: Annotated[Session, Depends(get_session)]):
    todo = session.get(Todo, todo_id)
    session.delete(todo)
    session.commit()
    return {"message": "Todo deleted"}
    
    

@app.patch("/todos/{todo_id}")
def update_todo( todo_id: int, payload: Todo , session: Annotated[Session, Depends(get_session)]):
    todo_to_update = session.get(Todo, todo_id)
    # return (todo_to_update.status,todo.status)
    if todo_to_update is not None:
        
        
        if payload.status is not None:
            todo_to_update.status = payload.status

        if payload.title is not None:
            todo_to_update.title = payload.title

        if payload.description is not None:
            todo_to_update.description = payload.description


        session.add(todo_to_update)
        session.commit()
        session.refresh(todo_to_update)
        return todo_to_update
    
    else:
        return {"message": "Todo not found"}


    
    