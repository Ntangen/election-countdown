// the very latest in election detection

var USElectionDay = new Date ("Nov 8, 2016, 19:00 GMT-0500");
var now = new Date();
var remaining = USElectionDay - now;
var seconds = 1000;
var minutes = seconds * 60;
var hours = minutes * 60;
var days = hours * 24;

exports.SecsLeft = function () {
	return Math.floor((remaining % minutes)/seconds);
}

exports.MinsLeft = function () {
	return Math.floor((remaining % hours) / minutes);
}

exports.HoursLeft = function () {
	return Math.floor((remaining % days) / hours);
}

exports.DaysLeft = function () {
	return Math.floor(remaining / days);
}
