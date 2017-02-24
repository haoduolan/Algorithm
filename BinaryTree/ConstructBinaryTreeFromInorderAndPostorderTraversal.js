/*
Given inorder and postorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  var build = function(inOrder, postOrder, s1, e1, s2, e2){
      if(s1 > e1 || s2 > e2) return null;
      var root = new TreeNode(postOrder[e2]);
      var rootId = -1;
      for(var i = s1; i <= e1; i++){
          if(inOrder[i] == postOrder[e2]){
              rootId = i;
              break;
          }
      }
      var leftSize = rootId - s1;
      root.left = build(inOrder, postOrder, s1, rootId - 1, s2, s2 + leftSize - 1);
      root.right = build(inOrder, postOrder, rootId + 1, e1, s2 + leftSize, e2 - 1);
      return root;
  }  
  return build(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
};