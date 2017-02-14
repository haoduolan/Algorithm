/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

Follow up:
Could you do both operations in O(1) time complexity?
*/
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.Node = function(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    this.map = {};
    this.capacity = capacity;
    this.head = null;
    this.end = null;
    this.addHead = function(n){
        n.prev = null;
        n.next = this.head;
        if(this.head !== null) this.head.prev = n;
        this.head = n;
        if(this.end === null) this.end = n;
    }
    this.remove = function(n){
        if(n.prev !== null) n.prev.next = n.next;
        else this.head = n.next;
        if(n.next !== null) n.next.prev = n.prev;
        else this.end = n.prev;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!(key in this.map)) return -1;
    var n = this.map[key];
    this.remove(n);
    this.addHead(n);
    return n.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(key in this.map){
        var oldNode = this.map[key];
        this.remove(oldNode);
        oldNode.val = value;
        this.addHead(oldNode);
    }
    else{
        var newNode = new this.Node(key, value);
        if(Object.keys(this.map).length == this.capacity){
            delete this.map[this.end.key];
            this.remove(this.end);
            this.map[key] = newNode;
            this.addHead(newNode);
        }
        else{
            this.addHead(newNode);
            this.map[key] = newNode;
        }
    }
    
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */