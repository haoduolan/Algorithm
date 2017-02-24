/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
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

//top dowm
public class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        return topDown(head, null);
    }
    private TreeNode topDown(ListNode node, ListNode end){
        if(node == end) return null;
        ListNode slow = node;
        ListNode fast = node.next;
        while(fast != end && fast.next != end){
            slow = slow.next;
            fast = fast.next.next;
        }
        TreeNode treenode = new TreeNode(slow.val);
        treenode.left = topDown(node, slow);
        treenode.right = topDown(slow.next, end);
        return treenode;
    }
}

//inorder
public class Solution {
    private ListNode node;
    public TreeNode sortedListToBST(ListNode head) {
        if(head == null) return null;
        int size = 0;
        node = head;
        while(node != null){
            size++;
            node = node.next;
        }
        node = head;
        return bottomUp(0, size - 1);
    }
    private TreeNode bottomUp(int start, int end){
        if(start > end) return null;
        int mid = (end - start) / 2 + start;
        TreeNode left = bottomUp(start, mid - 1);
        TreeNode n = new TreeNode(node.val);
        n.left = left;
        node = node.next;
        n.right = bottomUp(mid + 1, end);
        return n;
    }
}