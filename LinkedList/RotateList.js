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
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head === null) return head;
    var len = 0;
    var cur = head;
    while(cur !== null){
        len++;
        cur = cur.next;
    }
    cur = head;
    k = k % len;
    var res = head;
    if(k !== 0){
        for(var i = 0; i < len - k - 1; i++){
            cur = cur.next;
        }
        res = cur.next;
        cur.next = null;
        cur = res;
        while(cur.next !== null) cur = cur.next;
        cur.next = head;
    }
    return res;
};