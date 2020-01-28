'use strict'
var http = require('http');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
 
var deeplink = require('node-deeplink');

var app = express();
 
//Set PORT to Dynamic Environments to run on any Server
var port = process.env.PORT || 3004;
 
//Configure Express to Recieve JSON and extended URLencoded formats
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended:true })); // support encoded bodies
 
app.use(cors({
    exposedHeaders :"*"
}));
 
app.use(bodyParser.json({
    limit:"50mb"
}))
//Set RESTful routes

app.get('/deeplink', deeplink({
    fallback:'https://hexaware.com',
    android_package_name:'com.hexaware.deeplinking',
    ios_store_link:
    'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4'
    })
);
 
app.get('/', (req, res) => {
    res.status(200).json({
    status :true
    })
})
 
app.listen(port);
console.log("Server started successfully at PORT : " + port);

