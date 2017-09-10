'use strict';

/**
 * Module Dependencies
 */
const path = require('path');
const chalk = require('chalk');
const debug = require('debug');
const express = require('express');
const mongoose = require('mongoose');

// app setup
const app = express();
const port = process.env.port || '3000';
const mongodbUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/node-app';

// bootstrap routes
require('./config/express')(app);
require('./config/router')(app);

// create server
function listen () {
  app.listen(port);
  debug('Listening on ' + port);
  console.log('express started on port ' + port);
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(mongodbUri, options).connection;
}

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
connect()
    .on('error',console.log)
    .on('disconnected', connect)
    .once('open', listen);

/**
 * Expose
 */
module.exports = app;

