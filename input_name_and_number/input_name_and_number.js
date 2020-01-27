"use strict";

let name = null;
do {	
	name = prompt("What's your name?", "");
} while(!name || !confirm(`Is your name ${name}?`))
	
alert(`Hello ${name}! Nice to meet you!`);

let n = 0;
do {
	n = +prompt(`Please enter a number greater than 100 ${name}!`,"");
} while ((!n || n < 100 || alert(`Yes!, ${n} works.`)) && reportError(n))


// without the messages it's only while(!n || n < 100)
// without the function it becomes very unreadable, albeit slighty faster
// i.e. while((!n && !alert("notvalid")) 
//				|| (n < 100) ? !alert("less") : alert("success"))
function reportError(n)
{
	if(!n) 
	{
		alert("Please enter a valid number.");
	}
	else if(n < 100)
	{
		alert(`No, not ${n}`);
	}
	return true;
}