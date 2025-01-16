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

![design](IMG_5536.jpeg)


## HTML Deliverables
- Simon HTML deployed to your production environment: learned how to deploy using the .sh file
- **Prerequisite**: A link to your GitHub startup repository prominently displayed on your application's home page
- **Prerequisite**: Notes in your startup Git repository README.md file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the [voter app](https://github.com/webprogramming260/startup-example) as an example.
- **Prerequisite**: Enough Git commits to fully prove your ownership of your code. This usually means dozens of commits spread across multiple days of the deliverable development period. Failure to do this may result in the rejection of your submission.
- Properly structured HTML
  - 20% HTML pages for each component of your application
  - 10% Proper use of HTML tags including BODY, NAV, MAIN, HEADER, FOOTER
  - 10% Links between pages as necessary
  - 10% Application textual content
  - 10% Placeholder for 3rd party service calls
  - 10% Application images
  - 10% Login placeholder, including user name display
  - 10% Database data placeholder showing content stored in the database
  - 10% WebSocket data placeholder showing where realtime communication will go

