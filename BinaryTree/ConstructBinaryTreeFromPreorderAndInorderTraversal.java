/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.
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
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        return build(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
    }
    private TreeNode build(int[] pre, int[] in, int s1, int e1, int s2, int e2){
        if(s1 > e1) return null;
        if(s2 > e2) return null;
        TreeNode root = new TreeNode(pre[s1]);
        int rootId = findId(in, s2, e2, pre[s1]);
        int leftSize = rootId - s2;
        root.left = build(pre, in, s1 + 1, s1 + leftSize, s2, rootId - 1);
        root.right = build(pre, in, s1 + leftSize + 1, e1, rootId + 1, e2);
        return root;
    }
    private int findId(int[] arr, int start, int end, int target){
        for(int i = start; i <= end; i++){
            if(arr[i] == target) return i;
        }
        return -1;
    }
}