/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

For example,
There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(n <= 0) return [];
    var col = [];
    var diag = [];
    var antiDiag = [];
    var str = '';
    var res = [];
    var board = [];
    for(var i = 0; i < n; i++) {
        col.push(false);
        str += '.';
    }
    for(var i = 0; i < 2 * n + 1; i++){
        diag.push(false);
        antiDiag.push(false);
    }
    for(var i = 0; i < n; i++) board.push(str.slice());
    var dfs = function(row){
        if(row == n){
            res.push(board.slice());
            return;
        }
        for(var j = 0; j < n; j++){
            if(col[j] || diag[row + j] || antiDiag[n - 1 - row + j]) continue;
            col[j] = true;
            diag[row + j] = true;
            antiDiag[n - 1 - row + j] = true;
            board[row] = board[row].substring(0, j) + 'Q' + board[row].substring(j + 1);
            dfs(row + 1);
            board[row] = board[row].substring(0, j) + '.' + board[row].substring(j + 1);
            col[j] = false;
            diag[row + j] = false;
            antiDiag[n - 1 - row + j] = false;
        }
    }
    dfs(0);
    return res;
};