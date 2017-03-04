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

public class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int n = obstacleGrid.length;
        int m = obstacleGrid[0].length;
        if(m <= 0 || n <= 0) return 0;
        int[][] dp = new int[n][m];
        boolean col = false;
        boolean row = false;
        for(int i = 0; i < n; i++) {
            if(!col && obstacleGrid[i][0] == 0) dp[i][0] = 1;
            else {
                dp[i][0] = 0;
                col = true;
            }
        }
        for(int i = 0; i < m; i++){
            if(!row && obstacleGrid[0][i] == 0) dp[0][i] = 1;
            else {
                dp[0][i] = 0;
                row = true;
            }
        }
        for(int i = 1; i < n; i++){
            for(int j = 1; j < m; j++){ 
                if(obstacleGrid[i][j] == 1) dp[i][j] = 0;
                else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[n - 1][m - 1];
    }
}