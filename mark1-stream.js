// election countdown bot Mark 1

var Twitter = require('twit'); 
var request = require('request');
var config = require('./config');

var twitter = new Twitter(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

var stream = twitter.stream('statuses/mentions_timeline')
stream.on('connect', function (response) {
	console.log("Opening Twitter stream...")
});

stream.on('connected', function (response) {
	console.log("Connected and streaming!")
});

stream.on('tweet', function (tweet){
	console.log('we have something: '+ tweet);
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
