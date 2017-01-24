/*
Reverse a singly linked list.
*/

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode reverseList(ListNode head) {
        if(head == null) return null;
        ListNode p = head.next;
        head.next = null;
        while(p != null){
            ListNode next = p.next;
            p.next = head;
            head = p;
            p = next;
        }
        return head;
    }
}