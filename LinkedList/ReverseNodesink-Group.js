/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. 
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
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
var reverseKGroup = function(head, k) {
    if(head === null || k < 0) return null;
  var reverse = function(start, end){
      var after = end.next;
      var h = start.next;
      var tail = h;
      var p = h.next
      while(p != after){
          var next = p.next;
          p.next = h;
          h = p;
          p = next;
      }
      start.next = h;
      tail.next = after;
      return tail;
  }
  var prev = new ListNode(0);
  prev.next = head;
  var end = prev;
  var start = prev;
  while(end !== null){
      for(var i = 0; i < k; i++){
          end = end.next;
          if(end === null) return prev.next;
      }
      start = reverse(start, end);
      end = start;
  }
  return prev.next;
};