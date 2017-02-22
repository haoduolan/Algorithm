/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        search(root, res, 1);
        Collections.reverse(res);
        return res;
    }
    private void search(TreeNode n, List<List<Integer>> res, int level){
        if(n == null) return;
        if(level > res.size()) {
            res.add(new ArrayList<Integer>());
        }
        res.get(level - 1).add(n.val);
        search(n.left, res, level + 1);
        search(n.right, res, level + 1);
    }
}