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