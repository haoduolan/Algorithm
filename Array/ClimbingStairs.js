/* 
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    var s1 = 1;
    var s2 = 2;
    var res = 0;
    for(var i = 3; i <= n; i++){
        res = (s1 + s2);
        s1 = s2;
        s2 = res;
    }
    return res;
};