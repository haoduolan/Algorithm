/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var search = function(n, level, res){
        if(n === null) return;
        if(level > res.length) res.push([]);
        var tmp = res[level - 1];
        tmp.push(n.val);
        search(n.left, level + 1, res);
        search(n.right, level + 1, res);
    }
    var res = [];
    search(root, 1, res);
    return res.reverse();
};