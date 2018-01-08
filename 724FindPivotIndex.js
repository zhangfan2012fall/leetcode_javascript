/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length === 0) {
        return -1;
    }
    var sum = nums.reduce((ret, num) => ret + num, 0);

    var left = 0;
    for (var i = 0; i < nums.length; i++) {
        if (sum - nums[i] === left) {
            return i;
        }
        sum -= nums[i];
        left += nums[i];
    }
    return -1;
};

module.exports = pivotIndex;