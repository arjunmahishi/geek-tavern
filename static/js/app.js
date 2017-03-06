// Initialize Firebase
var config = {
	apiKey: "AIzaSyBLE3ZIJb0Z7Sb-PYYxQp7bXA58QQnD00M",
	authDomain: "geektavern-64dff.firebaseapp.com",
	databaseURL: "https://geektavern-64dff.firebaseio.com",
	storageBucket: "geektavern-64dff.appspot.com",
	messagingSenderId: "853293281256"
};

firebase.initializeApp(config);

var globalChatId = "123";

function updateId(newId){
	globalChatId = newId;
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("Logged in!");
  } else {
    console.log("didn't work");
  }
});
