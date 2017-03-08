/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        if(s.length() < 2) return s.length();
        char[] c = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<>();
        int j = 0; 
        int i = 0;
        int max = 0;
        for(; i < c.length; i++){
            if(map.containsKey(c[i])){
                max = Math.max(i - j, max);
                j = Math.max(map.get(c[i]) + 1, j);
            }
            map.put(c[i], i);
        }
        max = Math.max(i - j, max);
        return max;
    }
}