/*
Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx.

The Sudoku board could be partially filled, 
where empty cells are filled with the character '.'.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. 
Only the filled cells need to be validated.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(var i = 0; i < 9; i++){
        var row = {};
        var col = {};
        var cub = {};
        for(var j = 0; j < 9; j++){
            if(board[i][j] != "." && row[board[i][j]] !== undefined) return false;
            row[board[i][j]] = board[i][j];
            if(board[j][i] != "." && col[board[j][i]] !== undefined) return false;
            col[board[j][i]] = board[j][i];
            var rIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            var cIndex = i % 3 * 3 + j % 3;
            var cubVal = board[rIndex][cIndex];
            if(cubVal != '.' && cub[cubVal] !== undefined) return false;
            cub[cubVal] = cubVal;
         }
    }
    return true;
};