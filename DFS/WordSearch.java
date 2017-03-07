/*
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.
*/

public class Solution {
    public boolean exist(char[][] board, String word) {
        if(word.length() == 0) return false;
        char[] w = word.toCharArray();
        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board[0].length; j++){
                if(dfs(board, i, j, 0, w)) return true;
            }
        }
        return false;
    }
    private boolean dfs(char[][] board, int i, int j, int p, char[] w){
        if(p == w.length) return true;
        if(i < 0 || i == board.length || j < 0 || j == board[0].length) return false;
        if(board[i][j] != w[p]) return false;
        board[i][j] = '*';
        boolean res = dfs(board, i - 1, j, p + 1, w) ||
                      dfs(board, i + 1, j, p + 1, w) ||
                      dfs(board, i, j + 1, p + 1, w) ||
                      dfs(board, i, j - 1, p + 1, w);
        board[i][j] = w[p];
        return res;
    }
}