const express = require('express');
const ejs = require('ejs')
const cors = require('cors')
const path = require("path");
const db = require('./config/mongoose');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.json())
app.use(cors('*'))

app.use('/', require('./routes'));

app.listen(8000, function(err){
    if(err){
        console.log(err);
    }

    console.log('Server is listening on port 8000');
});