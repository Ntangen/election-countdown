// election countdown bot Mark 1 - streaming

var Twitter = require('twit'); 
var config = require('./config');
var count = require('./count');

var twitter = new Twitter(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

var stream = twitter.stream('statuses/filter', {track: "@isitoveryet2016"});

stream.on('connect', function (response) {
	console.log("Opening Twitter stream...")
});

stream.on('connected', function (err, response) {
	if (err) return handleError(err);
	console.log("Connected and streaming!")
});

stream.on('tweet', function (tweet){
	console.log('we have something: \n'+ tweet.text);
	console.log('user: ' + tweet.user.screen_name);
	var thisTweet = count.TimeLeft();
	twitter.post('statuses/update', {status: "@" + tweet.user.screen_name + thisTweet}
		, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
