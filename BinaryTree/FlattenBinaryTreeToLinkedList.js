/*
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 
// recursive

var flatten = function(root) {
    var prev = null;
    var helper = function(n){
        if(n === null) return;
        helper(n.right);
        helper(n.left);
        n.right = prev;
        n.left = null;
        prev = n;
    }
    helper(root);
};

// interation
var flatten = function(root) {
    var cur = root;
    while(cur !== null){
        if(cur.left !== null){
            var p = cur.left;
            while(p.right !== null) p = p.right;
            p.right = cur.right;
            cur.right = cur.left;
            cur.left = null;
        }
        cur = cur.right;
    }
}; 