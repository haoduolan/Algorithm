/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. 
If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). 
You are responsible to gather all the input requirements up front.
*/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var res = "";
    if(str === "") return 0;
    var i = 0;
    while(str.charAt(i) == " ") i++;
    var neg = 1;
    if(str.charAt(i) == '-'){neg = -1; i++;}
    else if(str.charAt(i) == "+") i++;
    for(; i < str.length; i++){
        var c = str.charAt(i);
        if(c < '0' || c > '9') return res * neg;
        res += c;
        if(res.length > 10) break;
    }
    if(res * neg > 2147483647) {
        return 2147483647;
    }
    if(res * neg < -2147483648) {
        return -2147483648;
    }
    if(res === "") return 0;
    return parseInt(res) * neg;
};