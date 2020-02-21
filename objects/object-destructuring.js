"use strict";

// Object.keys(obj),  return an Array of the object's properties
// Object.values(obj),  return an Array of the object's values
// Object.entries(obj),  return an Array of arrays [ [key, value], ...rest]

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8

function sumSalaries(salaries){
	let sum = 0;
	for (let salary of Object.values(salaries)){
		sum += salary;
	}
	return sum;
	
	// return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

// Write a function count(obj) that returns the number of properties in the object:
function count(obj){
	return Object.keys(obj).length;
}

// Destructuring Assignment
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar

// Note that type of `rest` is Array.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2] // items first element goes to item1, second to item2
} = {}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);
// also legal now since the default object is {} therefore the all the default params will be used
showMenu();

let user = { name: "John", years: 30 };

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( topSalary(salaries));
alert( topSalary({}));

function topSalary(salaries){
	let maxSalary = 0;
	let maxPerson = null;
	
	for(let [name, salary] of Object.entries(salaries)){
		if(salary > maxSalary){
			maxSalary = salary;
			maxPerson = name;
		}
	}
	
	return maxPerson;
}



