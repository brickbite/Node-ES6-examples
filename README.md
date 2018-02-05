# Node with ES6 examples
- Node v9.4.0
- npm 5.6.0
- Also with Jest (made ES6 compatible using babel) examples

## Usage:
1. check Node version (if it's at least the above)
1. clone repo, navigate to directory in terminal
1. run ```yarn install```
1. create .env file (see example.env), and enter google maps api [reference] (https://developers.google.com/maps/documentation/distance-matrix/start)
1. run ```yarn test``` to see all tests together

## Notes/TODOs:
- __find-distance:__ response goes into catch block (TODO: debug), so handling logic is currently written there
- __find-distance:__ tests use the acutal API (TODO: mock responses for the tests)
- __find-links:__ uses folder website and the html files contained in it
