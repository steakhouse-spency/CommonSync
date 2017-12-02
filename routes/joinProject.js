console.log("Routing to joinProject.js...");
var express = require('express');
var router = express.Router();

 // GET login
router.get('/joinProject', function(req, res, next) {
    console.log("Join a project... ");
  res.render('joinProject', { title: 'CommonSync'});

});

console.log("done.");
module.exports = router;
 