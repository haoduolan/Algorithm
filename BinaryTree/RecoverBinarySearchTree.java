/*
Two elements of a binary search tree (BST) are swapped by mistake.

Recover the tree without changing its structure.

Note:
A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

*/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    //6 3 4 5 2
    //1 2 4 3 5
    //the first node is  always greater than prev
    //the second node is alway smaller than prev
    private TreeNode prev = new TreeNode(Integer.MIN_VALUE);;
    private TreeNode first = null;
    private TreeNode second = null;
    public void recoverTree(TreeNode root) {
        if(root == null) return;
        traverse(root);
        int tmp = first.val;
        first.val = second.val;
        second.val = tmp;
    }
    private void traverse(TreeNode n){
        if(n == null) return;
        traverse(n.left);
        if(n.val <= prev.val && first == null){
            first = prev;
        }
        if(n.val <= prev.val && first != null){
            second = n;
        }
        prev = n;
        traverse(n.right);
    }
}