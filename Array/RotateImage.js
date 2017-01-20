/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var swap = function(matrix, i, j, m, n){
        var temp = matrix[i][j];
        matrix[i][j] = matrix[m][n];
        matrix[m][n] = temp;
    }
    var len = matrix.length;
    for(var i = 0; i < len; i++){
        for(var j = i + 1; j < len; j++){
            swap(matrix, i, j, j, i);
        }
    }
    for(var k = 0; k < len; k++){
        for(var l = 0; l < Math.floor(len / 2); l++){
            swap(matrix, k, l, k, len - 1 - l);
        }
    }
};