/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

The brackets must close in the correct order, 
"()" and "()[]{}" are all valid but "(]" and "([)]" are not.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    var stack = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] == '(') stack.push(')');
        else if(s[i] == '[') stack.push(']');
        else if(s[i] == '{') stack.push('}');
        else if(stack.length === 0 || s[i] != stack.pop()) return false;
    }
    return (stack.length === 0);
};