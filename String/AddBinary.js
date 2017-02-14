/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var i = a.length - 1;
    var j = b.length - 1;
    var carry = 0;
    var res = "";
    while(i >= 0 || j >= 0 || carry > 0){
        var n1 = 0;
        var n2 = 0;
        if(i >= 0) n1 = parseInt(a.charAt(i));
        if(j >= 0) n2 = parseInt(b.charAt(j));
        var cur = n1 + n2 + carry;
        res = cur % 2 + res;
        carry = Math.floor(cur / 2);
        i--;
        j--;
    }
    return res;
};
