/*
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

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
var postorderTraversal = function(root) {
    var res = [];
    var stack = [];
    if(root === null) return res;
    stack.push(root);
    while(stack.length > 0){
        var t = stack.pop();
        res.push(t.val)
        if(t.left !== null) stack.push(t.left);
        if(t.right !== null) stack.push(t.right);
    }
    return res.reverse();
};