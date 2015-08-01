// election countdown bot Mark 2

var config = require('./config');
var count = require('./count');
var Twit = require('twit'); 
var T = new Twit(config);

port = process.env.PORT || 3000;

console.log('Mark 2 is running on port: ' + port);

var stream = T.stream('user', {track: "@isitoveryet2016"});

stream.on('connect', function (request) {
	console.log("Opening Twitter stream...");
});	

stream.on('connected', function (response) {
	console.log("Connected and streaming!");	
});	

stream.on('tweet', function (tweet){
	console.log("Got a tweet from user: " + tweet.user.screen_name);
	if (tweet.text.charAt(0) == "@"){
		if (tweet.user.screen_name == "isitoveryet2016") {
		console.log("This is my own reply - ignoring.");
		} else {
		var thisTweet = count.TimeLeft();
		console.log("Text: " + tweet.text);
		console.log("This is a direct tweet from: " + tweet.user.screen_name);
		T.post('statuses/update', {in_reply_to_status_id: tweet.id_str, status: "@" + 
		tweet.user.screen_name + 
		thisTweet}, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
		}
	}
	else {
		console.log("Not a direct tweet, not replying.");
	}
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
