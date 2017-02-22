/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

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
var inorderTraversal = function(root) {
    var res = [];
    if(root === null) return res;
    var stack = []; var t = root;
    while(stack.length > 0 || t !== null) {
        if(t !== null){
            stack.push(t);
            t = t.left;
        }
        else {
            t = stack.pop();
            res.push(t.val);
            t = t.right;
        }
    }
    return res;
};