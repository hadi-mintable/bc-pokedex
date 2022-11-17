# Blockchain.com pokedex clone

[Live demo](https://pokefriends-clone.netlify.app/)

I grew up watching Pokemon and stopped right after the first 150 (or 151 if you believe in Mewtwo) so this was really fun to build and brought back loads of memories. But that aside...

I bootstrapped this project using [Create React App](https://github.com/facebook/create-react-app) with Typescript, along with the following packages/tools:

### Retrieving data: Apollo GraphQL and react-query

- I was familiar with [tanstack's react-query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/), so aside from the magic that came with declarative querying, I love that it manages loading, fetching and error states for API calls
- Handling the different states helps me build intentional and sympathetic UI for end users

### styled-components

- In the array of options for styling components, I understand blockchain.com's team utilises styled components. I'm using this for the first time, but I intend to use this opportunity to showcase my css with this framework
- I like writing css natively - it's semantic and meaningful
- Abstracting styles does not bloat the jsx/tsx files and allows reusing of modules across pages/components

### firebase storage for Adding pokemon feature

- Users are able to add `Pokéfriends` (aka user-submitted pokémon) which are stored in firebase's realtime database
- These pokéfriends can be found in `/pokefriends`, but detail pages for them are not set up due to time constraints

### react-hook-form for Adding Pokéfriends form

- It's one of my favourite packages to handle submitting, validating and setting up forms

## What I would do differently

- During the course of development, I faced some obstacles while trying to retrieve the `description` value for each pokemon using the [GraphQL version](https://beta.pokeapi.co/graphql/console/) of the PokeAPI. Turns out it was in beta and description for most pokemon hadn't been populated yet. I would have done more investigation about the available data from APIs prior to starting.

- I would componentize more modules so they can be used across multiple pages (loader, error containers, title, etc)

- Given more time, I would add the following features:

  - a back button in pokedetail pages
  - breadcrumbs for each page to indicate how far along in the information architecture the user is
  - filtering pokemon by type in listing
  - mobile menu for showing search and "Add PokéFriends" feature
  - add validation for required fields for Adding PokéFriends form

## To run this project locally

`cd` to the project directory and run `npm install`

Once `node_modules` are installed...

### `npm run start`

Launches the app in [http://localhost:3000](http://localhost:3000) (or another port if you have an active port running).
