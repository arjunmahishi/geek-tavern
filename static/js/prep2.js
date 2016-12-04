const divRef = document.getElementById('catagoryList');
const avaliableCatgoriesRef = firebase.database().ref('/catagories');

// TODO : Get the chatId from chip-button and send to chat.js

avaliableCatgoriesRef.on('child_added', snapshot => {

	var col = document.createElement('div');
	var link = document.createElement('a');
	var chip = document.createElement('button');
	var chipIcon = document.createElement('span');
	var chipText = document.createElement('span');

	col.className = "col-sm-3";
	col.style.marginTop = "3px";
	col.id = snapshot.key;
	// link.href = "/chat/";
	chip.className = "mdl-chip mdl-chip--contact";
	chip.type = "button";
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


// firebase.database().ref('catagories/' + snapshot.key).remove();
