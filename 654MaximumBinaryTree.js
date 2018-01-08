/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var maxIndex = nums.indexOf(Math.max(...nums));
    var treeNode = new TreeNode(nums[maxIndex]);
    if (maxIndex !== 0) {
        treeNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    }
    if (maxIndex !== nums.length - 1) {
        treeNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    }
    return treeNode;
};

module.exports = constructMaximumBinaryTree;