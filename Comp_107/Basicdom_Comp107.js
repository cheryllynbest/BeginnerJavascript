const p = console.log;

//console.log("Hello World")
//console.log("document", document)
//console.log("document.body", document.body)

//p("You are printing the idH1", idH1);

let btn = document.getElementById("idButton");
let v1 = "Hello World";
let v2 = "Hello Universe";

function onButtonPush() {
	//console.log("You pushed the button.")
	//alert("You pushed the button.")
}
btn.addEventListener("click", onButtonPush);


function switchWords() {
	if (idH1.textContent===v1) {
		idH1.textContent=v2;
	} else {
		idH1.textContent=v1;
	}
}

btn.addEventListener("click", switchWords);

let h1 = document.getElementById("idH1");
h1.addEventListener("click", switchWords);

let v3 = "Hello Alberta";
let v4 = "Hello Saskatchewan";

function switchWords2() {
	if (idH2.textContent===v3) {
		idH2.textContent=v4;
	} else {
		idH2.textContent=v3;
	}
}

let h2 = document.getElementById("idH2");
h2.addEventListener("mouseover", switchWords2);

let v5 = "Hello Calgary";
let v6 = "Hello Saskatoon";

function switchWords3() {
	if (idH3.textContent===v5) {
		idH3.textContent=v6;
	} else {
		idH3.textContent=v5;
	}
}

let h3 = document.getElementById("idH3");
h3.addEventListener("mouseout", switchWords3);


function goBoldOn() {
	idH4.style.color = 'red';
}

let h4 = document.getElementById("idH4");
h4.addEventListener("mousemove", goBoldOn);

function goBoldOff() {
	idH4.style.color = 'black';
}

let h5 = document.getElementById("idH4");
h5.addEventListener("mouseout", goBoldOff);

var NumCount = 0;
function addToList() {
	var node = document.createElement("LI");
	var newDrink = document.createTextNode("Water");
	node.appendChild(newDrink);
	document.getElementById("myList").appendChild(node);
	NumCount = NumCount + 1;
	//console.log("The NumCount is:", NumCount);

}
let btn2 = document.getElementById("drinkButton");
btn2.addEventListener("click", addToList);


var NumCount2 = 0;
function addHElement (){
	//console.log("woohoo! --> inside the function");
	
	var newElement = document.createElement("h3");
	var text = document.createTextNode("This is working. " + NumCount2);
	newElement.appendChild(text);
	document.body.appendChild(newElement);
	NumCount2 = NumCount2 + 1;
}
let btn3 = document.getElementById("addElement")
btn3.addEventListener("click", addHElement);



function onBodyClick(e) {
	//console.log("woohoo! --> inside the function");
	//console.log(e);

}
var newElement2 = document.createElement("h3");
var text2 = document.createTextNode("This is working");
newElement2.appendChild(text2);
document.body.appendChild(newElement2);	
document.body.addEventListener("click", onBodyClick);



function addCanada() {
	// console.log("idH4");
	var z = document.getElementsByTagName("h2")[0];
	console.log(z);
	z.setAttribute("place", "Canada");
	z.getAttribute("place");
	console.log(z.getAttribute("place"));
}

document.body.addEventListener("click", addCanada);
