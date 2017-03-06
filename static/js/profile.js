firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
		document.getElementById('avatar').src = firebase.auth().currentUser.photoURL;
		document.getElementById('userName').innerHTML = firebase.auth().currentUser.displayName;
  } else {
    console.log("didn't work");
  }
});
