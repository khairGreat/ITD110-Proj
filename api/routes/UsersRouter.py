
from fastapi import APIRouter , Response
from fastapi.responses import JSONResponse
from database.collections import user_collection 

user_router = APIRouter()


@user_router.get("/users")
async def get_all_users():
    users = await user_collection.find({}).to_list()
    if users == None:
        return  Response(content='The value of users is None', status_code=500)
    return JSONResponse(content= users, status_code=200)



