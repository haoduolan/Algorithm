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

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
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
    var n = s.length; 
    var m = p.length;
    var dp =[];
    for(var x = 0; x < n + 1; x++) dp[x] = [];
    for(var k = 0; k < n + 1; k++){
        for(var l = 0; l < m + 1; l++) dp[k][l] = false;
    }
    dp[0][0] = true;
    for(var y = 0 ; y < m; y++) dp[0][y + 1] = (y > 0 && p.charAt(y) == '*' && dp[0][y - 1]);
    
    for(var i = 0; i < n; i++){
        for(var j = 0; j < m; j++){
            if(p.charAt(j) != '*') dp[i + 1][j + 1] = dp[i][j] && (p.charAt(j) == s.charAt(i) || p.charAt(j) == '.');
            else {
                dp[i + 1][j + 1] = dp[i + 1][j - 1] || (s.charAt(i) == p.charAt(j - 1) || p.charAt(j - 1) == '.') && dp[i][j + 1];
            }
        }
    }
    return dp[n][m];
};