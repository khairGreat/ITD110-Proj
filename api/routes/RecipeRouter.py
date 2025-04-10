

from fastapi import APIRouter , Response
from fastapi.responses import JSONResponse
from database.collections import recipe_collection

recipe_router = APIRouter()


@recipe_router.get("/recipes")
async def get_all_recipes():
    recipes = await recipe_collection.find({}).to_list() 
    if recipes == None:
        return  Response(content='The value of recipes is None', status_code=500)
    return JSONResponse(content= recipes, status_code=200)


@recipe_router.post("/recipes")
async def create_recipe(recipe: dict):
    pass

