import requests
from sqlite3 import Error, connect
import json

# SQLite stuff #


def create_connection(path):
    connection = None
    try:
        connection = connect(path, check_same_thread=False)
        print("Connection to DB established.")
    except Error as e:
        print(f'The error\'{e}\' occurred. Are you sure db file exists?')

    return connection


def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
    except Error as e:
        print(f"An error occured: \'{e}\'")


# CONNECTION #
db = create_connection('../db/database')

prices = {}

first_response = requests.get(
   "https://api.coingecko.com/api/v3/simple/price?ids=drip-network%2Cpig-finance%2Cdoggy-swap%2Crevolution%2Cgrimtoken&vs_currencies=usd", headers={"accept": "application/json"}).json()

for key in first_response:
    prices[key] = first_response[key]["usd"]

# This was for the inital grab of data
# for token in prices:
#     execute_query(
#         db, f'INSERT INTO TOKEN_INFO(TOKEN_NAME, PRICE) VALUES (\'{token}\', \'{prices[token]}\')')
#     print("Success!")
