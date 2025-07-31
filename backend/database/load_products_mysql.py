import pandas as pd
import mysql.connector

# Load CSV
df = pd.read_csv('products.csv')

# Replace NaN with None
df = df.where(pd.notnull(df), None)

# Connect to MySQL
conn = mysql.connector.connect(
    host="localhost",
    user="root",        
    password="Sud1605,.",     
    database="ecommerce"
)
cursor = conn.cursor()

# Insert rows
for _, row in df.iterrows():
    sql = """
        INSERT INTO products (
            id, cost, category, name, brand,
            retail_price, department, sku, distribution_center_id
        ) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
    """
    values = (
        int(row['id']) if row['id'] is not None else None,
        float(row['cost']) if row['cost'] is not None else None,
        row['category'],
        row['name'],
        row['brand'],
        float(row['retail_price']) if row['retail_price'] is not None else None,
        row['department'],
        row['sku'],
        int(row['distribution_center_id']) if row['distribution_center_id'] is not None else None
    )
    cursor.execute(sql, values)

conn.commit()
cursor.close()
conn.close()

print("✅ Data inserted successfully.")
