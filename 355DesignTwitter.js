/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.postCount = 0;
    this.tweetCountMap = {};
    this.tweetIdMap = {};
    this.followeeMap = {};
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.tweetCountMap[tweetId] = this.postCount++;
    this.getTweetIdList(userId).push(tweetId);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    var result = [];
    var followeeSet = this.getFollowee(userId);
    var tweets = [];
    var idxMap = {};
    followeeSet.forEach(function(val) {
        var tweetIdList = this.getTweetIdList(val);
        tweets.push(...tweetIdList);
    }.bind(this));
    return tweets.sort(function(a,b) {return this.tweetCountMap[b]-this.tweetCountMap[a];}.bind(this)).slice(0, 10);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    var followerSet = this.getFollowee(followerId);
    followerSet.add(followeeId);
};

Twitter.prototype.getFollowee = function(followerId) {
    var followerSet = this.followeeMap[followerId]
    if (!followerSet) {
        followerSet = new Set();
        followerSet.add(followerId);
        this.followeeMap[followerId] = followerSet;
    }
    return followerSet;
}
/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.followeeMap[followerId] && followerId !== followeeId) {
        this.followeeMap[followerId].delete(followeeId);
    }
};

Twitter.prototype.getTweetIdList = function(userId) {
    var tweetUserList = this.tweetIdMap[userId];
    if (!tweetUserList) {
        tweetUserList = [];
        this.tweetIdMap[userId] = tweetUserList;
    }
    return tweetUserList;

};
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
module.exports = Twitter;