console.log("Routing to login.js...");
var express = require('express');
var router = express.Router();

 // GET login
router.get('/login', function(req, res, next) {
    console.log("Login... ");
  res.render('login', { title: 'CommonSync'});
});

console.log("done.");
module.exports = router;
 