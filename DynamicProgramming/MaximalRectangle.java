/*
Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

For example, given the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0
Return 6.
*/

public class Solution {
    public int maximalRectangle(char[][] matrix) {
        if(matrix.length == 0) return 0;
        int n = matrix.length;
        int m = matrix[0].length;
        int[] height = new int[m];
        int[] left = new int[m];
        int[] right = new int[m];
        Arrays.fill(right, m);
        int res = 0;
        for(int i = 0; i < n; i++){
            int curL = 0;
            int curR = m;
            for(int j = 0; j < m; j++) {
                if(matrix[i][j] == '1') height[j]++;
                else height[j] = 0;
            }
            for(int j =0; j < m; j++){
                if(matrix[i][j] == '1') left[j] = Math.max(left[j], curL);
                else {
                    left[j] = 0;
                    curL = j + 1;
                }
            }
            for(int j = m - 1; j >= 0; j--){
                if(matrix[i][j] == '1') right[j] = Math.min(curR, right[j]);
                else{
                    right[j] = m;
                    curR = j;
                }
            }
            for(int j = 0; j < m; j++){
                res = Math.max(height[j] * (right[j] - left[j]), res);
            }
        }
        return res;
    }
}