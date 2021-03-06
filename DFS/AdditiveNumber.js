/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/

/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
    if(num.length <= 2) return false;
    var isP = function(num, i, j, k){
        var n1 = parseInt(num.substring(i, j));
        var n2 = parseInt(num.substring(j, k));
        var n = (n1 + n2).toString();
        if(!num.startsWith(n, k)) {
            return false;
        }
        if(k + n.length == num.length) return true;
        return isP(num, j, k, k + n.length);
    }
    for(var i = 1; i < num.length / 2; i++){
        if(i > 1 && num.charAt(0) == '0') continue;
        for(var j = i + 1; j < num.length; j++){
            if(j > i + 1 && num.charAt(i) == '0') continue;
            if(isP(num, 0, i, j)) return true;
        }
    }
    return false;
};