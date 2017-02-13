/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return;
    //find middle
    var slow = head;
    var fast = head.next;
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    //raverse second half
    var h = slow.next;
    var p = h.next;
    h.next = null;
    while(p !== null){
        var next = p.next;
        p.next = h;
        h = p;
        p = next;
    }
    slow.next = null;
    var prev = new ListNode(0);
    prev.next = head;
    var cur = prev;
    while(h !== null){
        cur.next = head;
        head = head.next;
        cur.next.next = h;
        cur = h
        h = h.next;
    }
    if(head !== null) cur.next = head;
};