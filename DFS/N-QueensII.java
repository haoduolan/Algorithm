/*
Follow up for N-Queens problem.

Now, instead outputting board configurations, return the total number of distinct solutions.
*/

public class Solution {
    private int res;
    public int totalNQueens(int n) {
        if(n <= 0) return 0;
        boolean[] col = new boolean[n];
        boolean[] diag = new boolean[2 * n - 1];
        boolean[] antiDiag = new boolean[2 * n - 1];
        res = 0;
        dfs(col, diag, antiDiag, 0, n);
        return res;
    }
    private void dfs(boolean[] col, boolean[] diag, boolean[] antiDiag, int row, int n){
        if(row == n){
            res++;
            return;
        }
        for(int j = 0; j < n; j++){
            if(col[j] || diag[row + j] || antiDiag[n - 1 - row + j]) continue;
            col[j] = true;
            diag[row + j] = true;
            antiDiag[n - 1 - row + j] = true;
            dfs(col, diag, antiDiag, row + 1, n);
            col[j] = false;
            diag[row + j] = false;
            antiDiag[n - 1 - row + j] = false;
        }
    }
}