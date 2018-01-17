/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  var n = nums.length;
  var coins = [];
  nums.unshift(1);
  nums.push(1);
  for (var i = 0; i < nums.length; i++) {
      coins.push(new Array(nums.length).fill(0));
  }
  for (var len = 1; len <= n; len++) {
      for (var start = 1; start <= n - len + 1; start++) {
          var end = len + start - 1;
          for (var k = start; k <= end; k++) {
              coins[start][end] = Math.max(coins[start][end], coins[start][k-1] + nums[start-1]*nums[k]*nums[end+1] + coins[k+1][end])
          }
      }
  }
  return coins[1][n];
};

module.exports = maxCoins;