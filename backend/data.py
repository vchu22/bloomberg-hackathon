import pandas as pd

meals_df = pd.read_csv('data/meal_history.csv')
meals_df.fillna(value={"Calories": 0,"Protein": 0,"Fruits": 0,"Vegetables": 0,"Grains": 0,"Dairy": 0, "Link": ""}, inplace=True)

recipes_df = pd.read_csv('data/recipes.csv')