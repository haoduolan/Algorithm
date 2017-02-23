/*
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    var cur = root;
    var head = null;
    var prev = null;
    while(cur !== null){
        while(cur !== null){
            if(cur.left !== null){
                if(prev !== null) prev.next = cur.left;
                else head = cur.left;
                prev = cur.left;
            }
            if(cur.right !== null){
                if(prev !== null) prev.next = cur.right;
                else head = cur.right;
                prev = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        prev = null;
        head = null;
    }
};