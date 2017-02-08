/*
Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

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
    public ListNode rotateRight(ListNode head, int k) {
        if(head == null || head.next == null) return head;
        int len = 0;
        ListNode cur = head;
        ListNode res = head;
        while(cur != null) {
            len++;
            cur = cur.next;
        }
        k = k % len;
        cur = head;
        if(k != 0){
            for(int i = 0; i < len - k - 1; i++){
                cur = cur.next;
            }
            ListNode next = cur.next;
            cur.next = null;
            res = next;
            for(int i = 0; i < k - 1; i++){
                next = next.next;
            }
            next.next = head;
        }
        return res;
    }
}