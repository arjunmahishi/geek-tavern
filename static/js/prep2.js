const divRef = document.getElementById('catagoryList');
const avaliableCatgoriesRef = firebase.database().ref('/catagories');
const loadingCata = document.getElementById('loadingCata');

// TODO : Get the chatId from chip-button and send to chat.js

avaliableCatgoriesRef.on('child_added', snapshot => {

	loadingCata.classList.add('hide');

	var col = document.createElement('div');
	var link = document.createElement('a');
	var chip = document.createElement('button');
	var chipIcon = document.createElement('span');
	var chipText = document.createElement('span');

	col.className = "col-md-4";
	col.style.marginTop = "3px";
	col.id = snapshot.key;
	// link.href = "/chat/";
	chip.className = "mdl-chip mdl-chip--contact";
	chip.type = "submit";
	chip.name = "chosenTopic";
	chip.value = snapshot.key;
	chip.onClick = "testFun()";
	chipIcon.className = "mdl-chip__contact mdl-color--teal mdl-color-text--white";
	chipText.className = "mdl-chip__text";

	chipIcon.innerText = "?";
	chipText.innerText = snapshot.val();

	chip.appendChild(chipIcon);
	chip.appendChild(chipText);
	link.appendChild(chip);
	col.appendChild(link);
	divRef.appendChild(col);
	
});


// avaliableCatgoriesRef.on('child_changed', snapshot => {
// });

avaliableCatgoriesRef.on('child_removed', snapshot => {
	var coverDiv = document.getElementById(snapshot.key);
	coverDiv.classList.add("hide");
});

function testFun(){
	console.log("hI!");
}


// firebase.database().ref('catagories/' + snapshot.key).remove();
