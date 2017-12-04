console.log("Routing to signup.js...");
var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/signup', function(req, res, next) {
    console.log("Sign-Up...");
  res.render('signup', { title: 'CommonSync'});
});

console.log("done.");

module.exports = router;
