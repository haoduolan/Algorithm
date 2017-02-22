/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
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

// recursive
// time O(n), space O(n);
public class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        search(root, res, 1);
        return res;
    }
    private void search(TreeNode n, List<List<Integer>> res, int level){
        if(n == null) return;
        if(level > res.size()){
            res.add(new ArrayList<Integer>());
        }
        res.get(level - 1).add(n.val);
        search(n.left, res, level + 1);
        search(n.right, res, level + 1);
    }
}

// iteration
// time O(n), space O(1)
public class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(root == null) return res;
        Queue<TreeNode> cur = new LinkedList<>();
        cur.add(root);
        int level = 0;
        while(!cur.isEmpty()){
            Queue<TreeNode> next = new LinkedList<>();
            List<Integer> list = new ArrayList<Integer>();
            while(!cur.isEmpty()){
                TreeNode n = cur.poll();
                list.add(n.val);
                if(n.left != null) next.add(n.left);
                if(n.right != null) next.add(n.right);
            }
            res.add(list);
            cur = next;
        }
        return res;
    }
}

