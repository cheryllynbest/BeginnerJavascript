const array = [];
const add = document.getElementById("addButton");
const show = document.getElementById("showButton");
const total = document.getElementById("totalButton");
const clear = document.getElementById("clearButton");

function checkNumber () {
	const getNumber = document.getElementById("textBox").value;
		if (isNaN(getNumber) === false) {
			console.log("You are here. therefore this is a number")
			addNumber(getNumber);
		} else {
			console.log("This is not a number, please try again")
			alert("This is not a number, please try again by entering a number.");
			return;
		} 
}

function clearNumber () {
	const message = document.getElementById("messageArea");	
	const textBox = document.getElementById("textBox");	
	message.textContent = '';
	textBox.value = '';
}

function addNumber (num) {
	clearNumber();
	const getNumber = parseInt(num);
	array.push(getNumber);
}

function showNumber () {
	const showArray = document.getElementById("messageArea");
	showArray.textContent = array;
}

function totalNumber () {
	const currentArray = array;
	const sumNumber = array.reduce(function(total, amount){
		return total + amount
	});
	console.log("The sum of the array is:", sumNumber);
	document.getElementById("messageArea").textContent = sumNumber;
}

add.addEventListener("click", checkNumber);
show.addEventListener("click", showNumber);
total.addEventListener("click", totalNumber);
clear.addEventListener("click", clearNumber);