/*
Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    var res = [];
    var stack = [];
    if(root === null) return res;
    stack.push(root);
    while(stack.length > 0){
        var n = stack.pop();
        res.push(n.val);
        if(n.right !== null) stack.push(n.right);
        if(n.left !== null) stack.push(n.left);
    }
    return res;
};