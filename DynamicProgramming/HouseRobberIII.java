/*
The thief has found himself a new place for his thievery again. 
There is only one entrance to this area, called the "root." 
Besides the root, each house has one and only one parent house. 
After a tour, the smart thief realized that "all houses in this place forms a binary tree". 
It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
    public int rob(TreeNode root) {
        int[] res = robDFS(root);
        return Math.max(res[0], res[1]);
    }
    private int[] robDFS(TreeNode node){
        if(node == null) return new int[2];
        int[] res = new int[2];
        int[] left = robDFS(node.left);
        int[] right = robDFS(node.right);
        res[0] = node.val + left[1] + right[1];
        res[1] = Math.max(left[1], left[0]) + Math.max(right[1], right[0]);
        return res;
    }
}