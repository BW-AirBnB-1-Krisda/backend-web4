# Welcome to TopChill API

Welcome to the TopChill API which you can find on: https://top-chill.herokuapp.com/

## Endpoints

## Auth 

- Register 
- https://top-chill.herokuapp.com/api/auth/register
- Data shape: 
    {
        "username": "ADD USERNAME OF YOUR CHOOSING",
        "password": "ADD PASSWORD OF YOUR CHOOSING",
        "email": "ADD EMAIL OF YOUR CHOOSING"
    }

- Login
- https://top-chill.herokuapp.com/api/auth/login
- Data shape: 
    {
        "username": "username",
        "password": "password"
    }
- Returns a token. Store the token in the authorization header so you can access protected API routes.

## Listings 

## More to come as we work throughout the week

- https://top-chill.herokuapp.com/api/listings/user/:id
- GET request to retrieve all listings for the user specified with the ID.
- POST request adds a listing for the user with the specified ID.
Data Shape: {
        "city": "Dummy" STRING,
        "room_type": "Dummy" STRING,
        "security_deposit": Dummy FLOAT,
        "guests_included": Dummy INTEGER,
        "min_nights": Dummy INTEGER
}


- https://top-chill.herokuapp.com/api/listings/:id
- GET request gets the listing with the specified ID.
- PUT request updated the listings with the specified ID.
Data Shape: {
        "city": STRING,
        "room_type": STRING,
        "security_deposit": FLOAT,
        "guests_included": INTEGER,
        "min_nights": INTEGER
}
- DELETE request deletes the listing with the specified ID.



- Added a dummy user so you can sign in easier. 

-Data shape:
{
    "username": "LambdaSchool",
    "password": "password"
}
