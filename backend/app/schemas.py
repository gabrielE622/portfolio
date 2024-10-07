from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class ScoreCreate(BaseModel):
    score: int
    exam_name: str

    class Config:
        orm_mode = True
