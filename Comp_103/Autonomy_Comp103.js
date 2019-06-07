
//console.log("Version 1 of Hello World")

function myFunction (xx, yy) {
	//console.log("Hello from myFunction version2", xx, yy);
	const valuetoreturn = xx + " & " + yy;
	return valuetoreturn;
}

const value1 = myFunction("Rocks", "Rings");
const value2 = myFunction("Coding", "Fun");

// console.log("v1:", value1);
// console.log("v2:", value2);

const func = myFunction;

//console.log(func("Hello", "World"));

/*
	----------- Adding Numbers -----------
*/

function myAdd (x, y, z) {
	const added = (x+y+z);
	return added;
}

const theAnswer = myAdd(200,100,50);
//console.log("The answer is: ", theAnswer);

/*
	----------- Create Email Address -----------
*/

function myEmail (firstName, lastName) {
	const emailAddress = firstName+"."+lastName+"@gmail.com";
	return emailAddress;
}

const myEmailAddress = myEmail("Cheryl", "Best");
// console.log("My email address is 1:", myEmailAddress);
// console.log("My email address is 2:", myEmail("Cheryl", "Best"));

/*
	----------- Array Sum #3a -----------
*/

// let sum = 0;
// const numbers = [5, 10, 15, 20];

// numbers.forEach(function(entry) {
// 	sum += entry;
// });

// console.log("The sum outside is:", sum);

// ----------- Array Sum #3b -----------

// let sum2 = 0;
// const numbers2 = [5, 10, 15, 20];

// function sumNumber(myArray){
// 	myArray.forEach(function(entry) {
// 	sum2 += entry;
// })
// 	return sum2;
// };

// let a = sumNumber(numbers2);
// console.log("The sum outside is 2:", a);


// ----------- Array Sum #3c -----------

// let sum3 = 0;
// const numbers3 = [5, 10, 15, 20];

// function sumNumber2(myArray, i){
// 	sum3 = sum3 + myArray;
// }

// numbers3.forEach(sumNumber2);
// console.log("The sum is:", sum3);

// ----------- String Search #4 -----------

const string_array = [
    'this is a string',
    'that is also a string',
    'what about this',
    'what about that',
];

const search1 = "this";
const search2 = "is";

function look_for_string(string_array, search1) {
	let count = 0;
	for (let i=0; i < string_array.length; i++) {
	 	if (string_array[i].search(search1) >= 0){
	 		count = count + 1;
	 	}
	 }
	 return (count); 
}

const ans1 = look_for_string(string_array, search1);
const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");
