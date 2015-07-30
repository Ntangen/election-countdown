// election countdown bot Mark 1 - streaming

var Twitter = require('twit'); 
var config = require('./config');
var count = require('./count');

var twitter = new Twitter(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

var blurb = " There are " + 
		count.DaysLeft() + " days, " + 
		count.HoursLeft() + " hours, " + 
		count.MinsLeft() + " minutes, " +
		count.SecsLeft() + " seconds until the 2016 U.S. general election is over. " +
		"Don't forget to vote! 🇺🇸" ;

var stream = twitter.stream('statuses/filter', {track: "@isitoveryet2016"});

stream.on('connect', function (response) {
	console.log("Opening Twitter stream...")
});

stream.on('connected', function (response) {
	console.log("Connected and streaming!")
});

stream.on('tweet', function (tweet){
	console.log('we have something: \n'+ tweet.text);
	console.log('user: ' + tweet.user.screen_name);
	twitter.post('statuses/update', {status: "@" + tweet.user.screen_name + blurb}
		, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
