from typing import Optional
from pydantic import BaseModel, Field

class User(BaseModel):
    user_id: Optional[int]
    user_name: Optional[str]
    password: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    id: Optional[str] = Field(alias="_id")

    class Config:
        allow_population_by_field_name = True
