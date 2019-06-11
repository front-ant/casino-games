# React Test: Displaying some games...

## Specs
* React app
* Fake user login (achieved via `json-server`)
* Games can be displayed as list or grid, user can switch between the two
* Responsive design
* Build via Webpack
* Fake data provided by [`faker.js`](https://github.com/marak/Faker.js/)

## Setup
1. `git clone https://github.com/front-ant/casino-games`
1. `npm install`
1. Start the `webpack-dev-server`:  `npm run start`
1. Start the Server for fake login requests: `npx json-server watch --auth.json`

## Further Improvements
* Add pagination
* Use Redux for managing database
* Ponder the implementation of React Router
