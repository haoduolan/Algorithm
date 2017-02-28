/*
Sort a linked list using insertion sort.
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
    public ListNode insertionSortList(ListNode head) {
        if(head == null || head.next == null) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode pre = head;
        while(pre.next != null){
            ListNode temp = pre.next;
            ListNode cur = pre.next;
            ListNode p = dummy;
            while(p.next != cur){
                ListNode next = p.next;
                if(cur.val < next.val){
                    pre.next = cur.next;
                    p.next = cur;
                    cur.next = next;
                    break;
                }
                else p = next;
            }
            if(pre.next == temp) pre = pre.next;
        }
        return dummy.next;
    }
}