/*
Reverse a singly linked list.
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
var reverseList = function(head) {
    if(head === null) return head;
    var p = head.next;
    head.next = null;
    while(p !== null){
        var next = p.next;
        p.next = head;
        head = p;
        p = next;
    }
    return head;
};