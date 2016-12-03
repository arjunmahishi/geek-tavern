const divRef = document.getElementById('catagoryList');
const avaliableCatgoriesRef = firebase.database().ref('/catagories');


avaliableCatgoriesRef.on('child_added', snapshot => {

	var col = document.createElement('div');
	var chip = document.createElement('span');
	var chipIcon = document.createElement('span');
	var chipText = document.createElement('span');

	col.className = "col-sm-5";
	col.style.marginTop = "3px";
	col.style.marginLeft = "3px";
	chip.className = "mdl-chip mdl-chip--contact";
	chipIcon.className = "mdl-chip__contact mdl-color--teal mdl-color-text--white";
	chipText.className = "mdl-chip__text";

	chipIcon.innerText = "?";
	chipText.innerText = snapshot.val();

	chip.appendChild(chipIcon);
	chip.appendChild(chipText);
	col.appendChild(chip);
	divRef.appendChild(col);
});

/*  TODO : Fix the following two event handlers  */

// avaliableCatgoriesRef.on('child_changed', snapshot => {
// });
// avaliableCatgoriesRef.on('child_removed', snapshot => {
// 	console.log("Item deleted!");
// 	var coverDiv = document.getElementById(snapshot.key);
// 	coverDiv.outerHtml = "";
// 	delete coverDiv;
// });

