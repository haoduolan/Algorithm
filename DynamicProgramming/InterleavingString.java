/*
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.

For example,
Given:
s1 = "aabcc",
s2 = "dbbca",

When s3 = "aadbbcbcac", return true.
When s3 = "aadbbbaccc", return false.
*/

public class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if((s1.length() + s2.length()) != s3.length()) return false;
        boolean[] dp = new boolean[s2.length() + 1];
        dp[0] = true;
        char[] c1 = s1.toCharArray();
        char[] c2 = s2.toCharArray();
        char[] c3 = s3.toCharArray();
        for(int i = 0; i < s2.length(); i++) dp[i + 1] = (dp[i] && c2[i] == c3[i]);
        for(int i = 0; i < s1.length(); i++) {
            dp[0] = dp[0] && c1[i] == c3[i];
            for(int j = 0; j < s2.length(); j++){
                dp[j + 1] = (c1[i] == c3[i + j + 1] && dp[j + 1]) || (c2[j] == c3[i + j + 1] && dp[j]);
            }
        }
        return dp[s2.length()];
    }
}