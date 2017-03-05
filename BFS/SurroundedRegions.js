/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

For example,
X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
*/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if(board.length === 0) return;
    var que = [];
    var n = board.length;
    var m = board[0].length;
    for(var i = 0; i < n; i++){
        if(board[i][0] == 'O') que.push({x: i, y: 0});
        if(board[i][m - 1] == 'O') que.push({x:i, y: m - 1});
    }
    for(var j = 0; j < m; j++){
        if(board[0][j] == 'O') que.push({x: 0, y: j});
        if(board[n - 1][j] == 'O') que.push({x:n - 1, y: j});
    }
    while(que.length !== 0){
        var p = que.shift();
        board[p.x][p.y] = '*';
        if(p.x - 1 >= 0 && board[p.x - 1][p.y] == 'O') que.push({x: p.x - 1, y: p.y});
        if(p.x + 1 < n && board[p.x + 1][p.y] == 'O') que.push({x: p.x + 1, y: p.y});
        if(p.y - 1 >= 0 && board[p.x][p.y - 1] == 'O') que.push({x: p.x, y: p.y - 1});
        if(p.y + 1 < m && board[p.x][p.y + 1] == 'O') que.push({x: p.x, y: p.y + 1});
    }
    for(var l = 0; l < n; l++){
        for(var k = 0; k < m; k++){
            if(board[l][k] == 'O') board[l][k] = 'X';
            if(board[l][k] == '*') board[l][k] = 'O';
        }
    }
};