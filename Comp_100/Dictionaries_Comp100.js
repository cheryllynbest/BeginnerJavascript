
const dictionary = {
	BritishColumbia: "BC", 
	Alberta: "AB", 
	Saskatchewan: "SK", 
	Manitoba: "MB", 
	Ontario: "ON", 
	Quebec: "QC", 
	Yukon: "YT", 
	NorthwestTerritories: "NT", 
	Nunavut: "NU", 
	NewBrunswick: "NB", 
	NovaScotia: "NS", 
	PrinceEdwardIsland: "PE", 
	Newfoundland: "NL", 
}

const lookUp = document.getElementById("lookupButton");
lookUp.addEventListener("click", getProvince);

function getProvince () {
	const getLongWord = document.getElementById("textBox2").value;
	console.log("The long version of your province is:", getLongWord);
	const abb = dictionary[getLongWord];
	console.log("The abbreviation is: ", abb);
	document.getElementById("messageArea5").textContent = abb;
}





