/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    var prev = new TreeNode(Number.MIN_SAFE_INTEGER);
    var first = null;
    var second = null;
    var traverse = function(n){
        if(n === null) return ;
        traverse(n.left);
        if(prev.val >= n.val && first === null) {
            first = prev;
        }
        if(prev.val >= n.val && first !== null) {
            second = n;
        }
        prev = n;
        traverse(n.right);
    }
    traverse(root);
    var tmp = first.val;
    first.val = second.val;
    second.val = tmp;
};