from fastapi import FastAPI, HTTPException
from app.services.chatgpt_service import get_chatgpt_response
from app.services.merriam_webster_service import get_definition

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}

@app.get("/chatgpt/")
async def chatgpt_prompt(prompt: str):
    try:
        response = await get_chatgpt_response(prompt)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/dictionary/")
async def dictionary(word: str):
    try:
        definition = await get_definition(word)
        return {"word": word, "definition": definition}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
