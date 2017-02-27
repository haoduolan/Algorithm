/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var res = [];
    var helper = function(node, subsum, list){
        if(node === null) return;
        var cursum = node.val + subsum;
        list.push(node.val);
        if(node.left === null && node.right === null && cursum == sum){
            res.push(list.slice());
        }
        helper(node.left, cursum, list);
        helper(node.right, cursum, list);
        list.pop(list.length - 1);
    }
    helper(root, 0, []);
    return res;
};