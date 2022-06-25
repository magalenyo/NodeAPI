const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

// Config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

require('./startup/routes')(app);

// Connect to mongoDB
const dbURI = 'mongodb+srv://admin:admin@nodetest.8pnau.mongodb.net/node-test?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(app.get('port'), () => {
            console.log(`Server listening on port ${app.get('port')}`);
        });
    })
    .catch((err) => console.log(err));

// Middleware
app.use(morgan('dev'));
