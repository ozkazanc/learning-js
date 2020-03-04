"use strict";

// 2 ways of creating a linked list structure
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let list2 = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

// prepend the new value to the list
list = { value: "new item", next: list };

list.next = list.next.next;

// Splitting the list
let secondList = list.next.next;
list.next.next = null;

// Joining two lists
list.next.next = secondList;



function sumTo(n){
	// Iterative
	let sum = 0;
	for (let i = 1; i <= n; i++ ) sum += i;
	return sum;
	
	// Recursive
	return (n == 1) ? 1 : n + sumTo(n - 1);
	
	// Aritmetic Porggression formula
	return (n + 1) * n / 2;
}

alert( sumTo(100) ); // 5050

function factorial(n){
	if(n == 1) return 1;
	return n * factorial(n - 1);
}

function fib(n){
	// Recursive
	let arr = [1,1];
	return fibHelper(n - 1, arr);
	
	// Iterative
	let a = 1;
	let b = 1;
	for (let i = 3; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}
	return b;
}

function fibHelper(n, arr){
	if(arr[n] === undefined) arr[n] = fibHelper(n - 1, arr) + fibHelper(n - 2, arr);
	return arr[n];
}

alert(fib(77));

function printList(list){
	// Iterative
	while(list != null){
		alert(list.value);
		list = list.next;
	}
	return;
	
	// Recursive
	if(list) {
		alert(list.value);
		printList(list.next);
	}
	return;
}

printList(list);
printList(secondList);


function countList(list){
	return list == null ? 0 : 1 + countList(list.next);
}

function getNthItemFromList(n, list){
	while(list && n > 0) {
		list = list.next;
		n--;
	}
	return list ? list.value : undefined;
}
function printReverseList(list){
	// Iterative 1, O(n^2) time, O(1) space
	 let count = countList(list);
	 for (let i = count - 1; i >= 0; i--){
		 alert(getNthItemFromList(i, list));
	 }
	// Iterative 2, O(n) time, O(n) space
	let arr = [];
	let tmp = list;
	while(tmp){
		arr.push(tmp.value);
		tmp = tmp.next;
	}
	for (let i = arr.length - 1; i >= 0; i--){
		alert(arr[i]);
	}
	
	// Recursive
	if(list){
		printReverseList(list.next);
		alert(list.value);
	}
}

printReverseList(list);
printReverseList(secondList);

// Rest parameters syntax
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// Spread syntax
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

let str = "Hello";

alert( [...str] ); // H,e,l,l,o
alert( Array.from(str) ); // H,e,l,l,o
