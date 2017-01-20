/*
Determine if a Sudoku is valid, according to: http://sudoku.com.au/TheRules.aspx.

The Sudoku board could be partially filled, 
where empty cells are filled with the character '.'.

Note:
A valid Sudoku board (partially filled) is not necessarily solvable. 
Only the filled cells need to be validated.
*/

public class Solution {
    public boolean isValidSudoku(char[][] board) {
        for(int i = 0; i < 9; i++){
            HashSet<Character> row = new HashSet<Character>();
            HashSet<Character> col = new HashSet<Character>();
            HashSet<Character> cub = new HashSet<Character>();
            for(int j = 0 ; j < 9; j++){
                if(board[i][j] != '.' && !row.add(board[i][j])) return false;
                if(board[j][i] != '.' && !col.add(board[j][i])) return false;
                int rowIndex = (i/3) * 3 + j / 3;
                int colIndex = (i%3) * 3 + j % 3;
                if(board[rowIndex][colIndex] != '.' && !cub.add(board[rowIndex][colIndex])) return false;
            }
        }
        return true;
    }
}