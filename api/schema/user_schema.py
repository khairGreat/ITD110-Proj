from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date

class UserLogin(BaseModel):
    user_name : str 
    password : str  
    
class UserSignUp(BaseModel):
    first_name: str
    last_name: str
    birthdate: date
    age: Optional[int] = None
    user_name: str
    password: str

    favorites: List[str] = Field(default_factory=list)
    recipes: List[str] = Field(default_factory=list)