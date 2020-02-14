"use strict";

alert(sumInput());
alert(getMaxSubSum([-1, 2, 3, -9]));		// 5
alert(getMaxSubSum([2, -1, 2, 3, -9]));		// 6
alert(getMaxSubSum([-1, 2, 3, -9, 11]));	// 11
alert(getMaxSubSum([-2, -1, 1, 2]));		// 3
alert(getMaxSubSum([100, -9, 2, -3, 5]));	// 100
alert(getMaxSubSum([1, 2, 3]));				// 6

function arrayBasics(){
	let styles = ["Jazz", "Blues"];
	styles.push("Rock-n-Roll");
	styles[Math.floor((styles.length - 1) / 2)] = "Classics";
	alert(styles.shift());
	styles.unshift("Rap", "Reggae");
}

function sumInput(){
	let arr = [];
	while(1){
		let input = prompt("Enter a num", "");
		
		if(input === null || input === "" || !isFinite(input)) break;
		
		arr.push(+input);
	}
	
	let sum = 0;
	for (let val of arr) {
		sum += val;
	}
	
	return sum;
}

function getMaxSubSum(arr){
	let maxSum = 0;
	let partialSum = 0;
	
	for (let val of arr){
		partialSum += val;
		if(partialSum > maxSum)	maxSum = partialSum;
		else if(partialSum < 0) partialSum = 0;
	}
	
	return maxSum;
}