'use strict';

/**
 * Module Dependencies
 */


/**
 * Show login form
 */
exports.signUp = function (req,res) {
    res.render('Users/Login',{
        title:'Login'
    });
};

exports.login = function (req,res){
    res.render('Users/Login.ejs',{
        title:'Sign Up'
    });
};

exports.default = function (req,res){
    res.render('Layout/Index',{
        title:'Sign Up'
    });
};