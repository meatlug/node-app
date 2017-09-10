'use strict';

/**
 * Module dependencies
 */
const users = require('../src/controllers/user.controller');


/**
 * Expose Routes
 */

 module.exports = function (app){

    // Home Route
    app.get('/',users.default);
    // user routes
    app.get('/login',users.login);
 };