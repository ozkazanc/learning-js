"use strict";

function ucFirst(str){
	return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str){
	let lcs = str.toLowerCase();
	return lcs.includes("viagra") || lcs.includes("xxx");
}

function truncate(str, maxLength){
	return str.length > max length ? str.slice(0, maxLength - 1) + "..." : str;
}

function extractCurrencyValue(str){
	return +str.slice(1);
}