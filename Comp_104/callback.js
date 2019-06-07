
const data = {
    staff: [
        {fname:"Jane", lname:"Smith", balance:10},
        {fname:"Liam", lname:"Henry", balance:1000},
        {fname:"Emma", lname:"Jones", balance:1330},
        {fname:"Olivia", lname:"Notly", balance:310},
        {fname:"Noah", lname:"Ho", balance:503},
        {fname:"William", lname:"Lee", balance:520},
        {fname:"Benjamin", lname:"Amis", balance:150},
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

function myCallBackFunction(ar1, func1) {
	console.log("In the call back function")
	console.log("   --->", ar1);
	console.log("   --->", func1);

	for (i=0; i<ar1.length; i++) {
		// console.log('--->', ar1[i]);
		func1(ar1[i]);
	}

};

function myWorkerFunction(ar2) {
	console.log("In the my worker function")
	console.log(ar2);
};

function add5(qqq) {
	console.log('add5', qqq + 5)
};

// myWorkerFunction('Cheryl');

// myCallBackFunction(data.staff, myWorkerFunction);

// myCallBackFunction(['abc', 'bcd', 'cde'], myWorkerFunction);

const mmm = [11, 22, 33, 44];
// myCallBackFunction(mmm, myWorkerFunction);

myCallBackFunction(mmm, add5);
