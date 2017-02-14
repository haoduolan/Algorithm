/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

Show Company Tags
Show Tags
Show Similar Problems

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
    public boolean isPalindrome(ListNode head) {
        if(head == null || head.next == null) return true;
        ListNode slow = head;
        ListNode fast = head.next;
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode h = slow.next;
        slow.next = null;
        ListNode p = h.next;
        h.next = null;
        while(p != null){
            ListNode next = p.next;
            p.next = h;
            h = p;
            p = next;
        }
        
        while(h != null){
            // System.out.println(h.val);
            // System.out.println(head.val);
            if(h.val != head.val) return false;
            h = h.next;
            head = head.next;
        }
        return true;
    }
}