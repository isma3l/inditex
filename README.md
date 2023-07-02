# Web application for itunes podcasts playback

Mini-application for listening to music podcasts.

The application has three views:

Main view
Details of a podcast
Details of a podcast chapter

Libraries used:

For development: React, Redux Toolkit, RTK query, Redux persist
For testing: Jest, Testing Library

## Initial steps

Clone the repository:

### `git clone `

Install the dependencies In the root of the cloned project run the following command:

### `yarn install`

## Application testing

A personal proxy server is used to run the application: (https://github.com/isma3l/server-proxy)

### Test in development mode

Although it is not recommended to save environment variables in the repository, as it is a proof of concept we leave the .env.development file that contains the URLs to test the application.

In the root of the project run:

## `yarn start`

After executing the command a local server will be executed at (http://localhost:3000) and the browser with the web application will be opened.

### Test in production mode

For this test, it is required to package the application and to lift it through a local server.

Execute the following command:

## `yarn build`

Once the compilation is finished, a folder called build will be created. This folder is the one to be used for testing.

Tip You can use the serve server. It is easy to use, just install it globally and pass it the path to the build folder.

### `yarn global add serve`

### `serve -s build`

Subsequently, to test the application, log on to (http://localhost:3000/)

## The application is deployed in
