/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head === null) return null;
    var slow = head;
    var fast = head.next;
    while(fast !== null && fast.next !== null){
        if(slow === fast) break;
        slow = slow.next;
        fast = fast.next.next;
    }
    if(slow !== fast) return null;
    fast = head;
    slow = slow.next;
    while(fast !== slow){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};