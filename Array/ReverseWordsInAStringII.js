/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?
*/

/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    var reverse = function(str, i, j){
        while(i < j){
            var temp = str[i];
            str[i++] = str[j];
            str[j--] = temp;
        }
    }
    var end = 0;
    while(end < str.length){
        var start = end;
        while(end < str.length && str[end] != ' ') end++;
        reverse(str, start, end - 1);
        end++;
    }
    reverse(str, 0, str.length - 1);
};
