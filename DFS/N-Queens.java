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

public class Solution {
    public List<List<String>> solveNQueens(int n) {
        if(n <= 0) return new ArrayList<List<String>>();
        boolean[] col = new boolean[n];
        boolean[] diag = new boolean[2 * n - 1];
        boolean[] antiDiag = new boolean[2 * n - 1];
        char[] initial = new char[n];
        Arrays.fill(initial, '.');
        List<char[]> path = new ArrayList<char[]>(n);
        for(int i = 0; i< n; i++) path.add(initial.clone());
        List<List<String>> res = new ArrayList<List<String>>();
        dfs(res, path, 0, n, col, diag, antiDiag);
        return res;
    }
    private void dfs(List<List<String>> res, List<char[]> path, int row, int n, boolean[] col, boolean[] diag, boolean[] antiDiag){
        if(row == n){
            List<String> temp = new ArrayList<String>();
            for(int i = 0; i < n; i++){
                temp.add(String.valueOf(path.get(i)));
            }
            res.add(temp);
        }
        for(int i = 0; i < n; i++){
            if(col[i] || diag[row + i] || antiDiag[n - 1 - row + i]) continue;
            col[i] = true;
            diag[row + i] = true;
            antiDiag[n - 1 - row + i] = true;
            path.get(row)[i] = 'Q';
            dfs(res, path, row + 1, n, col, diag, antiDiag);
            col[i] = false;
            diag[row + i] = false;
            antiDiag[n - 1 - row + i] = false;
            path.get(row)[i] = '.';
        }
    }
}