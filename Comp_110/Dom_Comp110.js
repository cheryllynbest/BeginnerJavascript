// //declarations - Basic DOM//
// 	const add = document.getElementById("addButton");
// 	const show = document.getElementById("showButton");
// 	const div = document.getElementById("myBasicDom");
// 	const hideOne = document.getElementById("hideOneButton")
// 	const hideAll = document.getElementById("hideAllButton");

// //functions - Basic DOM//
// 	function addToList() {
// 		console.log("Add button working");
// 		let node = document.createElement("li");
// 		let newItem = document.createTextNode("test");
// 		node.appendChild(newItem);
// 		document.getElementById("list").appendChild(node);
// 		return node;
// 	}

// 	function showList() {
// 		console.log("Show button working");
// 		// console.log(list);
// 	}

// 	function divClick() {
// 		console.log("div click working");
// 	}

// 	function hideOneList() {
// 		console.log("HideOne button working");
// 		let lastNode = document.getElementById("list").childElementCount;
// 		console.log("The list has:", lastNode, "elements.")
// 		list.remove(0);
// 	}

// 	function hideAllList() {
// 		console.log("HideAll button working");
// 		let fullList = document.getElementById("list")
// 		fullList.remove();
// 	}


// //Scripts - Basic DOM//
// 	add.addEventListener("click", addToList);
// 	show.addEventListener("click", showList);
// 	hideOne.addEventListener("click", hideOneList);
// 	hideAll.addEventListener("click", hideAllList);

let counter = 1;
const cardsContainer=document.getElementById("addCardsHere");

function addCardButtonClick () {
  			// console.log("inside function add card");
  			const createDiv=document.createElement("div");
			cardsContainer.appendChild(createDiv);
			createDiv.textContent = " Awesome Card " +counter;  			
			createDiv.className = "cardStyle";

  			const addBefore = document.createElement("button")
  			addBefore.setAttribute("type","button")
  			addBefore.textContent="Add Before"
  			createDiv.appendChild(addBefore)
  			addBefore.id="addBeforeBtn";

  			const addAfter = document.createElement("button")
  			addAfter.setAttribute("type","button")
  			addAfter.textContent="Add After"
  			createDiv.appendChild(addAfter)
			addAfter.id="addAfterBtn";

  			const addDelete = document.createElement("button")
  			addDelete.setAttribute("type","button")
  			addDelete.className="deleteBtnClass"
  			addDelete.id="deleteBtn";
  			
  			addDelete.textContent="Delete"
  			createDiv.appendChild(addDelete)

			const breakSpace = document.createElement("br")
  			createDiv.insertBefore(breakSpace,addBefore)

  			counter++
  			return createDiv;
}

addCardButton.addEventListener("click", addCardButtonClick);
// const click = document.getElementById("leftSide");n ---> I guess I dont need this line of code.

function deleteBtn () {
	let parentDiv = event.target.parentElement;
	parentDiv.remove();
}

function addBefore () {
	let newCard = addCardButtonClick();		
	let existingCard = event.target.parentElement;
	let parentDiv = existingCard.parentElement;
	parentDiv.insertBefore(newCard, existingCard);
}

function addAfter () {
	let newCard = addCardButtonClick();		
	let existingCard = event.target.parentElement;
	let parentDiv = existingCard.parentElement;
	parentDiv.insertBefore(newCard, existingCard.nextSibling)
}

function buttonFunctionality(event) {
	let theTarget = event.target;
	console.log(event.target);
	if (theTarget.id === "deleteBtn") {
		deleteBtn ();
	} else if (theTarget.id === "addAfterBtn") {
		addAfter();
	} else if (theTarget.id === "addBeforeBtn") {
		addBefore();
	} else {}
}

cardsContainer.addEventListener("click", buttonFunctionality);

