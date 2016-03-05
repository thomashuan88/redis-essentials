var redis = require("redis");
var client = redis.createClient();
client.set("my_key", "Hello world using node.js and rdis");
client.get ("my_key", redis.print);
client.quit();