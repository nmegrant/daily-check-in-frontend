
# Daily Checkin App

## Table of contents
* [About](#about)
* [Goals](#goals)
* [Technologies](#technologies)
* [Demo](#demo)
* [Server Repository](#server-repository)
* [Available Scripts](#available-scripts)

### About 
[![Netlify Status](https://api.netlify.com/api/v1/badges/f8f4d09e-3b5a-47a2-9411-d4fc3ccaf338/deploy-status)](https://app.netlify.com/sites/vigorous-shaw-7be461/deploys)

See our deployed site [here](https://vigorous-shaw-7be461.netlify.app/)

An app for users to judge assess their emotional wellbeing using their written or spoken word. Users can also track their emotional wellbeing over time.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Goals

* Collaborate with teammates using proper git workflow.
  * Use feature branches for development work.
  * Perform [code](https://github.com/nmegrant/group-project-frontend/pull/8) [reviews](https://github.com/nmegrant/group-project-frontend/pull/19) before merging feature branches. 
* Continue gaining experience in creating fullstack apps using React-Redux for the frontend and a RESTful API using Express.js for the backend.
* Experiment with new language-related libraries [react-speech-recognition](https://www.npmjs.com/package/react-speech-recognition) and [sentiment](https://www.npmjs.com/package/sentiment)
* Display data in a visually appealing manner using [Recharts](https://recharts.org/en-US/)

### Technologies

##### Front End
* Node.js
* React
* Redux
* Axios
* Material-UI
* React Speech Recognition
* [Sentiment](https://github.com/contexD/group-project-backend/blob/master/routers/sentiment.js) 
* [Recharts](https://github.com/nmegrant/group-project-frontend/blob/master/src/components/graph.js)

##### Back End
* Express
* REST
* Sequelize
* Postgres

### Demo




### Server Repository 
The repository for the backend can be found [here](https://github.com/contexD/group-project-backend). This is a RESTful API using Express.js. The database is built using Postgres. Object-relational mapping is done using Sequelize. 

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
