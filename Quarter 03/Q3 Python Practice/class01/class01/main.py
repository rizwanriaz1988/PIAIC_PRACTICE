from fastapi import FastAPI



app: FastAPI = FastAPI()




@app.get("/riz")
def getName():
    return{"response":"Hello dddd world"}
