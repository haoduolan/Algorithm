/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {};
    map['I'] = 1;
    map['V'] = 5;
    map['X'] = 10;
    map['L'] = 50;
    map['C'] = 100;
    map['D'] = 500;
    map['M'] = 1000;
    var res = 0;
    var pre = 0;
    for(var i = s.length - 1; i >= 0; i--){
        var cur = map[s.charAt(i)];
        if(cur >= pre) res += cur;
        else res -= cur;
        pre = cur;
    }
    return res;
};