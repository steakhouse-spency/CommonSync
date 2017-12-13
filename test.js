var firebase = require("firebase");


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAMHYGpu-H8_QgL2_XJJlZldZyOXHRu3Do",
    authDomain: "common-sync.firebaseapp.com",
    databaseURL: "https://common-sync.firebaseio.com",
    projectId: "common-sync",
    storageBucket: "common-sync.appspot.com",
    messagingSenderId: "225743183786"
  };
  firebase.initializeApp(config);
   database = firebase.database();
   var ref = database.ref('Users');
   
  
  
  
  
  

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

