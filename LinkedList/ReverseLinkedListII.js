/*
Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(head === null || head.next === null) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;
    for(var i = 1 ; i < m; i++){
        pre = pre.next;
    }
    var start = pre.next;
    var h = start;
    var p = start.next;
    for(var j = 0 ; j < n - m; j++){
        pre.next = p;
        start.next = p.next;
        p.next = h;
        h = p;
        p = start.next;
    }
    return dummy.next;
};