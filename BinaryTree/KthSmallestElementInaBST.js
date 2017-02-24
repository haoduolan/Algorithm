/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? 
How would you optimize the kthSmallest routine?
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var count = function(node){
        if(node === null) return 0;
        return count(node.left) + count(node.right) + 1;
    };
    var kth = function(node, k){
        var c = count(node.left);
        if(k < c + 1)  return kth(node.left, k);
        if(k > c + 1) return kth(node.right, k - c - 1);
        else return node.val;
    };
    return kth(root, k);
};