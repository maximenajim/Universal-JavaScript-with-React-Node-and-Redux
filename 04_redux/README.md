# Redux Data Flow
In this section we look at the concepts behind Redux and how it integrates with what we’ve discussed in the previous section with react and react router.  We explore enough of redux in this section to build a universal javascript application in the next section. 

## Unified View of the Current State
Within a site we have many kinds of state.  The state of the search, the filter/sort state, the pagination state, there is also the state of the cart, the items that have been placed in the cart and their subtotal amount.  When combined together these states form a unified view of what the user is currently seeing in the UI.

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/04_spa_state.png"/>

Single page applications behave similar to state machines where the state in the browser transitions from one state to another as the user interacts with the page. In other words, the action taken in the UI causes a transition from the old state to a new state.  

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/04_spa_state_transitions.png"/>


However, as an application grows it becomes harder to determine the overall state of the application and cumbersome to understand where updates are coming from. This is where Redux comes in.  Redux simplifies the way we view the state in our application by requiring us to store all state data in a single object. Everything we need to know about the application is in one place.  But how does Redux achieve that?

## Redux Flow
Redux makes state mutations predictable by imposing certain restrictions on how and when updates can happen. Redux features a uni-directional data flow and enforces a single store where the state of the whole application is stored and is immutable.  The only way to change the state is to dispatch an action which is a plain object describing what happened.  Action dispatch reducers that perform state updates.  Reducers are pure functions which are given the current state and action and return a new state. 

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/04_redux_flow.gif" width="600" height="405"/>

ref: http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/9

The Redux store is completely synchronous by default. Dispatching an action does not return until after the reducer function has run and the new state is available.  In order to achieve asynchronous behavior in redux we have two other constructs: an action creator and middleware.  An action creator encapsulates the process of creating action objects.  Action creators abstract away details of how an action is created and is also where we could put any logic for communicating with backend APIs. Redux allows adding a middleware which listens to all actions, and calls an API when the appropriate action type is received. It provides the ability to do asynchronous work related to the store. By using this specific middleware, an action creator can return a function instead of an action object. 

<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/04_redux_flow_with_side_effects.gif" width="600" height="405"/>

ref: http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/23

# Sample Code

## Counter
This is the most basic example of using Redux together with React. For simplicity, it re-renders the React component manually when the store changes. In real projects, you will likely want to use the highly performant [React Redux](https://github.com/reactjs/react-redux) bindings instead.

Run the [Counter](https://github.com/reactjs/redux/tree/master/examples/counter) example:

```
git clone https://github.com/reactjs/redux.git

cd redux/examples/counter
npm install
npm start

open http://localhost:3000/
```

## Universal Counter

Run the [Universal](https://github.com/reactjs/redux/tree/master/examples/universal) example:

```
git clone https://github.com/reactjs/redux.git

cd redux/examples/universal
npm install
npm start

open http://localhost:3000/
```

This is a basic demonstration of server rendering with Redux and React. It shows how to prepare the initial store state on the server, and pass it down to the client so the client store can boot up from an existing state.
