/*
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var dp = [];
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var row = false;
    var col = false;
    if(n <= 0 || m <= 0) return 0;
    for(var i = 0; i < n; i++){
        dp.push([]);
        if(obstacleGrid[i][0] === 0 && !row) dp[i][0] = 1;
        else {
            row = true;
            dp[i][0] = 0;
        }
    }
    for(var j = 0; j < m; j++){
        if(obstacleGrid[0][j] === 0 && !col) dp[0][j] = 1;
        else {
            col = true;
            dp[0][j] = 0;
        }
    }
    for(var l = 1; l < n; l++){
        for(var k = 1; k < m; k++){
            if(obstacleGrid[l][k] == 1) dp[l][k] = 0;
            else dp[l][k] = dp[l - 1][k] + dp[l][k - 1];
        }
    }
    return dp[n - 1][m - 1];
};