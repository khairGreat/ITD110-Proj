
def user_docs_serializer(doc): 
      return {**doc, "_id": str(doc["_id"])}

