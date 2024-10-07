from fastapi import FastAPI
from .routers import users, scores

app = FastAPI()

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(scores.router, prefix="/scores", tags=["Scores"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}
