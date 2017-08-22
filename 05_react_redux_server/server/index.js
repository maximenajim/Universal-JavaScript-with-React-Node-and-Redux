/* eslint-disable no-console */
require('babel-core/register');

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const dev = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const favicon = require('serve-favicon');

const port = process.env.PORT || 3000;
const server = express();
global.ENVIRONMENT = process.env.NODE_ENV || 'default';

// Otherwise errors thrown in Promise routines will be silently swallowed.
// (e.g. any error during rendering the app server-side!)
process.on('unhandledRejection', (reason, p) => {
  if (reason.stack) console.error(reason.stack);
  else console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});
server.use(favicon(path.join(__dirname,'..','public','favicon.ico')));
server.use(express.static(path.join(__dirname, '..', 'dist')));
server.use(express.static(path.join(__dirname, '..', 'public')));

if (!process.env.NODE_ENV) {
  const compiler = webpack(config);

  server.use(dev(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));
  server.use(hot(compiler));
}

server.get('*', require('../client').serverMiddleware);

server.listen(port, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.info(`⚡⚡⚡ Server running on http://localhost:${port}/`);
});
