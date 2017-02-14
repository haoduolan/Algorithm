/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?
*/

public class LRUCache {
    private HashMap<Integer, Node> map;
    private Node head;
    private Node end;
    private int capacity;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        map = new HashMap<Integer, Node>();
    }
    
    public int get(int key) {
        if(!map.containsKey(key)) return -1;
        Node n = map.get(key);
        remove(n);
        addHead(n);
        return n.val;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)){
            Node oldNode = map.get(key);
            remove(oldNode);
            oldNode.val = value;
            addHead(oldNode);
        }
        else{
            Node create = new Node(key, value);
            if(map.size() == capacity){
                map.remove(end.key);
                map.put(key, create);
                remove(end);
                addHead(create);
            }
            else{
                addHead(create);
                map.put(key, create);
            }
        }
    }
    
    private void addHead(Node n){
        n.next = head;
        n.prev = null;
        if(head != null) head.prev = n;
        head = n;
        if(end == null) end = head; 
    }
    private void remove(Node n){
        if(n.prev != null) n.prev.next = n.next;
        else head = n.next;
        if(n.next != null) n.next.prev = n.prev;
        else end = n.prev;
    }
    
    class Node {
        int key;
        int val;
        Node next;
        Node prev;
        public Node(int key, int val){
            this.key = key;
            this.val = val;
        }
    }
    
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */