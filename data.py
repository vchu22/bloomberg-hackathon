import pandas as pd

df = pd.read_csv('./data/meals.csv')
df.fillna(value={"Calories": 0,"Protein": 0,"Fruits": 0,"Vegetables": 0,"Grains": 0,"Dairy": 0}, inplace=True)