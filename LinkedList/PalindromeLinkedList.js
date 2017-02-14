/*
Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

Show Company Tags
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;
    var slow = head;
    var fast = head.next;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    var h = slow.next;
    var p = h.next;
    slow.next = null;
    h.next = null;
    while(p !== null){
        var next = p.next;
        p.next = h;
        h = p;
        p = next;
    }
    while(h !== null){
        if(h.val != head.val) return false;
        h = h.next;
        head = head.next;
    }
    return true;
};