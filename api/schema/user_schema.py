from pydantic import BaseModel

 
class Users(BaseModel):
    user_id : int 
    username : str 
    password : str
    first_name : str 
    last_name : str
    
