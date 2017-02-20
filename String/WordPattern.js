/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space
*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var strArr = str.split(' ');
    if(strArr.length != pattern.length) return false;
    var map1 = {}
    var map2 = {};
    for(var i = 0; i < pattern.length; i++){
        if(map1[pattern[i]] === undefined){
            if(map2[strArr[i]] !== undefined) return false;
            map1[pattern[i]] = strArr[i];
            map2[strArr[i]] = strArr[i];
        }
        else {
            if(map1[pattern[i]] != strArr[i]) return false;
        }
    }
    return true;
};