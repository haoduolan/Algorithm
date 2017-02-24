/*
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    var node = head;
    var size = 0;
    while(node !== null) {
        size++;
        node = node.next;
    }
    node = head;
    var build =  function(start, end){
        if(start > end) return null;
        var mid = start + Math.floor((end - start) / 2);
        var left = build(start, mid - 1);
        var n = new TreeNode(node.val);
        node = node.next;
        n.left = left;
        n.right = build(mid + 1, end);
        return n;
    };
    return build(0, size - 1);
};