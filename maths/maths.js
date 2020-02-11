"use strict";

//sumNums();
alert(randomInt(1,4));
alert(randomInt(4,4));
alert(randomInt(8,9));
alert(randomInt(8,9));
alert(randomInt(8,9));
alert(randomInt(8,9));
alert(randomInt(2,7));


function sumNums() {
	let a = 0;
	let b = 0;
	do {
		a = +prompt("Enter the first number","");
		b = +prompt("Enter the second number","");
	} while (!(isFinite(a) && isFinite(b) || alert("Error enter a valid number.")))
		
	alert(a + b);
}

function weirdRoundDown() {
	alert( 1.35.toFixed(1) ); // 1.4
	alert( 6.35.toFixed(1) ); // 6.3
	
	alert( 6.35.toFixed(20) ); // 6.34999999999999964473
	alert( 1.35.toFixed(20) ); // 1.35000000000000008882
	
	alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000
}

function readNumber(){
	let res = "";
	do {
		res = prompt("Num?","");
	} while(!isFinite(res))
	// isFinite(undefined | null) return true since they both convert to 0.
	
	if(res === null || res === "") return null;
	
	return +res;
}

function infiniteLoop() {
	let i = 0;
	while (i != 10) {
		i += 0.2;
		if (i > 9.8 && i < 10.2) alert( i ); // i is never exactly 10 because of floating point storing
	}
	// Avoid equality checks when working with decimal functions.
}

// Returns a random floating number from min to max
function random(min, max){
	let range = max - min;
	return Math.random() * range + min;
}

// Return a random integer number from min to max
function randomInt(min, max){
	return Math.floor(random(min, max + 1));
}
// Draw graph of example randomInt(1,3) to understand why using Math.floor and not Math.round


