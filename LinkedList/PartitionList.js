/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(head === null) return head;
    var lessH = new ListNode(0);
    var less = lessH;
    var greaterH = new ListNode(0);
    var greater = greaterH;
    while(head !== null){
        if(head.val < x) {
            less.next = head;
            less = less.next;
        }
        else{
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    less.next = greaterH.next;
    greater.next = null;
    return lessH.next;
};