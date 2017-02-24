/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    var build = function(preOrder, inOrder, s1, e1, s2, e2){
        if(s1 > e1 || s2 > e2) return null;
        var root = new TreeNode(preOrder[s1]);
        var rootId = -1;
        for(var i = s2; i <= e2; i++){
            if(inOrder[i] == preOrder[s1]) {
                rootId = i;
                break;
            }
        }
        var leftSize = rootId - s2;
        root.left = build(preOrder, inOrder, s1 + 1, s1 + leftSize, s2, rootId - 1);
        root.right = build(preOrder, inOrder, s1 + leftSize + 1, e1, rootId + 1, e2);
        return root;
    }
    return build(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
};