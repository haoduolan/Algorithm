/*
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

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
var rightSideView = function(root) {
    var search = function(n, level, res){
        if(n === null) return;
        if(level > res.length) res.push(n.val);
        search(n.right, level + 1, res);
        search(n.left, level + 1, res);
    }
    var res = [];
    search(root, 1, res);
    return res;
};