/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(head === null) return head;
    var cur = head;
    while(cur !== null){
        var copy = new RandomListNode(cur.label);
        var next = cur.next;
        cur.next = copy;
        copy.next = next;
        cur = next;
    }
    var iter = head;
    while(iter !== null){
        if(iter.random !== null) iter.next.random = iter.random.next;
        iter = iter.next.next;
    }
    var prev = new RandomListNode(0);
    prev.next = head.next;
    var copyP = head.next;
    var p = head;
    var nextP = p.next.next;
    while(nextP !== null){
        copyP.next = nextP.next;
        p.next = nextP;
        p = nextP;
        copyP = copyP.next;
        nextP = p.next.next;
    }
     p.next = null;
    return prev.next;
};