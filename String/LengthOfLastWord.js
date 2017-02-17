/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

For example, 
Given s = "Hello World",
return 5.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length === 0) return 0;
    var res;
    var last = s.length - 1;
    var first;
    for(; last >= 0; last--){
        if(s.charAt(last) != ' ') break;
    }
    if(last < 0) return 0;
    first = last - 1;
    for(; first >= 0; first--){
        if(s.charAt(first) == ' ') break;
    }
    return last - first;
};