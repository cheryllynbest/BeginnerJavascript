var e = document.getElementById("enterButton");
		e.addEventListener("click", calculate);

function calculate() {
	var x = Number(document.getElementById("firstNumber").value);
	var p = document.getElementById("operator").value;
	var y = Number(document.getElementById("secondNumber").value);
	var theResult = 0;			

	if (p === "+") {
		theResult = (x + y);
	} else if (p === "-") {
		theResult = (x - y);
	} else if (p === "*") {
		theResult = (x * y);
	} else if (p === "/") {
		theResult = (x / y);
	}

	var answer = document.getElementById("theResult");
	answer.textContent = theResult;
}