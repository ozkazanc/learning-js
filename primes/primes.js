"use strict";

let n = prompt("Give a range for prime numbers", "");

let ans = "";

for(let i = 2; i <= n; i++)
{
	let notPrime = false;
	for(let j = 2; j < i; j++)
	{
		if(i % j == 0)
		{
			notPrime = true;
			break;
		}
	}
	
	if(!notPrime) ans += `${i},`;
}
alert(ans.substring(0, ans.length - 1));