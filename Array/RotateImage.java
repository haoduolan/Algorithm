/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

public class Solution {
    public void rotate(int[][] matrix) {
        if(matrix.length == 0) return;
        int len = matrix.length;
        for(int i = 0; i < len; i++){
            for(int j = i + 1; j < len; j++){
                swap(matrix, i, j, j, i);
            }
        }
        for(int i = 0; i < len; i++){
            for(int j = 0; j < len / 2; j++){
                swap(matrix, i, j, i, len - 1 - j);
            }
        }
    }
    private void swap(int[][] matrix,int i, int j, int m, int n){
        int temp = matrix[i][j];
        matrix[i][j] = matrix[m][n];
        matrix[m][n] = temp;
    }
}