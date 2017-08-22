const printLocations = function (response) {
    const randomUsers = JSON.parse(response).results;
    const locations = randomUsers.map(({location}) => `${location.street}, ${location.city}, ${location.state} ${location.postcode}`);
    console.log(locations.join("\n"));
};