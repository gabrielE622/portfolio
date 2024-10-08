from psycopg2 import sql
from .database import get_db
from .schemas import UserCreate, ScoreCreate

def create_user(db, user: UserCreate):
    try:
        db.execute(
            sql.SQL("INSERT INTO users (username, email) VALUES (%s, %s) RETURNING id"),
            (user.username, user.email)
        )
        user_id = db.fetchone()[0]
        return user_id
    except Exception as e:
        raise Exception(f"Error creating user: {str(e)}")

def get_user(db, user_id: int):
    db.execute(
        sql.SQL("SELECT * FROM users WHERE id = %s"),
        (user_id,)
    )
    return db.fetchone()

def create_score(db, user_id: int, score: ScoreCreate):
    try:
        db.execute(
            sql.SQL("INSERT INTO exam_scores (user_id, score, exam_name) VALUES (%s, %s, %s)"),
            (user_id, score.score, score.exam_name)
        )
    except Exception as e:
        raise Exception(f"Error adding score: {str(e)}")

def get_scores_by_user(db, user_id: int):
    db.execute(
        sql.SQL("SELECT * FROM exam_scores WHERE user_id = %s"),
        (user_id,)
    )
    return db.fetchall()
