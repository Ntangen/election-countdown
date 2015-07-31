// election countdown bot Mark 1 - streaming

var config = require('./config');
var count = require('./count');
var Twit = require('twit'); 
var T = new Twit(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

var stream = T.stream('statuses/filter', {track: "@isitoveryet2016"});

stream.on('connect', function (request) {
	console.log("Opening Twitter stream...");
});	

stream.on('connected', function (response) {
	console.log("Connected and streaming!");	
});	

stream.on('tweet', function (tweet){
	console.log("Got a tweet");
	console.log("User: " + tweet.user.screen_name);
	console.log("Text: " + tweet.text);
	console.log('id: ' + tweet.id)
	var thisTweet = count.TimeLeft();
	T.post('statuses/update', {in_reply_to_status_id: tweet.id_str, status: "@" + 
		tweet.user.screen_name + 
		thisTweet}, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
});	


function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
