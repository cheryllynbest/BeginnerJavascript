
function CalculateTax() {
	const taxableIncome = Number(document.getElementById("Line1").value);
	console.log("taxableIncome is:", taxableIncome);
	const limit1 = 47630;
	const tax1 = 0.15;
	const limit2 = 95259;
	const tax2 = .205;
	const limit3 = 147667;
	const tax3 = .26;
	const limit4 = 210371;
	const tax4 = .29;
	const tax5 = .33;
	const line2 = document.getElementById("Line2");
	const line3 = document.getElementById("Line3");
	const line4 = document.getElementById("Line4");
	const line5 = document.getElementById("Line5");
	const line6 = document.getElementById("Line6");
	const line7 = document.getElementById("Line7");

	function firstTax() {
		const baseAmount = taxableIncome - 0;
		line2.textContent = baseAmount;
		line3.textContent = (baseAmount - taxableIncome);
		line4.textContent = tax1;
		line5.textContent = ((baseAmount - taxableIncome)*tax1).toFixed(2);
		line6.textContent = (tax1 * baseAmount).toFixed(2);
		line7.textContent = (((baseAmount - taxableIncome)*tax1) + (tax1 * baseAmount)).toFixed(2);
		const effectiveTax = (line7.textContent/taxableIncome).toFixed(2);
		console.log("Your effective tax rate is: ", effectiveTax);
	}

	function secondTax() {
		const baseAmount = limit1;
		line2.textContent = limit1;
		const remainingAmount1 = (taxableIncome - limit1);
		line3.textContent = (remainingAmount1);
		line4.textContent = tax2;
		line5.textContent = ((remainingAmount1)*tax1).toFixed(2);
		line6.textContent = (tax1 * baseAmount).toFixed(2);
		line7.textContent = (((baseAmount)*tax1) + (remainingAmount1*tax2)).toFixed(2);
		const effectiveTax = (line7.textContent/taxableIncome).toFixed(2);
		console.log("Your effective tax rate is: ", effectiveTax);
	}

	function thirdTax() {
		const baseAmount = limit2;
		line2.textContent = limit2;
		const remainingAmount = (taxableIncome - limit2);
		const previousTax = ((limit1*tax1)+((limit2-limit1)*tax2))
		line3.textContent = (remainingAmount);
		line4.textContent = tax3;
		line5.textContent = ((remainingAmount)*tax3).toFixed(2);
		line6.textContent = (previousTax).toFixed(2);
		line7.textContent = ((previousTax) + (remainingAmount*tax3)).toFixed(2);
		const effectiveTax = (line7.textContent/taxableIncome).toFixed(2);
		console.log("Your effective tax rate is: ", effectiveTax);
	}

	function fourthTax() {
		const baseAmount = limit3;
		line2.textContent = limit3;
		const remainingAmount = (taxableIncome - limit3);
		const previousTax = ((limit1*tax1)+((limit2-limit1)*tax2)+((limit3-limit2)*tax3))
		line3.textContent = (remainingAmount);
		line4.textContent = tax4;
		line5.textContent = ((remainingAmount)*tax4).toFixed(2);
		line6.textContent = (previousTax).toFixed(2);
		line7.textContent = ((previousTax) + (remainingAmount*tax4)).toFixed(2);
		const effectiveTax = (line7.textContent/taxableIncome).toFixed(2);
		console.log("Your effective tax rate is: ", effectiveTax);
	}

	function fifthTax() {
		const baseAmount = limit4;
		line2.textContent = limit4;
		const remainingAmount = (taxableIncome - limit4);
		const previousTax = ((limit1*tax1)+((limit2-limit1)*tax2)+((limit3-limit2)*tax3)+((limit4-limit3)*tax4));
		line3.textContent = (remainingAmount);
		line4.textContent = tax5;
		line5.textContent = ((remainingAmount)*tax5).toFixed(2);
		line6.textContent = (previousTax).toFixed(2);
		line7.textContent= ((previousTax) + (remainingAmount*tax5)).toFixed(2);
		const effectiveTax = (line7.textContent/taxableIncome).toFixed(2);
		console.log("Your effective tax rate is: ", effectiveTax);
	}

	if (taxableIncome <= limit1) {
		firstTax();
		
		} else if (taxableIncome > limit1 & taxableIncome <= limit2) {
			secondTax();

		} else if (taxableIncome > limit2 & taxableIncome <= limit3) {
			thirdTax();

		} else if(taxableIncome > limit3 & taxableIncome <= limit4) {
			fourthTax();

		} else if(taxableIncome > limit4) {
			fifthTax();
		}
	}

const calcTax = document.getElementById("pushButton")
calcTax.addEventListener("click", CalculateTax);

