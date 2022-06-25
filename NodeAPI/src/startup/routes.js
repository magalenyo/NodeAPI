const express = require('express');

var defaultRouter = require('../routes/default');
var blogRouter = require('../routes/blog');

module.exports = function(app) {
    app.use(express.urlencoded({extended:false}));
    app.use(express.json());

    app.use('/', defaultRouter);
    app.use('/blogs', blogRouter);
}