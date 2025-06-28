from typing import Union

from fastapi import FastAPI

app = FastAPI()

dietary_needs = {
    "5-8": {
        "male": {
            "calories": {
                "max": 0,
                "min": 0,
            },
            "protein": {
                "max": 0,
                "min": 0,
            },
        },
        "female": {
            "calories": {
                "max": 0,
                "min": 0,
            },
            "protein": {
                "max": 0,
                "min": 0,
            },
        },
    }
}

@app.get("/dietary_needs/{age}/{gender}")
def nutrition_recommendation(age: int, gender: Union[str, None] = None):
    return {"recommendation": {

    }}