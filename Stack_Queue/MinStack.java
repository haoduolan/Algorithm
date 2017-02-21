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

public class MinStack {
    Stack<Integer> s;
    Stack<Integer> s_min;

    /** initialize your data structure here. */
    public MinStack() {
        s = new Stack<Integer>();
        s_min = new Stack<Integer>();
    }
    
    public void push(int x) {
        s.push(x);
        if(s_min.empty()) s_min.push(x);
        else{
            int a = s_min.peek();
            if(a > x) s_min.push(x);
            else s_min.push(a);
        }
    }
    
    public void pop() {
        s.pop();
        s_min.pop();
    }
    
    public int top() {
        return s.peek();
    }
    
    public int getMin() {
        return s_min.peek();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */