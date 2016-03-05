function Queue(queueName, redisClient) {
	this.queueName = queueName;
	this.redisClient = redisClient;
	this.queueKey = 'queue:' + queueName;

	this.timeout = 0;
}

Queue.prototype.size = function(callback) {
	this.redisClient.llen(this.queueKey, callback) ;
};

Queue.prototype.push = function(data) {
	this.redisClient.lpush(this.queueKey, data);
};

Queue.prototype.pop = function(callback) {
	this.redisClient.brpop(this.queueKey, this.timeout, callback);
}

exports.Queue = Queue;