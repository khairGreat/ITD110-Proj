from fastapi import FastAPI
from routes.RecipeRouter import recipe_router
from routes.UsersRouter import user_router
from fastapi.middleware.cors import CORSMiddleware

api = FastAPI()

api.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # <-- your React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api.include_router(recipe_router)
api.include_router(user_router)

@api.get("/")
def root():
    return 'hello ITD110'
