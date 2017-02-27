/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
    var helper = function(node, hasBro){
        if(node === null){
            if(hasBro) return Number.MAX_SAFE_INTEGER;
            return 0;
        }
        var left = helper(node.left, node.right !== null);
        var right = helper(node.right, node.left !== null);
        return Math.min(left, right) + 1;
    }
    return helper(root, false);
};