## Build status:

 **[CircleCI](https://circleci.com/gh/riguelbf/ilegra-flix)**

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/riguelbf/ilegra-flix/master?style=for-the-badge)

![CircleCI](https://img.shields.io/circleci/build/gh/riguelbf/ilegra-flix/master?style=for-the-badge)

![GitHub All Releases](https://img.shields.io/github/downloads/riguelbf/ilegra-flix/total?style=for-the-badge)

## About this project

This project is a simple clone from NetFlix, where the objective is training and show how I think about project implementation using React JS

## Tech stack

- React JS
- Jest
- Axios
- Testing-library
- PropTypes
- Styled Components

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn test-unit`

Launches only the unit test runner in the interactive watch mode.<br />

### `yarn test-integration`

Launches only the integration test runner in the interactive watch mode.<br />

### `yarn test-debug`

If you some time have a problem during your tests, maybe it can be util for you, because this command give you a ability for inspect step by step what's happened <br />

### `yarn test-coverage`

For understand how is your code coverage about tests, this command can be util

### `yarn docker-build`

For have more control about your running environment this command, give for you the creation of image, but docker application it is necessary <br />

### `yarn docker-run`

This command is for running your project into docker image, but is necessary build an image before with command 'yarn docker-build' <br />
