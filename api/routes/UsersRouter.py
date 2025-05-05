
from datetime import date
from sqlite3 import Date
from fastapi import APIRouter , Response, Request
from fastapi.responses import JSONResponse
from database.collections import user_collection
from log.logger import logging 
from utility.ageConverter import calculate_age
from utility.hashing import hash_password
from utility.parser import user_docs_serializer
from schema.user_schema import UserLogin, UserSignUp




user_router = APIRouter()


@user_router.get("/users")
async def get_all_users() -> JSONResponse:
    
    logging.info('At the get all users route') # ? LOGGING 
    
    try:
        cursor = user_collection.find({})
        users = [user_docs_serializer(document) async for document in cursor] 
        
        if not users:
            return JSONResponse(content={"message": "No users found"}, status_code=404)
        return JSONResponse(content=users, status_code=200)
    except Exception as error:
        logging.error(f"Error fetching users: {error}") # ! ERROR LOG (get all users)
        return JSONResponse(content={"error": "Internal error"}, status_code=500)
        

# ? LOGIN ROUTE

@user_router.post("/login")
async def login(credentials : UserLogin ):

    logging.info('login route')  # ? LOGGING 

    try: 
      
        user = await user_collection.find_one({
            "user_name": credentials.user_name,
            "password": credentials.password
        })

        if user is None:
            return JSONResponse(content={"error": "User can't be found"}, status_code=404)

        user = user_docs_serializer(user) 
        user.pop("password", None)  # Remove password before sending response

        return JSONResponse(content=user, status_code=200)

    except Exception as error:
        logging.error(f"Login error: {error}")  # ! ERROR LOG
        return JSONResponse(content={"error": "Internal error"}, status_code=500)
    
    
#  ? SIGNUP ROUTES
@user_router.post('/signup')
async def sign_up(credentials: UserSignUp):
    logging.info('at signup')
    
    try:
        user_data = {
            "first_name": credentials.first_name,
            "last_name": credentials.last_name ,
             "birthdate": credentials.birthdate.isoformat(),  # Converted to string
            "age": calculate_age(credentials.birthdate),
            "user_name": credentials.user_name,
            "password": hash_password(credentials.password)  , 
            "favorites"  : credentials.favorites , 
            "recipes" : credentials.recipes
        }

        result = await user_collection.insert_one(user_data)
        logging.info(result)
        
        if not result:
            return JSONResponse(
                content={"error": "Can't create a user"},
                status_code=404
            )

        # Fetch and serialize the inserted user
        new_user = await user_collection.find_one(
            user_data
        )

        
        new_user  = user_docs_serializer(new_user)
    
        return JSONResponse(
            content=new_user,
            status_code=200
        )

    except Exception as error:
        logging.error(error)
        return JSONResponse(content={"error": "Internal error"}, status_code=500)
