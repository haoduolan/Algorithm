/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length === 0) return 0;
    var dp = [];
    dp.push(0);
    dp.push(0);
    dp.push(0);
    var longest = 0;
    for(var i = 1; i < s.length; i++){
        if(s.charAt(i) == ')') {
            var index = i - dp[i + 1] - 1;
            if(index >= 0 && s[index] == '(') {
                var cur = dp[index + 1] + 2 + dp[i + 1];
                dp.push(cur);
                longest = Math.max(cur, longest);
            }
            else dp.push(0);
        }
        else dp.push(0);
    }
    return longest;
};