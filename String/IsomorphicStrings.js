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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    var map1 = {};
    var map2 = {};
    for(var i = 0; i < s.length; i++){
        var ss = s.charAt(i);
        var tt = t.charAt(i);
        if(map1[ss] !== undefined && map1[ss] != tt) return false;
        if(map2[tt] !== undefined && map2[tt] != ss) return false;
        map1[ss] = tt;
        map2[tt] = ss;
    }
    return true;
};