/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

For "(()", the longest valid parentheses substring is "()", which has length = 2.

Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.
*/

// Solution 1: DP

public class Solution {
    public int longestValidParentheses(String s) {
        int res = 0;
        int len = s.length();
        char[] arr = s.toCharArray();
        int[] dp = new int[len + 2];
        for(int i = 1; i < len; i++){
            if(arr[i] == ')') {
                int index = i - 1 - dp[i + 1];
                if(index >= 0 && arr[index] == '(') {
                    dp[i + 2] = dp[i + 1] + 2 + dp[index + 1];
                    res = Math.max(res, dp[i + 2]);
                }
            }
        }
        return res;
    }
}

// Solution 2: Stack

public class Solution {
    public int longestValidParentheses(String s) {
    	if (!s.contains("(") || !s.contains(")")) {
            return 0;
        }
        int longest = 0;
        Stack<Integer> stack = new Stack<>();
        int left = -1;
        char[] arr = s.toCharArray();
        for(int i = 0; i < arr.length; i++){
            if(arr[i] == '(') stack.push(i);
            else {
                if(stack.empty()) left = i;
                else {
                    stack.pop();
                    if(stack.empty()) longest = Math.max(longest, i - left);
                    else longest = Math.max(longest, i - stack.peek());
                }
            }
        }
        return longest;
    }
}