/*
According to the Wikipedia's article: 
"The Game of Life, also known simply as Life, 
is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, 
each cell has an initial state live (1) or dead (0). 
Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state.

Follow up: 
Could you solve it in-place? 
Remember that the board needs to be updated at the same time: 
You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. 
In principle, the board is infinite, 
which would cause problems when the active area encroaches the border of the array. 
How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var countLives = function(board, i, j) {
    var count = 0;
    for(var m = Math.max(0, i - 1); m <= Math.min(i + 1, board.length - 1); m++){
        for(var n = Math.max(0, j - 1); n <= Math.min(board[0].length - 1, j + 1); n++){
            if((board[m][n] & 1) == 1) count ++;
        }
    }
    if((board[i][j] & 1) == 1) count --;
    return count;
}
var gameOfLife = function(board) {
    // 00 -- dead <- dead 0
    // 01 -- dead <- life 1 (lives < 2 || lives > 3)
    // 11 -- live <- live 3 (lives = 3 || 2)
    // 10 -- live <- dead 2 (lives = 3)
    
    if(board.length < 1) return;
    for(var i = 0; i< board.length; i++){
        for(var j = 0; j < board[0].length; j++){
            var lives = countLives(board, i, j);
            //dead before
            if(board[i][j] === 0){
                if(lives == 3) board[i][j] = 2;
            }
            //live before
            else {
                if(lives === 3 || lives === 2) board[i][j] = 3;
            }
        }
    }
    for(var x = 0; x < board.length; x++){
        for(var y = 0; y < board[0].length; y++){
            board[x][y] = (board[x][y] >> 1);
        }
    }
};