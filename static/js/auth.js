const emailText = document.getElementById("emailText");
const passwordText = document.getElementById("passwordText");
const loginButton = document.getElementById('loginButton');
const signUpButton = document.getElementById("signUpButton");
const logoutButton = document.getElementById("logoutButton");

loginButton.addEventListener('click', e =>{
	const email = emailText.value;
	const pass = passwordText.value;
	const auth = firebase.auth();

	const authObj = auth.signInWithEmailAndPassword(email, pass);
	authObj.catch(e => console.log(e.message));
});

signUpButton.addEventListener('click', e =>{
	const email = emailText.value;
	const pass = passwordText.value;
	const auth = firebase.auth();

	const authObj = auth.createUserWithEmailAndPassword(email, pass);
	authObj.catch(e => console.log(e.message));
});

logoutButton.addEventListener('click', e =>{
	firebase.auth().signOut();
});