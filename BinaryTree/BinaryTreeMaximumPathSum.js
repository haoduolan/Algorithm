/*
Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = Number.MIN_SAFE_INTEGER;
    var helper = function(node){
        if(node === null) return 0;
        var left = Math.max(0, helper(node.left));
        var right = Math.max(0, helper(node.right));
        max = Math.max(left + right + node.val, max);
        return Math.max(left, right) + node.val;
    }
    helper(root);
    return max;
};