"use strict";
/*

Closures

A closure is a function that remembers its outer variables and can access them. 
In some languages, that’s not possible, or a function should be written in a special 
way to make it happen. But as explained above, in JavaScript, all functions are 
naturally closures (there is only one exception, to be covered in The "new Function"
 syntax).

That is: they automatically remember where they were created using 
a hidden [[Environment]] property, and then their code can access outer variables.

When on an interview, a frontend developer gets a question about “what’s a closure?”, 
a valid answer would be a definition of the closure and an explanation that 
all functions in JavaScript are closures, and maybe a few more words 
about technical details: the [[Environment]] property and how Lexical Environments work.

*/
{
let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

// Pete - because when we call sayHi() the function will look for name variable
// in its outer Lexical Scope and find the changed name variable.
}

{
function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

// Pete - while looking for the name variable in the outer Lexical Environment,
// the function uses the first one it finds.
}

{
function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); // ?

// 0, 1 - The counters are independent because they are 2 different instances of the makeCounter() function.
}

{
function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // ?
alert( counter.up() ); // ?
alert( counter.down() ); // ?

// 1, 2, 1 - The fucntion both have the same outer lexical scope so both will alter the same count variable.
}

{
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

// sayHi(); - will cause an error because sayHi() is in the scope of the if-block.
}

{
	function sum(a){
		return function(b) { return a + b; };
	}
	
	alert( sum(1)(2) )	// 3
	alert( sum(5)(-1))	// 4
	
}

{
let x = 1;

function func() {
  //console.log(x); // ?

  let x = 2;
}

func();

// An error - The JS Engine know about the existence of x that is in the function's scope 
// however it is uninitialized since there is no the variable is not declared by "let" 
// and therefore it cannot be used
}

{
function inBetween(a, b){
	return function(x) { return x >= a && x <= b; };
}

function inArray(arr){
	return function(x) {
		return arr.includes(x);
	};
}
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

}

{
function byField(key){
	return function(a, b) {
		return a[key] < b[key] ? -1 : 1;
	};
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.forEach(user => alert(user.name)); // Ann, John, Pete

users.sort(byField('age'));
users.forEach(user => alert(user.name)); // Pete, Ann, John

// Or use the debugger to look at users
}

{
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {  // Another fix: for (let i = 0; i < 10; i++)
	  // The fix
	  // The while loop, just like for, makes a new Lexical Environment for each run. 
	  // So here we make sure that it gets the right value for a shooter.
	  let j = i;
	  
    let shooter = function() { // shooter function
      alert( j ); // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...

}




