/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    if(needle.length > haystack.length) return -1;
    var hlen = haystack.length;
    var nlen = needle.length;
    for(var i = 0; i <= hlen - nlen; i++){
        for(var j = 0; j < nlen; j++){
            if(haystack.charAt(i + j) != needle.charAt(j)) break;
            if(j == nlen - 1) return i;
        }
    }
    return -1;
};