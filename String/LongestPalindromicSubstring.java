/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
*/

public class Solution {
    private int lo, maxLen;
    public String longestPalindrome(String s) {
        lo = 0;
        maxLen = 0;
        if(s.length() < 2) return s;
        for(int i = 0; i < s.length() - 1; i++){
            palindrome(s, i, i);
            palindrome(s, i, i + 1);
        }
        return s.substring(lo, lo + maxLen);
    }
    private void palindrome(String s, int i , int j){
        while(i >= 0 && j < s.length()){
            if(s.charAt(i) != s.charAt(j)) break;
            i--;
            j++;
        }
        if(maxLen < (j - i - 1)){
            maxLen = j - i - 1;
            lo = i + 1;
        }
    }
}