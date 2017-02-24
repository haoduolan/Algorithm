/*
Given inorder and postorder traversal of a tree, construct the binary tree.

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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        return build(inorder, postorder, 0, inorder.length - 1, 0, postorder.length - 1);
    }
    private TreeNode build(int[] in, int[] post, int s1, int e1, int s2, int e2){
        if(s1 > e1 || s2 > e2) return null;
        TreeNode root = new TreeNode(post[e2]);
        int rootId = -1;
        for(int i = s1; i <= e1; i++){
            if(in[i] == post[e2]) rootId = i;
        }
        int leftSize = rootId - s1;
        root.left = build(in, post, s1, s1 + leftSize - 1, s2, s2 + leftSize - 1);
        root.right = build(in, post, rootId + 1, e1, s2 + leftSize, e2 - 1);
        return root;
    }
}