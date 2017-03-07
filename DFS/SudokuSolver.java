/*
Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.
Example:
input:
["..9748...","7........",".2.1.9...","..7...24.",".64.1.59.",".98...3..","...8.3.2.","........6","...2759.."]
output:
["519748632","783652419","426139875","357986241","264317598","198524367","975863124","832491756","641275983"]
*/

public class Solution {
    public void solveSudoku(char[][] board) {
        if(board.length == 0) return;
        solved(board);
    }
    private boolean solved(char[][] board){
        for(int i = 0; i < 9; i++){
            for(int j = 0; j < 9; j++){
                if(board[i][j] != '.') continue;
                for(char c = '1'; c <= '9'; c++){
                    if(!isValid(board, i, j, c)) continue;
                    board[i][j] = c;
                    if(solved(board)) return true;
                    board[i][j] = '.';
                }
                return false;
            }
        }
        return true;
    }
    private boolean isValid(char[][] board, int row, int col, char c){
        for(int i = 0; i < 9; i++){
            if(board[row][i] == c) return false;
            if(board[i][col] == c) return false;
            if(board[(row/3) * 3 + i/3 ][(col/3) * 3 + i%3] == c) return false;
        }
        return true;
    }
}