//const firebase = require("firebase");
//const firebase = require('firebase-admin');


// Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAMHYGpu-H8_QgL2_XJJlZldZyOXHRu3Do",
//     authDomain: "common-sync.firebaseapp.com",
//     databaseURL: "https://common-sync.firebaseio.com",
//     projectId: "common-sync",
//     storageBucket: "common-sync.appspot.com",
//     messagingSenderId: "225743183786"
//   };
//   firebase.initializeApp(config);
//   var database = firebase.database();
//   var ref = database.ref('Users');
//   console.log(ref.value);
 


   
   // console.log(ref.value);
  
  
  var admin = require("firebase-admin");
var serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://common-sync.firebaseio.com"
});
  
  

var assert = require('assert');
describe('Test firebasedb relational instance', function() {


  var database = admin.database();
      var ref = database.ref('Test');
      var data = {
      password: "test",
      name: "test",
      username: "testing",
      email: "test@test.com"
      
        
      }
      ref.push(data);
       var ref = database.ref('Test2');
      var data = {
      password: "test",
      name: "test",
      username: "testing2",
      email: "test@test.com"
      
        
      }
      ref.push(data);
  describe('looking for users', function() {
    it('should return username for our test', function() {
      //assert.equal([1,2,3].indexOf(4), -1);
       ref.once('value', gotData, errData);
       function gotData(data)
    {
    var user = "testing";
    var users = data.val();
    var keys = Object.keys(users);
    console.log(keys);
    for(var i=0; i< keys.length; i++)
    {
      var k = keys[i];
      var username = users[k].username;
      var useremail = users[k].email;
     
    
     if( user == username)
     {
      console.log(" found test1");
      
     
     assert.equal(user, username);
     
     
    
       
     }
     
     console.log(" finalized test1");
    }
    
    }
    function errData(err)
    {
     console.log('Error!');
     console.log(err);
    }
       
       
    
    });
    //*********test2
        it('should return username2 for our test', function() {
      //assert.equal([1,2,3].indexOf(4), -1);
       ref.once('value', gotData, errData);
       function gotData(data)
    {
    var user = "testing2";
    var users = data.val();
    var keys = Object.keys(users);
    console.log(keys);
    for(var i=0; i< keys.length; i++)
    {
      var k = keys[i];
      var username = users[k].username;
      var useremail = users[k].email;
     
    
     if( user == username)
     {
      console.log(" found test2");
      
     
     assert.equal(user, username);
     
     
    
       
     }
     
     console.log(" finalized test2");
    }
    
    }
    function errData(err)
    {
     console.log('Error!');
     console.log(err);
    }
       
       
    
    });

  });
  
});
admin.app().delete().then(function() {
  //admin.initializeApp(null);
  
  console.log("Closed firebase connection");
  admin.database().ref().remove("Test");
});
