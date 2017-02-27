/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
    public int minDepth(TreeNode root) {
        return depth(root, false);
    }
    private int depth(TreeNode root, boolean hasBro){
        if(root == null && !hasBro) return 0;
        if(root == null) return Integer.MAX_VALUE;
        return Math.min(depth(root.left, root.right != null), depth(root.right, root.left != null)) + 1;
    }
}