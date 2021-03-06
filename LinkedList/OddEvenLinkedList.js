/*
Given a singly linked list, group all odd nodes together followed by the even nodes. 
Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. 
The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
    if(head === null || head.next === null) return head;
    var odd = true;
    var oddH = head;
    var evenH = head.next;
    var oddP = head;
    var evenP = head.next;
    var p = evenH.next;
    while(p !== null){
        if(odd){
            oddP.next = p
            oddP = p;
        }
        else{
            evenP.next = p;
            evenP = p;
        }
        p = p.next;
        odd = !odd;
    }
    evenP.next = null;
    oddP.next = evenH;
    return oddH;
};