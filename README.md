(Screenshots of Unit tests - in the VisualStudio Code terminal using the React testing library - and UI Integration tests - in the Cypress framework - passing are added at the end of this README.md file)

##Set Up

To install project dependencies: `npm install`
To run the server: `npm start`
To view application visit 'http://localhost:3000'
To run the unit tests: `npm test`
To run the UI integration tests with Cypress:
Leave the server running, and open a new tab in Terminal.
Run `npm run test:e2e` to open Cypress test suite.
Run the `App.spec.js` file in Cypress to run the integration tests

##PDA Tasks:

1. Unit Tests -

You need to test the Calculator model using the React testing library. Write your tests in `src/tests/App.test.js`. Test the following functions perform the following tasks:
add() - add 1 to 4 and get 5
subtract() subtract 4 from 7 and get 3
multiply() - multiply 3 by 5 and get 15
divide() - divide 21 by 7 and get 3
numberClick() - concatenate multiple number button clicks
operatorClick() - chain multiple operations together

2. UI Integration Tests -

You need to write front-end integration tests to ensure the Calculator model and browser UI are working to meet the user requirements. The framework provided to do this is Cypress.. There is one sample test written in `/cypress/integration/App.spec.js` and you should continue writing your tests in this file.

You should write tests to ensure the following requirements are met:
Do the number buttons update the display of the running total?
Do the arithmetical operations update the display with the result of the operation?
Can multiple operations be chained together?
Is the output as expected for a range of numbers? Write tests for positive, negative, decimals and very large numbers
What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
<img width="955" alt="Screenshot 2022-04-15 at 17 31 25" src="https://user-images.githubusercontent.com/64783968/163601011-40fef8ad-525a-45da-8191-a6f3d7c5384f.png">


<img width="1366" alt="Screenshot 2022-04-15 at 17 30 15" src="https://user-images.githubusercontent.com/64783968/163601026-ab10d103-85ca-4ab3-a540-e9ebcc1be736.png">


