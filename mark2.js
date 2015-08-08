// election countdown bot Mark 2

var config = require('./config');
var count = require('./count');
var Twit = require('twit'); 
var T = new Twit(config);

port = process.env.PORT;

var stream = T.stream('user', {track: "@isitoveryet2016"});

stream.on('connect', function (request) {
	console.log("Opening Twitter stream...");
});	

stream.on('connected', function (response) {
	console.log("Connected and streaming on port: " + port);
});

stream.on('tweet', function (tweet){
	if (tweet.text.charAt(0) == "@"){
		if (tweet.user.screen_name == "isitoveryet2016") {
		console.log("Ignoring my own reply.");
		} else {
		var thisTweet = count.TimeLeft();
		console.log("Received direct tweet from: " + tweet.user.screen_name);
		console.log("Text: " + tweet.text);
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
 
stream.on('warning', function (response) {
	console.log(response);
});

stream.on('disconnect', function (response) {
	console.log(response);
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
