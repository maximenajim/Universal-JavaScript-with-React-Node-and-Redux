var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function () {
    console.log('Server running on port 8080.');
});