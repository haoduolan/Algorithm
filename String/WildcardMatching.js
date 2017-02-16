/*
Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var ss = 0;
    var pp = 0;
    var startId = -1;
    var match = 0;
    var slen = s.length;
    var plen = p.length;
    while(ss < slen){
        //increasing both p and s;
        if(pp < plen && (s.charAt(ss) == p.charAt(pp) || p.charAt(pp) == '?')){
            pp++;
            ss++;
        }
        //mark startId and match point and increase p;
        else if(pp < plen && p.charAt(pp) == '*') {
            startId = pp;
            match = ss;
            pp++;
        }
        //last p was *, advancing s;
        else if(startId != -1){
            pp = startId + 1;
            match++;
            ss = match;
        }
        else return false;
    }
    while(pp < plen && p.charAt(pp) == '*') pp++;
    return pp == plen;
};