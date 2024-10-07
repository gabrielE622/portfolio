from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import sql
from ..database import get_db
from ..schemas import UserCreate
from typing import List

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate, db=Depends(get_db)):
    try:
        db.execute(
            sql.SQL("INSERT INTO users (username, email, password) VALUES (%s, %s, %s)"),
            [user.username, user.email, user.password],
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error creating user: {str(e)}")
    return {"message": "User created successfully"}

@router.get("/", response_description="Retrieve users")
def get_users() -> List[dict]:  
    return [{"username": "example_user", "email": "example@example.com"}]