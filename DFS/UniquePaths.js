/*
A robot is located at the top-left corner of a m x n grid .

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m <= 0 || n <= 0) return 0;
    var dp = []
    for(var i = 0; i < m; i++) {
        dp.push([]);
        dp[i][0] = 1;
    }
    for(var j = 0 ; j < n; j++){
        dp[0][j] = 1;
    }
    for(var l = 1; l < m; l++){
        for(var k = 1; k < n; k++){
            dp[l][k] = dp[l - 1][k] + dp[l][k - 1];
        }
    }
    return dp[m - 1][n - 1];
};