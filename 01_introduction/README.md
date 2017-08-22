# Concepts of Universal JavaScript
In this section we define Universal JavaScript, understand why it is important, look at different categories of it and use abstractions to achieve it.  

# Nomenclature
* __Universal JavaScript__ is JavaScript code that is environment-agnostic and runs “universally” with no modifications to the code or the environment.
* __Isomorphic JavaScript__ is JavaScript code that is “shimmed” for each environment and only runs in different environments if the environment itself is modified or an abstraction is created to hide the differences.

## Environment-agnostic code
<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/01_printlocations.png"/>

## Environment-specific code
<img src="https://github.com/maximenajim/Universal-JavaScript-with-React-Node-and-Redux/blob/master/images/01_printlocations_env_specific.png"/>

# Sample Universal JavaScript Code
```javascript
const printLocations = function (response) {
    const randomUsers = JSON.parse(response).results;
    const locations = randomUsers.map(({location}) => `${location.street}, ${location.city}, ${location.state}`);
    console.log(locations.join("\n"));
};

if (typeof window !== 'undefined') {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://randomuser.me/api/?results=10&inc=name,location&nat=us');
    request.onload = () => printLocations(request.response);
    request.send()
} else {
    const request = require('request');
    request('http://api.randomuser.me/?nat=US&results=10',
        function (error, response, body) {
            printLocations(body);
        }
    );
}
```
*Run Code*
```
$ node -v
v6.11.0
$ node isomorphic-printlocation.js
```

## Other Sample Code
* set-cookie (https://github.com/spikebrehm/set-cookie)
