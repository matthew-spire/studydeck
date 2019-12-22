## React Course

#### Lecture 1: Bootstrap a new React project with npx and create-react-app

- Create a new React app using ```npx create-react-app nameOfReactApp```
- Change directories into the app ```cd nameOfReactApp```
- Run ```yarn start```

<br>

- Open the project up in your code editor of choice
- Perform some cleanup
  - Delete the CSS in App.css
  - Delete everything between the div tags in App.js and get rid of the className
  - Remove the import of the logo
  - Delete App.test.js
  - Verify the changes have not broken anything by running ```yarn start```

#### Lecture 2: Render a UI with JSX in a React Function Component

- Start with the raw markup that will give the initial layout for the pages
- In App.js:
  - Get rid of "Hello, world!"
  - Add a ```<header></header>``` element and a ```<main></main>``` element in-between the div tags
  - Add some header tags to the header element and the main element
  - Add a div to the main element that will contain all the flashcards
    - Add a nested div that will represent an individual flashcard
      - Add a nested div for the buttons (i.e. Show the Back, Edit Card, and Delete Card) associated with taking actions on an individual flashcard

#### Lecturue 3: Apply Styles to a UI in JSX

- Add normalize.css file and paste CSS from [<https://necolas.github.io/normalize.css/latest/normalize.css>]
  - Import normalize.css in App.js
- Paste the CSS from [<https://github.com/avanslaars/egghead-studydeck>] to App.css
- Style the header
  - Add a span tag w/ a className to the h1 tag
    - Note: You cannot use the word class and have to use className because class does not work with the underlying JavaScript API that is used
- Style the div that will contain all the flashcards
  - Will be a container for a CSS Grid layout
  - Add ```className="gridContainer"``` to the div
- Style the div that will represent an individual flashcard
  - Add ```className="tile"``` to the div
- Style the header for the flashcard term
  - Add ```className="cardTerm"``` to the header
- Style the div that contains the buttons for the flashcard
  - Add ```className="cardButtons"``` to the div
- Style the buttons
  - So, the author's buttons are separated evenly across the bottom of the card and he wants to put the "Edit" and "Delete" buttons on the right hand side of the card and pull the two buttons (i.e. the "Edit" and the "Delete" buttons) together
    - Add an extra container around the two buttons, i.e. put the "Edit" and the "Delete" buttons inside a div

#### Lecture 4: Create a Reusable React Component

- Take representation of one of the flashcards and turn it into a reusable component &rarr; use to represent each of the flashcards in the application
- Create a new folder, components, within the src folder
  - Create a new file within the components folder called CardPreview.js
  - Need to ```import React from 'react'``` because we need React to be within scope
    - JSX gets transpiled into function calls for React.createElement()
  - Export the component, which will be a function called CardPreview
    - We want the function to return the JSX for our component
      - Cut and paste everything within ```<div className="tile"></div>``` from App.js to CardPreview.js
- In App.js
  - Replace the markup that was cut with a reference to the CardPreview component
  - Make sure to do the necessary import
    - In curly braces because it is a named export
- Need a way to pass data into our component
  - Done through props
    - Add ```term="What does the duck say?"``` to the component
    - Will have no effect because the prop is not doing anything in the component yet
    - Accept a single argument, props, in the CardPreview function
      - props is going to be an object where the term attribute is going to be a key on the props object
      - Can replace the hardcoded "Term goes here" using JavaScript expressions (i.e. switching from JSX)

#### Lecture 5: Maintain State in a React Component with the useState Hook

- Flashcards are not very useful
  - No corresponding definitions
    - Give each card a corresponding definition prop, e.g. ```definition="quick"```, which will come before the prop term
    - Prop is not yet being handled by the component, i.e. CardPreview.js
      - First test to see if the component is receiving the prop by replacing the term with the definition 
  - No way to flip them over
    - Need a way to swap between the front of the card and the back of the card
    - The way we allow a component to remember information about itself in React is through component state
    - Before the return statement add ```React.useState(true)``` and this will return two values which will be destructured off of an array
      - We are going to get our value, i.e. the initial value is the true that we are passiong into useState, and as that changes over time we need an identifier to hold that value, which will be called isFront (i.e. the front of the card) and is the component state
        - Used to determine whether we show the term or the definition
        - State value controls whether we see the term or the definition &rarr; need a way to control
      - The second item in the array that gets returned from useState is a state updater function for the particular value, which will be called setIsFront
    - Create a new function called ```handleCardFlip() {}```
      - This is the function that will be called when we click the "Show Back" button
      - Use ```setIsFront(false)``` which will allow us to go from the front of the card to the back of the card
      - Need to attach the function to the button in order to be able to use it
        - Done using an onClick handler attached to the button
        - Clicking the button will only flip the card over from front to back, not from back to front
          - Want the ```handleCardFlip``` function to toggle between ```isFront(true)``` and ```isFront(false)```
          - The state updater function that we get back from useState will also take a callback rather than just a value &rarr; get the current value from this piece of state and return the new value by returning the negated value of the current state value
            - Done for each component individually because each component has its own state
        - Clean up the button
          - If you are on the Term side, then the button should read 'Show Back', whereas if you are on the Definition side, then the button should read 'Show Front'
- Slightly different styling if you are on the Definition side
  - Instead of just using ```className="tile"``` we will use a JavaScript expression and back ticks for string interpolation
  - Want to toggle back class on and off based on the value of isFront, which we can do using a ternary operator

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
