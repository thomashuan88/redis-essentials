var redis = require("redis");
var client = redis.createClient();

function upVote(id) {
	var key = "article:" + id + ":votes";
	client.incr(key);
}

function downVote(id) {
	var key = "article:" + id + ":votes";
	client.decr(key);
}

function showResults(id) {
	var headlineKey = "article:" + id + ":headline";
	var voteKey = "article:" + id + ":votes";

	client.mget([headlineKey, voteKey], function(err, replies) {
		console.log('the article "' + replies[0] + '" has', replies[1], 'votes');
	});
}

upVote(12345);
upVote(12345);
upVote(12345);
upVote(10001);
upVote(10001);
downVote(10001);
upVote(60056);

showResults(12345);
showResults(10001);
showResults(60056);

client.quit();