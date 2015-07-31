// election countdown bot Mark 1 - streaming

var config = require('./config');
var count = require('./count');
var Twitter = require('twit'); 
var twitter = new Twitter(config);
var stream = twitter.stream('statuses/filter', {track: "@isitoveryet2016"});
port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

stream.on('connect', function (response) {
	console.log("Opening Twitter stream...")
});

stream.on('connected', function (response) {
	console.log("Connected and streaming!")
});

stream.on('tweet', function (tweet){
	console.log('user: ' + tweet.user.screen_name);
	console.log('text: \n'+ tweet.text);
	console.log('id: ' + tweet.id)
	var thisTweet = count.TimeLeft();
	twitter.post('statuses/update', {status: "@" + 
		tweet.user.screen_name + 
		thisTweet, in_reply_to_status_id: tweet.id}, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
