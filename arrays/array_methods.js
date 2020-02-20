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

function getAverageAge(arr){
	return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);
// sortByAge(users)
// alert( getAverageAge(users) );

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

function shuffle(arr){
	for(let i = arr.length - 1; i >= 0; i--){
		let j = Math.floor(Math.random() * (i + 1));
		
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

// counts of appearances for all possible permutations
function testRandomness(){
	let count = {
	  '123': 0,
	  '132': 0,
	  '213': 0,
	  '231': 0,
	  '321': 0,
	  '312': 0
	};

	for (let i = 0; i < 1000000; i++) {
	  let array = [1, 2, 3];
	  shuffle(array);
	  count[array.join('')]++;
	}

	// show counts of all possible permutations
	for (let key in count) {
	  alert(`${key}: ${count[key]}`);
	}
}
// alert("hi");
// testRandomness();
// alert("done");


// Filter unique array members
function unique(arr){
	let res = [];
	for(let item of arr){
		if(!res.includes(item)){
			res.push(item);
		}
	}
	return res;
}

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
  // "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// Create keyed object from array

function groupById(array){
	return array.reduce((acc, user) => 
	{ acc[user.id] = user; 
	  return acc;
	}, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20}
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

















