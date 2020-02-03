let user = {};
user.name = "John";
user.surname = "Smith";
user["name"] = "Pete";
delete user["name"];

function isEmpty(obj){
	for (let prop in obj){
		return false;
	}
	return true;
}

function totalSalaries(salaries){
	let sum = 0;
	for (let key in salaries){
		sum += salaries[key]
	}
	return sum
}

function multiplyNumeric(obj){
	for (let key in obj){
		if(typeof(obj[key]) === "number") obj[key] *= 2;
	}
}