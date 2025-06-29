import os
from typing import Union
import json
from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

app = FastAPI()

with open('data/dietary_needs.json') as f:
    dietary_needs = json.load(f)

@app.get("/dietary_needs/{age}/{gender}")
def fetch_dietary_needs(age: int, gender: Union[str, None] = None):
    if (2 <= age <= 4):
        age_range = "2-4"
    elif (5 <= age <= 8):
        age_range = "5-8"
    elif (9 <= age <= 13):
        age_range = "9-13"
    elif (14 <= age <= 18):
        age_range = "14-18"
    else:
        return {}
    return {
        "units": dietary_needs["units"],
        "recommended_amounts": dietary_needs[age_range][gender]
    }

@app.get("/img/{food}")
def fetch_image(food: str):
    file_path = f"img/{food.lower()}.png"
    if os.path.isfile(file_path):
        return FileResponse(f"img/{food.lower()}.png", media_type="image/jpeg")
    else:
        raise HTTPException(status_code=404, detail="Image not found")