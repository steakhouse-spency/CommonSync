console.log("Routing to index.js...");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("Index...");
  res.render('index', { title: 'CommonSync'});
    
});

console.log("done.");


module.exports = router;

