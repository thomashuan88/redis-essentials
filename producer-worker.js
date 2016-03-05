var redis = require("redis");
var client = redis.createClient();
var queue = require("./queue");

var logsQueue = new queue.Queue("logs", client);

var MAX = 5;
for (var i = 0; i < MAX; i++) {
	logsQueue.push("Hello world #" + i);
}

console.log("Created " + MAX + " logs");
client.quit();