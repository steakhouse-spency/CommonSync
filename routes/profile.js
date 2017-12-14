console.log("Routing to profile.js...");
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/profile', function(req, res, next) {
    
    // depending on cookie
        // get username
        // get interests
        // get projects
    console.log("profile...");
  res.render('profile', {}); //['C','MPI', 'CUDA', 'Python'], projects: ['Thot Coin', 'Common Sync']});

});

console.log("done.");
module.exports = router;  