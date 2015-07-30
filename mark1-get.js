// election countdown bot Mark 1

var Twitter = require('twit'); 
var config = require('./config');
var count = require('./count');

var twitter = new Twitter(config);

port = process.env.PORT || 3000;

console.log('Mark 1 is running on port: ' + port);

twitter.get('statuses/mentions_timeline', function (err, data){
	if(err) return handleError(err);
	var sn = data[0].user.screen_name;
	console.log("we have a screen name: " + sn);
	var blurb = "@" + sn + ", there are " + 
		count.DaysLeft() + " days, " + 
		count.HoursLeft() + " hours, " + 
		count.MinsLeft() + " minutes, " +
		count.SecsLeft() + " seconds until the 2016 U.S. general election is over. " +
		"Don't forget to vote! 🇺🇸" ;

	twitter.post('statuses/update', {status: blurb}
		, function (err, data, res){
			if (err) return handleError(err);
			else console.log('tweet deployed!');
			});
	console.log(blurb);
});

function handleError(err) {
  console.error('response status:', err.statusCode);
  console.error('data:', err.data);
}
