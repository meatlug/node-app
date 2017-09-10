'use strict';

/**
 * Module Dependencies
 */

const ejs = require('ejs');
const path = require('path');
const logger = require('morgan');
const express = require('express');
const ejsMate = require('ejs-mate');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');

/**
 * Expose
 */

module.exports = function (app) {
  app.use(logger('dev'));
  app.use(compression({
    threshold: 512
  }));
  app.engine('ejs',ejsMate);
  app.set('view engine', 'ejs');
  app.set('views', path.join(process.cwd(), 'src/views'));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(process.cwd(), 'public')));
  console.log(path.join(process.cwd(), 'public'));
};
