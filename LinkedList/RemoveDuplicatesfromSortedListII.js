/*
Given a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head === null) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var p = dummy;
    while(head !== null){
        while(head.next !== null && head.next.val == head.val){
            head = head.next;
        }
        if(p.next == head){
            p = p.next;
        }
        else p.next = head.next;
        head = head.next;
    }
    return dummy.next;
};