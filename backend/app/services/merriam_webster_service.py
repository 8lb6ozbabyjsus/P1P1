import os
import httpx
from dotenv import load_dotenv

load_dotenv()

MERRIAM_WEBSTER_API_KEY = os.getenv("MERRIAM_WEBSTER_API_KEY")
MERRIAM_WEBSTER_API_URL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json"

async def get_definition(word: str) -> str:
    url = f"{MERRIAM_WEBSTER_API_URL}/{word}?key={MERRIAM_WEBSTER_API_KEY}"
    
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
        response.raise_for_status()
        result = response.json()
        
    if not result:
        return "No definition found."
    
    # Assuming the first entry contains the relevant definition
    definition = result[0].get('shortdef', ["No definition found."])[0]
    return definition
