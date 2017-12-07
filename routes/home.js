console.log("Routing to home.js...");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
    console.log("Home...");
  res.render('home', { title: 'CommonSync'});

});

console.log("done.");
module.exports = router;  