const users = require('../routes/users');
const auth = require('../routes/auth');
const express = require('express');

module.exports  = function (app) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); 
    app.use(express.static("public"));
    app.use("/api/auth", auth);
    app.use("/api/users", users);
}