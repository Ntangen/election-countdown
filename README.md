<h2>:us: Is the Election Over Yet? :us:</h2>

<h3>Election countdown app</h3>

This is where I'm working on my [twitter app](http://www.twitter.com/isitoveryet2016) that will return the number of days, hours, minutes and seconds until the 2016 U.S. election is over. You can see the web version [here.](http://www.istheelectionoveryet.com)

<s>Mark1 - returns a countdown to a specific user.</s>

<b>Mark2</b> - Various improvements. The Mark 2 only replies to direct tweets to @IsItOverYet2016, and ignores its own replies/other mentions. Changed around the count module to make sure the javascript was running appropriately so as to give the most updated time. Also added a bunch of console.log messages to keep the log clean and relevant.

<b>Quick edit:</b> I changed the procfile to spin up this app on a worker dyno on Heroku, in order to get around the all-too-common Boot Timeout error.

<b>Next steps</b> - Still collecting ideas. 
<ul>	
<li><s>I think it would be convenient to set the bot only to respond to direct "@" tweets, not just mentions.</s>Done!</li>
<li>Adding commands would be an obvious next step. Eg. "how many days left?" or "how much time in seconds?" or something like that.</li>
<li>I've also thought about what other data sources I could plug into. I think the idea of returning some kind of campaign finance data - "how much did Bernie Sanders raise in Q3?" - might be kinda cool.</li>
<li>Have ideas? Let me know! <b>pleasewhen@istheelectionoveryet.com</b></li>
</ul>
