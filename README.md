# Weather APP

A simple weather app that uses weatherAPI to display the current weather forecast of a city.

I started this project to practice Asynchronous JavaScript and to learn how to use APIs.

## Features

- Search for a city
- Auto suggest cities as the user types in the search bar
- Showing loading spinner for the user while fetching data
- Use geolocation to get the current weather forecast of the user's location
- Change the look of the app based on the weather condition
- Ability to switch between Celsius and Fahrenheit
- Display hourly weather forecast
- Support for keyboard navigation

## Demo

Try the app deployed on github pages: [Weather App](https://ahmeducf.github.io/weather-app/)

![Weather App Demo](./demo/demo.gif)

## Technologies Used

- Webpack: Module bundler
- Babel: JavaScript compiler
- Fetch API: To make HTTP requests
- Geolocation API: To get the user's current location
- Husky: To run scripts during and before commits
- Eslint: To enforce code style
- Prettier: To format code

## Local Setup

1. Clone the repo

```bash
git clone git@github.com:ahmeducf/weather-app.git
```

2. Install dependencies

```bash
npm install
```

3. Run webpack dev server in production mode

```bash
npm run prod
```

The app will be available at `http://localhost:8080/`

## Acknowledgement

- [WeatherAPI](https://www.weatherapi.com/): To get the weather forecast of a city
- [date-fns](https://date-fns.org/): To manipulate dates

## TODO

- [ ] Make the app responsive for mobile devices
- [x] Add unit tests
- [ ] Improve accessibility
