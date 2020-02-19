"use strict";

function camelize(str){
	let temp = str.split('-');
	let temp2 = temp.slice(1).map(item => item[0].toUpperCase() + item.slice(1));
	temp2.unshift(temp[0]);
	
	// let temp2 = temp.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
	
	return temp2.join('');
	
}
// alert(camelize("background-color"));		// backgroundColor
// alert(camelize("list-style-image"));		// listStyleImage
// alert(camelize("-webkit-transition"));	// WebkitTransition

function filterRange(arr, a, b){
	return arr.filter(item => (item >= a && item <= b));
}

function filterRangeInPlace(arr, a, b){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < a || arr[i] > b){
			arr.splice(i, 1);
			
			// adjust the index since the array got smaller
			i--;
		}
	}
}
// let a  = [3, 5, 8, 1];
// filterRangeInPlace(a, 1, 4)
// alert(a);	// [3,1]

// Sort in descending order
// let arr = [-5, 2, 1, -10, 8];
// arr.sort( (a, b) => b - a);
// alert(arr);

function copySorted(arr){
	// Use slice() to copy an array
	return arr.slice().sort();
}
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);

// alert( sorted ); 	// CSS, HTML, JavaScript
// alert( arr ); 		// HTML, JavaScript, CSS (no changes)

function Calculator(){
	this.methods = {
		"+" : function(a, b) { return a + b; },
		"-" : function(a, b) { return a - b; }
	};
	
	this.calculate = function(str) {
		let temp = str.split(' ');
		
		let a = +temp[0];
		let op = temp[1];
		let b = +temp[2];
		
		if(!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
		
		return this.methods[op](a, b);
	};
	
	this.addMethod = function(op, fn) {
		this.methods[op] = fn;
	}
}

// let calc = new Calculator;

// calc.addMethod("*", (a, b) => a * b);
// calc.addMethod("/", (a, b) => a / b);
// calc.addMethod("**", (a, b) => a ** b);

// alert( calc.calculate("3 + 7") ); // 10
// alert( calc.calculate("3 - 7") ); // -4
// alert( calc.calculate("5 - 1") ); // 4

// alert( calc.calculate("5 * -1") ); // -5
// alert( calc.calculate("9 / 3") )   // 3
// alert( calc.calculate("2 ** 3") ); // 8

// alert( calc.calculate("2 += 3") ); // NaN
// alert( calc.calculate("2 * str")); // NaN

// alert( calc.calculate(`${calc.calculate("9 / 3")} + ${calc.calculate("5 * -1")}`));	// -2

// Map to names
function sortByAge(arr){
	arr.sort((a, b) => a.age - b.age);
}
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);
// sortByAge(users)

// alert( users ); // John, May, Pete
// alert( names ); // John, Pete, Mary

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(item => ({
	// fullName:`${item.name} ${item.surname}`, 
	// id: `${item.id}`
// }));

// /*
// usersMapped = [
  // { fullName: "John Smith", id: 1 },
  // { fullName: "Pete Hunt", id: 2 },
  // { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith























