/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";
    for(var i = 0 ; i < strs[0].length; i++){
        for(var j = 0; j < strs.length; j++){
            if(i == strs[j].length || strs[0].charAt(i) !== strs[j].charAt(i)) 
            return strs[0].substring(0, i);
        }
    }
    return strs[0];
};