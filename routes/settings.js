console.log("Routing to settings.js...");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/settings', function(req, res, next) {
    console.log("Settings...");
  res.render('settings', { title: 'Common Sync'});
    
});

console.log("done.");
module.exports = router;
