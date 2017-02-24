/*
Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
*/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = [];
    dp.push(1);
    dp.push(1);
    for(var i = 2; i <= n; i++){
        dp.push(0);
        for(var j = 0; j < i; j++){
            dp[dp.length - 1] += dp[j] * dp[i - 1 - j];
        }
    }
    return dp[n];
};