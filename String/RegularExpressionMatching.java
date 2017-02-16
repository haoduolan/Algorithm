/*
Implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "a*") → true
isMatch("aa", ".*") → true
isMatch("ab", ".*") → true
isMatch("aab", "c*a*b") → true
*/

public class Solution {
    public boolean isMatch(String s, String p) {
        //dp[i][j] means s[0...i - 1] matches p[0...j - 1];
        //1. p[i] == s[i] || p[j] == '.' ==> dp[i + 1][j + 1] = dp[i][j];
        //2. p[i] == * ==> 
        //  a) * repeat 0 time ==> d[i + 1][j + 1] = dp[i + 1]dp[j - 1];
        //  b) * repeat >= 1 times ==> dp[i + 1][j + 1] = (s[i] == p[j - 1] || p[j - 1] == '.') && dp[i][j + 1];
        
        //initialization:
        //dp[0][0] == true (empty matches empty);
        //all dp[i][0](i != 0) is false, because empty p does not match any non empty s;
        //for dp[0][j](j != 0), (x*x*x* only this patten can match empty s);
        //  p[j] == * ==> dp[0][j + 1] = dp[0][j - 1]; 
        //  p[j] != * ==> dp[0][j + 1] = false;
        
        int n = s.length();
        int m = p.length();
        boolean[][] dp = new boolean[n + 1][m + 1];
        dp[0][0] = true;
        for(int j = 0; j < m; j++){
            if(p.charAt(j) == '*' && j > 0) dp[0][j + 1] = dp[0][j - 1];
        }
        for(int i = 0; i < n; i++){
            for(int j = 0; j < m; j++){
                char cp = p.charAt(j);
                char cs = s.charAt(i);
                if(cp != '*') dp[i + 1][j + 1] = dp[i][j] && (cs == cp || cp == '.');
                else {
                    dp[i + 1][j + 1] = (dp[i + 1][j - 1] || ((cs == p.charAt(j - 1) || p.charAt(j - 1) == '.') && dp[i][j + 1]));
                }
            }
        }
        return dp[n][m];
    }
}