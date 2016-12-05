const button = document.getElementById('submitButton');
const textBox = document.getElementById('catagory');
var checkRef = firebase.database().ref("/catagories");
var catagory;
var chatId = Date.now();


function addCatagory(catagory) {
	const catagoryRef = firebase.database().ref("/catagories/" + chatId);
	var test = catagoryRef.set(catagory);
}

textBox.addEventListener("keypress", e => {
	if(e.keyCode == 13){ // When Enter is pressed
		button.click();
	}
});

button.addEventListener('click', e =>{
	if (textBox.value != ""){
		catagory = textBox.value;
		addCatagory(catagory);
		textBox.value = "";
	}
});

// To redirect the page as soon as catagory has been added to the database //
checkRef.on('child_added', snapshot => {
	console.log(snapshot.val() == catagory);
	if(snapshot.val() == catagory){
		// window.location = "/chat/";
		console.log("IN!");
		document.getElementById('postDataChatId').value = chatId;
		document.getElementById('postForm').submit();
	}
});