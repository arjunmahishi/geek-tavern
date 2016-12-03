const button = document.getElementById('submitButton');
const textBox = document.getElementById('catagory');
var checkRef = firebase.database().ref("/catagories");
var catagory;

console.log("currentUser is " + currentUser);

function addCatagory(catagory) {
	var chatId = currentUser + Math.floor((Math.random() * 100000) + 1);
	const catagoryRef = firebase.database().ref("/catagories/" + chatId);
	var test = catagoryRef.set(catagory);
	console.log(test);
}

function catagorySubmitAction(){
	catagory = textBox.value;
	textBox.value = "";
	addCatagory(catagory);
}

textBox.addEventListener("keypress", e => {
	if(e.keyCode == 13){ // When Enter is pressed
		if (textBox.value != ""){
			catagorySubmitAction();
		}
	}
});

button.addEventListener('click', e =>{
	if (textBox.value != ""){
		catagorySubmitAction();
	}
});

// To redirect the page as soon as catagory has been added to the database //
checkRef.on('child_added', snapshot => {
	if(snapshot.val() == catagory){
		window.location = "/chat/";
	}
});