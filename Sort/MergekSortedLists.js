/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var merge = function(l1, l2){
        if(l1 === null) return l2;
        if(l2 === null) return l1;
        if(l1.val <= l2.val){
            l1.next = merge(l1.next, l2);
            return l1;
        }
        l2.next = merge(l1, l2.next);
        return l2;
    }
    var partion = function(list, s, e){
        if(s == e) return list[s];
        if(s > e) return null;
        var mid = Math.floor((e - s) / 2) + s;
        var list1 = partion(list, s, mid);
        var list2 = partion(list, mid + 1, e);
        return merge(list1, list2);
    }
    return partion(lists, 0, lists.length - 1);
};