
from fastapi import APIRouter , Response, Request
from fastapi.responses import JSONResponse
from database.collections import user_collection
from log.logger import logging 
from utility.parser import user_docs_serizaler
from schema.user_schema import User



user_router = APIRouter()


@user_router.get("/users")
async def get_all_users() -> JSONResponse:
    
    logging.info('At the get all users route') # ? LOGGING 
    
    try:
        cursor = user_collection.find({})
        users = [user_docs_serizaler(document) async for document in cursor] 
        
        if not users:
            return JSONResponse(content={"message": "No users found"}, status_code=404)
        return JSONResponse(content=users, status_code=200)
    except Exception as error:
        logging.error(f"Error fetching users: {error}") # ! ERROR LOG (get all users)
        return JSONResponse(content={"error": "Internal error"}, status_code=500)
        

@user_router.post("/login")
async def login( request : Request ):
    
    logging.info('login route')  # ? LOGGING 
    
    try: 
        
        data = await request.json()
        user = await user_collection.find_one({
            "user_name" : data["user_name"],
            "password" : data["password"]
        })
        
        if user is None:
            return Response(content={"error":"user can't be found"}, status_code=404) 

        user["_id"] = str(user["_id"])  # Make ObjectId serializable
        user.pop("password", None)
        
        return JSONResponse(content=user,status_code=200)
    
    except Exception as error:
        logging.error(error) # ! ERROR LOG (Login)
        return Response(content={"error": "Internal error"}, status_code=500)

@user_router.post('/signup')
async def sign_up():
    pass