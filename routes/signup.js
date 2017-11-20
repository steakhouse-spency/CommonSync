var express = require('express');
var router = express.Router();

<<<<<<< HEAD
// GET home page. 
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'CommonSync'});
});

=======
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'CommonSync' ,
                        title2: 'Hi'});

});
>>>>>>> parker

module.exports = router;
