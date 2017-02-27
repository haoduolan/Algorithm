/*
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
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
    List<List<Integer>> res = new ArrayList<List<Integer>>();
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        helper(root, sum, new ArrayList<Integer>());
        return res;
    }
    private void helper(TreeNode node, int sum, List<Integer> list){
        if(node == null) return;
        list.add(node.val);
        if(node.left == null &&  node.right == null){
            if(node.val == sum) {
                res.add(new ArrayList<Integer>(list));
            }
        }
        helper(node.left, sum - node.val, list);
        helper(node.right, sum - node.val, list);
        list.remove(list.size() - 1);
    }
}