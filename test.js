
var admin = require("firebase-admin");
var serviceAccount = require("./.config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://common-sync.firebaseio.com"
});
  
  

var assert = require('assert');

//***projects***
// describe('Projects', function() {
//   describe('Searching for a project', function() {
//     it('should not return null', function() {
    
//      var db = admin.database();
//      var ref = db.ref('Projects');
//      assert(ref!=null);
     
//     });
//   });
// });

//************
describe('Test firebasedb relational instances', function() {


  var database = admin.database();
      var ref = database.ref('Test');
      var ref2 = database.ref('Projects');
      var ref3 = database.ref('Users');
      var ref4 = database.ref('Interests');
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
       var ref = database.ref('Test3');
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
     return true;
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
     return true;
    }
    
    }
    function errData(err)
    {
     console.log('Error!');
     console.log(err);
    }
       
       
    
    });
    //******** test3
     it('should return username3 for our test', function() {
      //assert.equal([1,2,3].indexOf(4), -1);
       ref.once('value', gotData, errData);
       function gotData(data)
    {
    var user = "testing3";
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
      console.log(" found test3");
     assert.equal(user, username);
     }
     
     console.log(" finalized test3");
     return true;
    }
    
    }
    function errData(err)
    {
     console.log('Error!');
     console.log(err);
    }
       
       
    
    });
     it(' projects should not return null', function() {
    
   
     assert(ref2!=null);
     
    });
     it(' users should not return null', function() {
    
   
     assert(ref3!=null);
     
    });
     it(' interests should not return null', function() {
    
   
     assert(ref4!=null);
     
    });
     it(' Tests should not be be null here ', function() {
    
   
     assert(ref != null);
     
    });
    
    

  });
  
});
admin.app().delete().then(function() {
  //admin.initializeApp(null);
  
  console.log("Closed firebase connection");
  admin.database().ref().remove("Test");
  admin.database().ref().remove("Test2");
  admin.database().ref().remove("Test3");
});
// All tests are removed from firebase db after we extract our dummy data.