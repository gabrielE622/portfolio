import psycopg2
from psycopg2.extras import RealDictCursor
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

def get_db():
    try:
        conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        yield cursor
        conn.commit()
    except Exception as e:
        print(f"Database connection error: {e}")
        conn.rollback()
    finally:
        cursor.close()
        conn.close()
