# PokeReview
CS 260 Startup project

## Elevator Pitch
The PokeReview site allows Pokemon enthusiasts to discuss their favorite Pokemon with others. 
View, Favorite, and comment on any of the original Pokemon.

## Key Features
- Account Creation / Login
- View a List of Pokémon
- Comment on any Pokemon
- Read others comments

## Technology description
- HTML - Uses correct HTML structure for application. Page for login, page for list view, page for pokemon details and comments.
- CSS - Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- JavaScript - Provides login, list of pokemon, applying comments, display other users comments, backend endpoint calls.
- React - Single page application with views componentized and reactive to user's actions.
- Service - Backend service with endpoints for:
  - retrieving comments
  - submitting comments
  - get pokemon data from https://pokeapi.co/
- DB/Login - Store users and comments in database. Register and login users. Credentials securely stored in database. Can't comment unless authenticated.
- WebSocket - When a new comment is made, all users are notified

## Design

[design](IMG_5536.jpeg)
