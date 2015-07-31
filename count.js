// the very latest in election detection

var USElectionDay = new Date ("Nov 8, 2016, 19:00 GMT-0500");
var now = new Date();
var remaining = USElectionDay - now;
var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;

function SecsLeft () {
	return Math.floor((remaining % minutes)/seconds);
}

function MinsLeft () {
	return Math.floor((remaining % hours) / minutes);
}

function  HoursLeft () {
	return Math.floor((remaining % days) / hours);
}

function DaysLeft () {
	return Math.floor(remaining / days).toString();
}
exports.TimeLeft = function() {
	console.log("count function checkin");
	var blurb = " There are " + 
		DaysLeft() + " days, " + 
		// HoursLeft() + " hours, " + 
		// MinsLeft() + " minutes, " +
		// SecsLeft() + " seconds until the 2016 U.S. general election is over. " +
		"Don't forget to vote! 🇺🇸" ;
	return blurb;
}