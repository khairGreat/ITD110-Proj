
from fastapi import FastAPI
from routes.RecipeRouter import recipe_router
from routes.UsersRouter import  user_router


api = FastAPI()

# ? ROUTERS for each objects
api.include_router(recipe_router)
api.include_router(user_router)

@api.get("/")
def root():
    return 'hello ITD110'


    