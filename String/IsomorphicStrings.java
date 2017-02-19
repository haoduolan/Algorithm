/*
Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character but a character may map to itself.

For example,
Given "egg", "add", return true.

Given "foo", "bar", return false.

Given "paper", "title", return true.

Note:
You may assume both s and t have the same length.
*/

public class Solution {
    public boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length()) return false;
        HashMap<Character, Character> map1 = new HashMap<>();
        HashMap<Character, Character> map2 = new HashMap<>();
        for(int i = 0; i < s.length(); i++){
            char ss = s.charAt(i);
            char tt = t.charAt(i);
            if(map1.containsKey(ss) && map1.get(ss) != tt) return false;
            if(map2.containsKey(tt) && map2.get(tt) != ss) return false;
            map1.put(ss, tt);
            map2.put(tt, ss);
        }
        return true;
    }
}