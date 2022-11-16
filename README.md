# Blockchain.com pokedex clone

I grew up watching Pokemon and stopped right after the first 150 (or 151 if you believe in Mewtwo) so this was really fun to build and brought back loads of memories. But that aside...

I bootstrapped this project using [Create React App](https://github.com/facebook/create-react-app) with Typescript, along with the following packages/tools:

### Apollo GraphQL

- I was familiar with [tanstack's react-query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/), so aside from the magic that came with declarative querying, I love that it manages loading, fetching and error states for API calls
- Handling the different states helps me build intentional and sympathetic UI for end users

### styled-components

- In the array of options for styling components, I understand blockchain.com's team utilises styled components. I'm using this for the first time, but I intend to use this opportunity to showcase my css with this framework
- I like writing css natively - it's semantic and meaningful
- Styling does not bloat the JSX

## What I would do differently

- During the course of development, I faced some obstacles while trying to retrieve the `description` value for each pokemon using the [GraphQL version](https://beta.pokeapi.co/graphql/console/) of the PokeAPI. Turns out it was in beta and description for most pokemon haven't been populated yet.

## Available Scripts

In the project directory, you can run:

### `npm start`

Launches the app in [http://localhost:3000](http://localhost:3000) (or another port if you have an active port running).

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
