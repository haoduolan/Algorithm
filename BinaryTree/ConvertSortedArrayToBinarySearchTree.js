/*
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/

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
var sortedArrayToBST = function(nums) {
    var build = function(n, start, end){
        if(start > end) return null
        if(start == end) return new TreeNode(n[start]);
        var mid = Math.floor((end - start) / 2) + start;
        var node = new TreeNode(n[mid]);
        node.left = build(n, start, mid - 1);
        node.right = build(n, mid + 1, end);
        return node;
    }
    return build(nums, 0, nums.length - 1);
};