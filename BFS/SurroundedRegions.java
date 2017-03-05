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

public class Solution {
    public void solve(char[][] board) {
        int n = board.length;
        if(n == 0) return;
        int m = board[0].length;
        Queue<Point> que = new LinkedList<Point>();
        for(int i = 0; i < m; i++){
            if(board[0][i] == 'O') que.add(new Point(0, i));
            if(board[n - 1][i] == 'O') que.add(new Point(n - 1, i));
        }
        for(int j = 0; j < n; j++){
            if(board[j][0] == 'O') que.add(new Point(j, 0));
            if(board[j][m - 1] == 'O') que.add(new Point(j, m - 1));
        }
        while(!que.isEmpty()){
            Point p = que.poll();
            int row = p.x;
        	int col = p.y;
        	board[row][col] = '*';
        	if (row - 1 >= 0 && board[row-1][col] == 'O') {board[row-1][col] = '+'; que.add(new Point(row-1, col));}
        	if (row + 1 < n && board[row+1][col] == 'O') {board[row+1][col] = '+'; que.add(new Point(row+1, col));}
        	if (col - 1 >= 0 && board[row][col - 1] == 'O') {board[row][col-1] = '+'; que.add(new Point(row, col-1));}
            if (col + 1 < m && board[row][col + 1] == 'O') {board[row][col+1] = '+'; que.add(new Point(row, col+1));} 
        }
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                if(board[i][j] == 'O') board[i][j] = 'X';
                if(board[i][j] == '*') board[i][j] = 'O';
            }
        }
    }
}