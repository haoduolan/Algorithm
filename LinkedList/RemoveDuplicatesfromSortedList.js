/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
    var p = head;
    head = head.next;
    while(head !== null){
        if(head.val != p.val){
            console.log(head.val);
            console.log(p.val);
            p.next = head;
            p = p.next;
        }
        head = head.next;
    }
    p.next = null;
    return dummy.next;
};