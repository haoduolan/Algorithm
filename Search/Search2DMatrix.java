/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
For example,

Consider the following matrix:

[
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
Given target = 3, return true.
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length === 0) return false;
    var n = matrix.length;
    var m = matrix[0].length;
    var lo = 1; var hi = m * n;
    while(lo <= hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        var row = Math.floor((mid - 1) / m);
        var col = (mid - 1) % m;
        if(matrix[row][col] == target) return true;
        if(matrix[row][col] > target) hi = mid - 1;
        else lo = mid + 1;
    }
    return false;
};