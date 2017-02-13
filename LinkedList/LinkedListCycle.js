/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false;
    var slow = head;
    var fast = head.next;
    while(fast !== null && fast.next !== null){
        if(fast === slow) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};