/*
Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)

You have the following 3 operations permitted on a word:

a) Insert a character
b) Delete a character
c) Replace a character
*/

public class Solution {
    public int minDistance(String word1, String word2) {
        int l1 = word1.length();
        int l2 = word2.length();
        char[] w1 = word1.toCharArray();
        char[] w2 = word2.toCharArray();
        int[][] dp = new int[l1 + 1][l2 + 1];
        for(int i = 0; i <= l1; i++) dp[i][0] = i;
        for(int i = 0; i <= l2; i++) dp[0][i] = i;
        for(int i = 0; i < l1; i++){
            for(int j = 0; j < l2; j++){
                if(w1[i] == w2[j]) dp[i + 1][j + 1] = dp[i][j];
                else {
                    dp[i + 1][j + 1] = Math.min(dp[i][j], Math.min(dp[i][j + 1], dp[i + 1][j])) + 1;
                }
            }
        }
        return dp[l1][l2];
    }
}