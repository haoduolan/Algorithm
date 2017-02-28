/*
Sort a linked list using insertion sort.
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
var insertionSortList = function(head) {
    if(head === null || head.next === null) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = head;
    while(pre.next !== null){
        var cur = pre.next;
        var temp = pre.next
        var p = dummy;
        while(p.next != cur){
            var next = p.next;
            if(next.val > cur.val){
                pre.next = cur.next;
                p.next = cur;
                cur.next = next;
            }
            else p = p.next;
        }
        if(pre.next == temp) pre = pre.next;
    }
    return dummy.next;
};