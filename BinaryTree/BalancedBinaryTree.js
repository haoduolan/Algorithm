/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    var helper = function(n){
        if(n === null) return 0;
        var lh = helper(n.left);
        var rh = helper(n.right);
        if(lh < 0 || rh < 0 || Math.abs(lh - rh) > 1) return -1;
        return Math.max(rh, lh) + 1;
    }
    return helper(root) >= 0;
};