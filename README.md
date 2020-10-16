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

- Added a set username and password so we don't have to register every so often.

-Data shape:
{
    "username": "LambdaSchool",
    "password": "password"
}
