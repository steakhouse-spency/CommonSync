var express = require('express');
var router = express.Router();

<<<<<<< HEAD
 // GET login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'CommonSync'});
// res.render('test')
=======
router.get('/', function(req, res, next) {
  res.render('login', { title: 'CommonSync' ,
                        title2: 'Hi'});

>>>>>>> parker
});

module.exports = router;
