/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
How would you optimize the kthSmallest routine?
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
    public int kthSmallest(TreeNode root, int k) {
        int count = getCount(root.left);
        if(k < count + 1) return kthSmallest(root.left, k);
        if(k == count + 1) return root.val;
        return kthSmallest(root.right,  k - count - 1);
    }
    private int getCount(TreeNode node){
        if(node == null) return 0;
        return getCount(node.left) + getCount(node.right) + 1;
    }
}