/*
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.
*/

/**
 * Definition for singly-linked list with a random pointer.
 * class RandomListNode {
 *     int label;
 *     RandomListNode next, random;
 *     RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    public RandomListNode copyRandomList(RandomListNode head) {
        if(head == null) return null;
        RandomListNode iter = head;
        while(iter != null){
            RandomListNode copy = new RandomListNode(iter.label);
            RandomListNode next = iter.next;
            iter.next = copy;
            copy.next = next;
            iter = next;
        }
        iter = head;
        while(iter != null){
            if(iter.random != null) iter.next.random = iter.random.next;
            iter = iter.next.next;
        }
        RandomListNode prev = new RandomListNode(0);
        iter = head;
        prev.next = iter.next;
        RandomListNode copyiter = iter.next;
        RandomListNode next = iter.next.next;
        while(next != null){
            copyiter.next = next.next;
            iter.next = next;
            iter = next;
            copyiter = copyiter.next;
            next = iter.next.next;
        }
        iter.next = null;
        return prev.next;
    }
}