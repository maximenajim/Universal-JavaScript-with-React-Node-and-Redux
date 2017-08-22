const express = require('express');
const template = require('./template');

const server = express();
server.use('/', express.static('build/client'));
server.get('*', (req, res) => res
  .send(template));
server.listen(3000, function() {
    console.log('server running at http://localhost:3000');
});