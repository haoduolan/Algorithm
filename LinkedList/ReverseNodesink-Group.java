/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
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
    public ListNode reverseKGroup(ListNode head, int k) {
        if(head == null) return head;
        ListNode prev = new ListNode(0);
        prev.next = head;
        ListNode start = prev;
        ListNode end = prev;
        while(end != null){
            for(int i = 0; i < k; i++){
                end = end.next;
                if(end == null) return prev.next;
            }
            end = reverse(start, end);
            start = end;
        }
        return prev.next;
    }
     private ListNode reverse(ListNode s, ListNode e){
         ListNode after = e.next;
         ListNode h = s.next;
         ListNode p = h.next;
         ListNode tail = h;
         h.next = after;
         while(p != after){
             ListNode next = p.next;
             p.next = h;
             h = p;
             p = next;
         }
         s.next = h;
         return tail;
     }
}