# React and Redux on the Server
In this section we run react and redux on the server to make our application universal. We’ll be building on what we’ve learned in the previous sections, looking at rendering react components on the server, handling the request on the server, generating the initial redux state, hydrating on the client and having the browser take over for client routing and page transitions.  Each video builds on the other until we’ve built a fully universal javascript application.  

# ReactDomServer

__Example:__
```js
ReactDomServer.renderToString(element); // Renders a React element to its initial HTML. 
```

__Output:__
```html
<div data-reactid="1" data-react-checksum="-1396827294">
  <h1 data-reactid="2">Hello World!</h1>
</div>
```

# Server Middleware
In the previous sections we used express server to return the bootstrap template page to the browser to serve up client JavaScript bundle.  With universal JavaScript the server will have to do a lot more than just serve up the bootstrap template page. In this code snippet we are setting up express server like we’ve done in previous sections.  However, instead of returning the template we are passing all the requests to a server middleware function on _line 16_ to handle the request.

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/05_middleware.png" />

Here is a simplified view of the middleware function.  Notice that the only input for server side code is the request made when loading the app in the browser.  The request contains information about the URL requested, including any query parameters. 

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/05_middleware2.png" />

# Handle Route
Once matched we will now handle the route by using Redux on the server to provide the initial state of our server rendering. When rendering on the server we must fetch and send the initial state of our app along in our response, so the client can use it as the initial state. This is important because, we want the markup generated on the client to match the server markup.

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/05_handleRoute.png" />

In our handle route method we have two inputs: the response object and the renderProps. The renderProps, has among other things, the matching component to the route as well as parameters to the route. We call the redux API to create a new Redux store instance.  We create a fresh new Redux store instance on every request so that no two request share any data inadvertently.  We invoke the action to populate the store. In this example we are using a function called “readyOnActions”.  So we filter and invoke the matching components “readyOnActions” static function.  We pass the store dispatch function and any route parameters. This is all done in a promise which when all the fetching is completed and the store has been updated the rendering of the page can now happen and sent as part of the response to the browser.  We placed the rendering of the component within a page in a function called renderComponentWithRoot passing the updated store.  

# Universal Application
A simple universal app that uses react, react-router, redux, universal data fetching/rehydration on the client isomorphic-fetch, Webpack and Babel.

## Install & run

```
npm i && npm start
```
Then go to http://localhost:3000/.

## Build

```
npm run build
```

This will create a dist/ folder with a app.min.js.

```
npm run start-prod
```
This will build and then run your app with environment set to production, so that app.min.js and config/production.js are used.
