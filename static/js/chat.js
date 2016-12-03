console.log("{{testString}}");

const chatId = "arjun123"
var dbRef = firebase.database().ref('chats/' + chatId);
var list = document.getElementById("list1");
const textBox = document.getElementById('chat_text_box');
const container = document.getElementById('cont');
var msgId = 0;
const me = "warlock";

// Real-Time database  Handlers //
dbRef.on('child_added', snap=> {
	var data = document.createElement('li');
	data.style.listStyle = "none";
	data.style.marginTop = "3px";
	data.innerText = snap.val().from + " : " + snap.val().message;
	list.appendChild(data);
	container.scrollTop = container.scrollHeight;
});

// Input handelers //

function sendMessage(chatId, nickname, message) {
	const chatRef = firebase.database().ref("chats/" + chatId + "/" + nickname + msgId);
	msgId += 1;
	chatRef.set({
		'from' : nickname,
		'message' : message
	}); 	
}

var text = "";
var name = "";
textBox.addEventListener('keypress', e => {
	if(e.keyCode == 13){ // When Enter is pressed
		text = textBox.value;
		textBox.value = "";
		name = document.getElementById("nName").value;
		sendMessage(chatId, name, text);
	}
});