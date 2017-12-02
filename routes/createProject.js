console.log("Routing to createProject.js...");
var express = require('express');
var router = express.Router();

 // GET login
router.get('/createProject', function(req, res, next) {
    console.log("Create a project... ");
  res.render('createProject', { title: 'CommonSync'});

});

console.log("done.");
module.exports = router;
 