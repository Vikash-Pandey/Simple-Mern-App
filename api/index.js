var express = require("express")
var app = express();
const userSchema=require("./module/Data")
const User=require('./routes/user')
var bodyParser = require('body-parser')
const path = require('path')

app.use('/public', express.static( './public'));
app.use(express.json())
app.use("/user",User)
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParse.json())
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/users', {

}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});


port = 3000;
app.listen(port, () => {
    console.log(`server start on port ${port}`)
})