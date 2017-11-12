var express = require('express');
var router = express.Router();

// var greetings = require("./app.js");

// console.log(greetings.getIP())

// var socket = io.connect('http://'+process.env.IP+'8080/');
// socket.on('chat message', function(msg) {
    
//     alert(msg)
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CommonSync' ,
                        title2: 'Hi'});

});


module.exports = router;