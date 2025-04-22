from motor.motor_asyncio import AsyncIOMotorClient
from log.logger import logging
client = AsyncIOMotorClient('mongodb://localhost:27017')
db = client['p1']

logging.info("MongoDB connection established.")


