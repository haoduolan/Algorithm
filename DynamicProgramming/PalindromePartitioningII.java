/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*/

public class Solution {
    public int minCut(String s) {
        int len = s.length();
        if(len == 0) return 0;
        int[] dp = new int[len + 1];
        char[] arr = s.toCharArray();
        for(int i = 0; i <= len; i++) dp[i] = i - 1;
        for(int i = 0; i < len; i++){
            for(int j = 0; i - j >= 0 && i + j < len && arr[i - j] == arr[i + j]; j++){
                dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j] + 1);
            }
            for(int j = 0; i - j - 1 >= 0 && i + j < len && arr[i - j - 1] == arr[i + j]; j++){
                dp[i + j + 1] = Math.min(dp[i + j + 1], dp[i - j - 1] + 1) ;
            }
        }
        return dp[len];
    }
}