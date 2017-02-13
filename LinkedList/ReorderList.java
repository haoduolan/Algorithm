/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
    public void reorderList(ListNode head) {
        if(head == null || head.next == null) return;
        //find the middle
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        //reverse second half;
        ListNode h = slow.next;
        ListNode p = h.next;
        h.next = null;
        while(p != null){
            ListNode next = p.next;
            p.next = h;
            h = p;
            p = next;
        }
        slow.next = null;
        slow = h;
        //combine
        ListNode prev = new ListNode(0);
        ListNode cur = prev;
        while(slow != null){
            cur.next = head;
            head = head.next;
            cur.next.next = slow;
            cur = slow;
            slow = slow.next;
        }
        if(head != null) cur.next = head;
    }
}