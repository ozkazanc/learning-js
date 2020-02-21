"use strict";

// //let feb20_2012 = new Date("2012-2-20 3:12");
// let feb20_2012 = new Date(2012, 1, 20, 3, 12);
// alert(feb20_2012);

function getWeekDay(date){
	switch(date.getDay()){
		case 0: return "SU";
		case 1: return "MO";
		case 2: return "TU";
		case 3: return "WE";
		case 4: return "TH";
		case 5: return "FR";
		case 6: return "SA";
	}
	
	// Another solution ===========================
	let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
	return days[date.getDay()];
}

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"


function getLocalDay(date){
	return (date.getDay()+ 6) % 7 + 1;
}

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getDateAgo(date, days){
	let copy = new Date(date);
	copy.setDate(copy.getDate() - days);
	return copy.getDate();
}
let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getLastDayOfMonth(year, month){
	let nextMonth = new Date(year, month + 1, 0);
	return nextMonth.getDate();
}

// alert( getLastDayOfMonth(2012, 0) ); // 31
// alert( getLastDayOfMonth(2012, 1) ); // 29
// alert( getLastDayOfMonth(2013, 1) ); // 28

function getSecondsToday() {
	let now = new Date();
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	
	return Math.round((now.getTime() - today.getTime()) / 1000);
	
	// Alternative solution ============================
	let d = new Date();
	return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
// alert(getSecondsToday());

function getSecondsToTomorrow(){
	return 24 * 3600 - getSecondsToday();
}
// alert(getSecondsToTomorrow());

function formatDate(date){
	let diff = new Date().getTime() - date.getTime();
	
	if(diff < 1000) 				return "right now";
	else if (diff < 60 * 1000) 		return (diff / 1000) + " sec. ago";
	else if (diff < 60 * 60 * 1000) return (diff / (60 * 1000)) + " min. ago";
	else {
		// format the date
		// add leading zeroes to single-digit day/month/hours/minutes
		let d = 
		[
			'0' + date.getDate(),
			'0' + (date.getMonth() + 1),
			'' + date.getFullYear(),
			'0' + date.getHours(),
			'0' + date.getMinutes()
		].map(comp => comp.slice(-2));	// take last 2 digits of every component
		
		// join the components into date
		return d.slice(0,3).join('.') + ' ' + d.slice(3).join(':');
	}
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );






