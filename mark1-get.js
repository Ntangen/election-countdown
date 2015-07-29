// election countdown bot Mark 1

var Twitter = require('twit'); 
var request = require('request');
var config = require('./config');

var twitter = new Twitter(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

twitter.get('statuses/mentions_timeline', function (err, data){
	if(err) return handleError(err);
	var sn = data[0].user.screen_name;
	console.log("we have a screen name: " + sn);
	twitter.post('statuses/update', {status: "@" + sn + " hello back!"}, function (err, data, res){
		console.log('I tweeted back');
	});
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
