/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var prev = "1";
    for(i = 1; i < n; i++){
        var count = 1;
        var cur = "";
        var say = prev.charAt(0);
        for(var j = 1; j < prev.length; j++){
            if(prev.charAt(j) !== say){
                cur += count + say;
                say = prev.charAt(j);
                count = 1;
            }
            else count++;
        }
        cur += count + say;
        prev = cur;
    }
    return prev;
};