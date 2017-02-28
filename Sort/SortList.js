/*
Sort a linked list in O(n log n) time using constant space complexity.
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
var sortList = function(head) {
    var findMid = function(h) {
        if(h === null) return null;
        var slow = h;
        var fast = h.next;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    var merge = function(l1, l2){
        var dummy = new ListNode(0);
        var p = dummy;
        while(l1 !== null && l2 !== null){
            if(l1.val <= l2.val) {
                p.next = l1;
                l1 = l1.next; 
            }
            else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next
        }
        if(l1 !== null) p.next = l1;
        if(l2 !== null) p.next = l2;
        return dummy.next;
    }
    var sort = function(h1){
        if(h1 === null || h1.next === null) return h1;
        var mid = findMid(h1);
        var h2 = mid.next;
        mid.next = null;
        var list1 = sort(h1);
        var list2 = sort(h2);
        return merge(list1, list2);
    }
    return sort(head);
};