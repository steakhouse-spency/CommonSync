var express = require('express');
var router = express.Router();

// var greetings = require("./app.js");

// console.log(greetings.getIP())

// var socket = io.connect('http://'+process.env.IP+'8080/');
// socket.on('chat message', function(msg) {
    
//     alert(msg)
// });
<<<<<<< HEAD

// GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CommonSync'});
=======
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CommonSync' ,
                        title2: 'Hi'});

>>>>>>> cd4b034919e44fd12606c21d8e653de743c3c5db
});


module.exports = router;