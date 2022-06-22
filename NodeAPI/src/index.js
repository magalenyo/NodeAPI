const express = require('express');
const app = express();
const morgan = require('morgan');

// Config
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
})