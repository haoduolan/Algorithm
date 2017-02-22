/*
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
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
public class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        if(root == null) return list;
        Queue<TreeNode> cur = new LinkedList<>();
        boolean toRight = true;
        cur.add(root);
        while(!cur.isEmpty()) {
            Queue<TreeNode> next = new LinkedList<>();
            List<Integer> l = new ArrayList<Integer>();
            while(!cur.isEmpty()) {
                TreeNode n = cur.poll();
                l.add(n.val);
                if(n.left != null) next.add(n.left);
                if(n.right != null) next.add(n.right);
            }
            if(!toRight) Collections.reverse(l);
            list.add(l);
            toRight = !toRight;
            cur = next;
        }
        return list;
    }
}