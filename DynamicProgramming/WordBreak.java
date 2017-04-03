/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.

For example, given
s = "leetcode",
dict = ["leet", "code"].

Return true because "leetcode" can be segmented as "leet code".
*/

public class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        if(s.length() == 0) return true;
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        for(int i = 0; i < s.length(); i++){
            for(int j = 0; j <= i; j++){
                if(dp[j] && (wordDict.indexOf(s.substring(j, i + 1)) != -1)){
                    dp[i + 1] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }
}