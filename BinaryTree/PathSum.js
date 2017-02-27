/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var helper = function(node, subsum, sum){
        if(node === null) return false;
        var cursum = node.val + subsum;
        if(node.left === null && node.right === null && cursum == sum) return true;
        return helper(node.left, cursum, sum) || helper(node.right, cursum, sum);
    }
    return helper(root, 0, sum);
};