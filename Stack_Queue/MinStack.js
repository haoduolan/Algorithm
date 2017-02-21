/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
   this.stack1 = [];
   this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack1.push(x);
    if(this.stack2.length === 0) this.stack2.push(x);
    else {
        var peek = this.stack2[this.stack2.length - 1];
        if(peek < x) this.stack2.push(peek);
        else this.stack2.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack1.pop();
    this.stack2.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack2[this.stack2.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */