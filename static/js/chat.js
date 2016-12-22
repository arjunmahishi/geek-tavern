console.log(document.getElementById('role').value);

const chatId = document.getElementById('chatId').value;
var dbRef = firebase.database().ref('chats/' + chatId + '/messages');
var list = document.getElementById("list1");
const textBox = document.getElementById('chat_text_box');
const chatSubmitButton = document.getElementById('chatSubmitButton');
const container = document.getElementById('cont');
const toast = document.getElementById('toast');

var role =  document.getElementById('role').value;
var no_of_users = 0;


// Joining the chat //
firebase.database().ref('chats/' + chatId + '/users/' + 
					document.getElementById('role').value).set(true);


// Deleting catagory //
if(document.getElementById('role').value == "Answerer"){
	firebase.database().ref('catagories/' + chatId).set(null);
}


// Checking number of users for the loading screen //
const chatUsers = firebase.database().ref('chats/' + chatId + '/users');
var chatUserCount = 0;
chatUsers.on('child_added', snap => {
	chatUserCount += 1;
	if(chatUserCount > 1){
		textBox.disabled = false;
		document.getElementById('chatLoading').classList.add('hide');
		toast.MaterialSnackbar.showSnackbar({ message :"The other user has joined!"});
	}
});


// Real-Time database  Handlers //
dbRef.on('child_added', snap=> {
	const listItem = document.createElement('li');
	const outerSpan = document.createElement('span');
	const icon = document.createElement('i');
	const titleSpan	= document.createElement('span');
	const bodySpan = document.createElement('span');
	var from ;

	if (role == snap.val().from){
		from = "You";
	}
	else{
		from = snap.val().from;
	}

	listItem.className = "mdl-list__item mdl-list__item--three-line";
	outerSpan.className = "mdl-list__item-primary-content";
	icon.className = "material-icons mdl-list__item-avatar";
	bodySpan.className = "mdl-list__item-text-body";

	icon.innerText = "person";
	titleSpan.innerText = from;
	bodySpan.innerText = snap.val().message;

	outerSpan.appendChild(icon);
	outerSpan.appendChild(titleSpan);
	outerSpan.appendChild(bodySpan);
	listItem.appendChild(outerSpan);
	list.appendChild(listItem);
	container.scrollTop = container.scrollHeight;
});


// Input handelers //
function sendMessage(chatId, message) {
	const nickname = document.getElementById('role').value;
	const chatRef = firebase.database().ref("chats/" + chatId + "/messages/"
		+ nickname + Date.now());
	chatRef.set({
		'from' : nickname,
		'message' : message
	});
	console.log("Sent!");
}

chatSubmitButton.addEventListener('click', e=> {
	if (textBox.value != ""){
		sendMessage(chatId, textBox.value);
		textBox.value = "";
	}
});

textBox.addEventListener('keypress', e => {
	if(e.keyCode == 13){ // When Enter is pressed
		chatSubmitButton.click();
	}
});

