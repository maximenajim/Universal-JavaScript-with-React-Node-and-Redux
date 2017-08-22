# Setting Up an Universal JavaScript App Development Environment
In this section we review Node.js and NPM, the node package manager. We also setup a basic application and install dependencies, then configure Babel and Webpack to build and run a simple javascript application.

# Basics
Here are a few basic examples of using Node.js and NPM.

## Hello World with Node.js

__Interactive Shell__
```
$ node
> console.log('Hello World');
Hello World
```
__Executing JavaScript file__
```
$ echo "console.log('Hello World');" > hello.js
$ node hello.js
Hello World
```

## Basic HTTP Server
__Plain Node__
```
$ node basic_web_server.js
Server running on port 8080.
```
__with Express__
```
$ npm install express
$ node static_file_server.js 
Server running on port 8080.
```
# HelloWorld Application
```
$ cd helloworld-example
$ npm install 
$ npm run build
$ npm run start
Server running on port 3000.
```
