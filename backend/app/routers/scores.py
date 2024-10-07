from fastapi import APIRouter, Depends, HTTPException
from psycopg2 import sql
from ..database import get_db
from ..schemas import ScoreCreate

router = APIRouter()

@router.post("/users/{user_id}/scores")
def add_score(user_id: int, score: ScoreCreate, db=Depends(get_db)):
    try:
        db.execute(
            sql.SQL("INSERT INTO exam_scores (user_id, score, exam_name) VALUES (%s, %s, %s)"),
            [user_id, score.score, score.exam_name]
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error adding score: {str(e)}")
    return {"message": "Score added successfully"}

@router.get("/get_scores")
def users():
    return {"message": "Well done"}
