/*
Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
*/

public class Solution {
    public boolean isAnagram(String s, String t) {
        if(s.length() != t.length()) return false;
        int len = s.length();
        int setlen = 26;
        int[] set = new int[setlen];
        char[] ss = s.toCharArray();
        char[] tt = t.toCharArray();
        for(int i = 0; i < len; i++){
            set[ss[i] - 'a']++;
            set[tt[i] - 'a']--;
        }
        for(int i = 0; i < setlen; i++){
            if(set[i] != 0) return false;
        }
        return true;
    }
}