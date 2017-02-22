/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
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
var zigzagLevelOrder = function(root) {
    var res = [];
    if(root === null) return res;
    var que = [];
    que.push(root);
    var toRight = false;
    while(que.length > 0){
        var list = [];
        var next = [];
        while(que.length > 0){
            var n = que.shift();
            list.push(n.val);
            if(n.right !== null) next.push(n.right);
            if(n.left !== null) next.push(n.left);
        }
        que = next;
        if(toRight) res.push(list);
        else res.push(list.reverse());
        toRight = !toRight;
    }
    return res;
};