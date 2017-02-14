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

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var max = 0;
    var start = 0;
    if(s.length < 2) return s;
    var palindrome = function(s, i, j){
        while(i >= 0 && j <= s.length){
            if(s.charAt(i) !== s.charAt(j)) break;
            i--;
            j++;
        }
        if(j - i - 1 > max){
            start = i + 1;
            max = j - i - 1;
        }
    }
    for(var i = 0 ; i < s.length - 1; i++){
        palindrome(s, i, i);
        palindrome(s, i, i + 1);
    }
    return s.substring(start, max + start);
};