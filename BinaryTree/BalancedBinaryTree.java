/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
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
    public boolean isBalanced(TreeNode root) {
        return height(root) >= 0;
    }
    private int height(TreeNode n){
        if(n == null) return 0;
        int left = height(n.left);
        int right = height(n.right);
        if(left < 0 || right < 0 || Math.abs(right - left) > 1) return -1;
        return Math.max(left, right) + 1;
    }
}