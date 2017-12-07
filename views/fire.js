//var firebase = require("firebase");
//var firebase = require('firebase');



// db stuff
//var mainText = document.getElementById("mainText");
//var submitBtn = document.getElementById("submitBtn");

//testing HERE
	  var password = document.getElementById("pw").value;
      var confirmPW = document.getElementById("pw2").value;
      var name = document.getElementsByName("name")[0].value;
      var username = document.getElementsByName("username")[0].value;
      var email = document.getElementsByName("email")[0].value;


 var config = {
    apiKey: "AIzaSyAMHYGpu-H8_QgL2_XJJlZldZyOXHRu3Do",
    authDomain: "common-sync.firebaseapp.com",
    databaseURL: "https://common-sync.firebaseio.com",
    projectId: "common-sync",
    storageBucket: "common-sync.appspot.com",
    messagingSenderId: "225743183786"
    };
    
    
    firebase.initializeApp(config);
    
    
    function submitClick()
    {
      var password = document.getElementById("pw").value;
      var confirmPW = document.getElementById("pw2").value;
      var name = document.getElementsByName("name")[0].value;
      var username = document.getElementsByName("username")[0].value;
      var email = document.getElementsByName("email")[0].value;
      var database = firebase.database();
      var ref = database.ref('Text');
      var data = {
      password: password.value,
      name: name.value,
      username: username.value,
      email: email.value
        
      }
      ref.push(data);
      
    }


//**************



// We will want to add elements from the DOM

//var firebase



// function submitClick()
// {
//     window.alert("this should work");
//     // set reference to root object.
//     var firebaseRef = firebase.database().ref();
//     var messageText = mainText.value;
   
//   firebaseRef.child("Text").set(messageText);
//   //firebaseRef.push().set("SomeValue"); adding a unique value
    
    

   
    
// }

///Testing purposes****
// var database = firebase.database();
// var ref = database.ref('users');

// var data = {
//     name: "SomeName",// this will be auto generated from the DOM
//     email: "SomeUsersEmail"
// }
// ref.push(data);
// can manipulate data from the we as well.
// function submitClick()
// {

// 	var database = firebase.database();
// 	var ref = database.ref('Text');
// 	var data = {
// 		password: password.value,
// 		name: name.value,
// 		username: username.value,
// 		email: email.value
	
// 	}
// 	ref.push(data);
// }