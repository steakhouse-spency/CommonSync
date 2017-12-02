// var firebase = require("firebase");
//var firebase = require('firebase');





// db stuff
var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
// We will want to add elements from the DOM

//var firebase



function submitClick()
{
    window.alert("this should work");
    // set reference to root object.
    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;
   
   firebaseRef.child("Text").set(messageText);
   //firebaseRef.push().set("SomeValue"); adding a unique value
    
    

   
    
}

///Testing purposes****
// var database = firebase.database();
// var ref = database.ref('users');

// var data = {
//     name: "SomeName",// this will be auto generated from the DOM
//     email: "SomeUsersEmail"
// }
// ref.push(data);
// can manipulate data from the we as well.
