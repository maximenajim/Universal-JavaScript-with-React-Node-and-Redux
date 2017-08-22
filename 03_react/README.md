# React.js and JSX
In this section we look at the concepts behind React and JSX, discuss React’s virtual DOM, how data flows in react through props and finally we look at the react router.  We explore enough of React to help us build a universal javascript application in later sections.  Packt publications has other great video series to learn React in more depth - in this video series we touch only on the basics.

# Basics
Here is the basic hello world JSX example - a simple h1 tag with Hello World text. 

```jsx
class App extends Component {
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}
```

JSX looks very familiar to HTML.  JSX may look like a templating language, but it comes with the full power of JavaScript.  We can embed any JavaScript expression in JSX by wrapping it in curly braces.  We could easily add dynamic values, loops, and conditions. 

```jsx
class App extends Component {
  render() {
    let greeting = null;
    const myDate = new Date();
    if (myDate.getHours() < 12){
        greeting = "Good Morning!";
    } else if (myDate.getHours() > 12 && myDate.getHours() <=17){
        greeting = "Good Afternoon!";
    } else if (myDate.getHours() > 17 && myDate.getHours() <=24){
        greeting = "Good Evening!";
    }
    return (
        <h1>{greeting}</h1>
    )
  }
}
```
__Run__: Open greeting.html in a browser.

# React Router
As mentioned in section 1, the web has evolved into the Single Page App Web Era, were web sites really evolved to web apps.  Full, desktop-like apps running on a single page that dynamically update as the user interacts with them.  Navigating in a single-page app doesn't involve reloading the page and going to an entirely new page. Instead, new content loads inline within the same page. That being said, a single-page apps should still behave in a way that is consistent with a traditional multi-page app.  When users navigate the app, the URL displayed in the address bar should always reflect what the user is viewing.  Users should also be able to use the browser's back and forward buttons and navigate to a particular link directly using the appropriate URL.  This is why having a proper router in a single page application is crucial. This is where react-router comes into play.

## Running HelloWorld with react-router App
```
$ cd hello-world-react-with-react-router
$ npm install 
$ npm run build
$ npm run start
server running at http://localhost:3000
```
