# Todo App Frontend

> A Todo App developed with [React](https://github.com/facebook/react). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It's dependent to the backend service. Renders the todos that got from backend service, makes request to backend service on interaction and applies the result of request.

## Features

- Get todos and list
- add a new todo to list
- set as done-undone by clicking checkbox to the todo
- delete todo

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You can see the error messega on the console, if any problem occurs.

### `npm test`

Run all test in interactive mod.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
app is ready to be deployed!

## Dockerize Application

Docker builds the image by using `node:14` to build the and `nginx:stable` to serve the application.

### `docker build -t {$CONTAINER_NAME} .`

Builds the docker image by the `CONTAINER_NAME`.

### `docker run -p {$PORT}:80 {$CONTAINER_NAME}`

Runs the built docker image, links the `PORT` to exposed port `80`. The application is reachable at http://localhost:{$PORT}.

## Pipeline Automation

`Travis-ci` is used as Pipeline Automation tool and configured in the file `.travis.yml`.

It works for every commit and automates the steps:

- installs npm dependencies
- runs tests
- builds the application
- builds docker image
- pushes the docker image to docker hub
