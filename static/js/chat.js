console.log("{{testString}}");

const chatId = Date.now();
var dbRef = firebase.database().ref('chats/' + chatId);
var list = document.getElementById("list1");
const textBox = document.getElementById('chat_text_box');
const chatSubmitButton = document.getElementById('chatSubmitButton');
const container = document.getElementById('cont');
var me = "warlock"; // TODO : Make 'me' dynamic

const meta = document.getElementById('chatId');
console.log( "chatId : " + meta.value);

// Real-Time database  Handlers //
dbRef.on('child_added', snap=> {
	const listItem = document.createElement('li');
	const outerSpan = document.createElement('span');
	const icon = document.createElement('i');
	const titleSpan	= document.createElement('span');
	const bodySpan = document.createElement('span');

	listItem.className = "mdl-list__item mdl-list__item--three-line";
	outerSpan.className = "mdl-list__item-primary-content";
	icon.className = "material-icons mdl-list__item-avatar";
	bodySpan.className = "mdl-list__item-text-body";

	icon.innerText = "person";
	titleSpan.innerText = snap.val().from;
	bodySpan.innerText = snap.val().message;

	outerSpan.appendChild(icon);
	outerSpan.appendChild(titleSpan);
	outerSpan.appendChild(bodySpan);
	listItem.appendChild(outerSpan);
	list.appendChild(listItem);
	container.scrollTop = container.scrollHeight;
});

// Input handelers //

function sendMessage(chatId, nickname, message) {
	const chatRef = firebase.database().ref("chats/" + chatId + "/"
		+ nickname + Date.now());
	chatRef.set({
		'from' : nickname,
		'message' : message
	}); 
	console.log("Sent!");	
}

chatSubmitButton.addEventListener('click', e=> {
	if (textBox.value != ""){
		sendMessage(chatId, me, textBox.value);
		textBox.value = "";
	}
});

textBox.addEventListener('keypress', e => {
	if(e.keyCode == 13){ // When Enter is pressed
		chatSubmitButton.click();
	}
});