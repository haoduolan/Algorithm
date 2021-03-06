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
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    var arr = new Array(26);
    for(var m = 0; m < 26; m++){
        arr[m] = 0;
    }
    for(var i = 0; i < s.length; i++){
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var j = 0; j < 26; j++){
        if(arr[j] !== 0) return false;
    }
    return true;
};