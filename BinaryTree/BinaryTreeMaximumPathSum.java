/*
Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.
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
    int res = Integer.MIN_VALUE;
    public int maxPathSum(TreeNode root) {
        path(root);
        return res;
    }
    private int path(TreeNode node){
        if(node == null) return 0;
        int left = Math.max(0, path(node.left));
        int right = Math.max(0, path(node.right));
        int sum = left + right + node.val;
        res = Math.max(sum, res);
        return Math.max(0, Math.max(left, right)) + node.val;
    }
}