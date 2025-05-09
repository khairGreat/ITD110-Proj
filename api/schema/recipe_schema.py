from pydantic import BaseModel 


class Recipe(BaseModel): 
    recipe_name : str
    recipe_owner : str
    star_ratings : int
    ingredients : list
    directions : list
    comments : list 