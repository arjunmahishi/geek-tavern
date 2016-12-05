// Initialize Firebase
var config = {
	apiKey: "AIzaSyBLE3ZIJb0Z7Sb-PYYxQp7bXA58QQnD00M",
	authDomain: "geektavern-64dff.firebaseapp.com",
	databaseURL: "https://geektavern-64dff.firebaseio.com",
	storageBucket: "geektavern-64dff.appspot.com",
	messagingSenderId: "853293281256"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged( firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser  +  "Logged IN!");
	}
	else{
		console.log("NOT LOGGED IN");
	}
});

var promise = firebase.auth().signInAnonymously();
console.log(promise);

var globalChatId = "123";

function updateId(newId){
	globalChatId = newId;
}