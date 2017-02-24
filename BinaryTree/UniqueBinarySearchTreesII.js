/*
Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    var build = function(start, end){
        var list = [];
        if(start > end) {
            list.push(null);
            return list;
        }
        if(start == end) {
            list.push(new TreeNode(start));
            return list;
        }
        for(var i = start; i <= end; i++){
            var leftList = build(start, i - 1);
            var rightList = build(i + 1, end);
            for(var m = 0; m < leftList.length; m++){
                for(var n = 0; n < rightList.length; n++){
                    var root = new TreeNode(i);
                    root.left = leftList[m];
                    root.right = rightList[n];
                    list.push(root);
                }
            }
        }
        return list;
    }
    if(n === 0) return [];
    return build(1, n);
};