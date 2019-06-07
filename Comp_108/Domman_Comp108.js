// console.log("Hello World From JS");
// console.log("background formatting: ", "#43C6AC, #F8FFAE");

function makeDiv(message) {
	const div = document.createElement("div");
	div.textContent = message;
	div.className = "clPanel2";
	return div;
}

let count = 1;
function onBodyClicked(event) {
	console.log("Test here");
	event.target.appendChild(makeDiv("I frickin did it - " + count++));
}

document.body.addEventListener("click", onBodyClicked);