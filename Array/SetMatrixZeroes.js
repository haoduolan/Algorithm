/*
Given a m x n matrix, if an element is 0, 
set its entire row and column to 0. Do it in place.

Follow up:
Did you use extra space?
A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(matrix.length === 0) return;
    var col0 = false;
    for(var i = 0; i < matrix.length; i++){
        if(matrix[i][0] === 0) col0 = true;
        for(var j = 1; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    for(var m = matrix.length - 1; m >= 0; m--){
        for(var n = matrix[0].length - 1; n > 0; n--){
            if(matrix[m][0] === 0 || matrix[0][n] === 0) {
                matrix[m][n] = 0;
            }
        }
        if(col0) matrix[m][0] = 0;
    }
};