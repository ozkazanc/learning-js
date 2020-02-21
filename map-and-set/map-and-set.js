"use strict";

// Sets are objects that only contain unique entries/values.
// Maps are objects that contain key/value pairs.
// The difference between Maps and regular objects are that
// Maps can have objects as their key.

function unique(arr) {
  return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O

function acleanMap(arr){
	let map = new Map();
	
	for (let word of arr){
		let key = word.toLowerCase().split('').sort().join('');
		map.set(key, word);
	}
	return Array.from(map.values());
}

function acleanObj(arr){
	let obj = {};
	
	for (let word of arr){
		let key = word.toLowerCase().split('').sort().join('');
		obj[key] = word;
	}
	return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( acleanMap(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
alert( acleanObj(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

// WeakSet and WeakMap do not hold data from being garbage collected, 
// they do not own the original data

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

if(readMessages.has(messages[0])){
	alert("Read message: 0");
}

// Stores when the message was read
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2017, 1, 1));

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// counting the number of users
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

// Can use WeakMap to cache calculations

let cache = new WeakMap();
function process(obj){
	if(!cache.has(obj)){
		let res = /* long calculations for the result from obj */ obj;
		cache.set(obj, res);
	}
	return cache.get(obj);
}

let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
// remocved automatically from the cache
obj = null;







