# Operations on Counter

## Environment 

- React Version: 16.13.1
- Node Version: v12 (LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/YmsTc-lfFHcpqQWz5cEXzw/ezgif.com-gif-maker%20(1).gif)

## Functionality Requirements

The component has the following functionalities: 


The component has the following functionalities: 

- There is a Header with the data-testid attribute as 'header', and text content as 'Counter'.
- There is another Header with the data-testid attribute as 'counter', with its initial value as 0. 
- There is a div with 3 functional components.
    - A button with the data-testid attribute as 'add-button', with its text content as 'Add'.
    - An input field with the data-testid attribute as 'input-field'.
    - A button with the data-testid attribute as ''sub-button", with its text content as 'Sub'.
- There is a Button with the data-testid attribute as 'reset-button', and text content as 'Reset Counter'.
- The counter changes its values based on the addition and subtraction operations performed by the buttons
- The functionality associated with the 'add-button' is to increment the value of the counter variable by the amount present in the 'input-field'.
- The functionality associated with the 'sub-button' is to decrement the value of the counter variable by the amount present in the 'input-field'.
- The functionality associated with the 'reset-button' is to reset the value of the counter variable to 0.
- If the 'input-field' value is non-integral or empty, then the 'add-button' and 'sub-button' components are disabled until a valid integral value is inputted again.

## Testing Requirements

The following data-testid attributes are required in the component for the tests to pass:

- The Header displaying 'My Counter' should have the data-testid attribute as 'header'.
- The Header displaying the value for the counter should have the data-testid attribute as 'counter'.
- The Add button should have the data-testid attribute as 'add-button'.
- The Subtract button should have the data-testid attribute as 'sub-button'.
- The Input field should have the data-testid attribute as 'input-field'.
- The Reset button should have the data-testid attribute as 'reset-button'.

## Project Specifications

**Read Only Files**
- src/App.test.js

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
