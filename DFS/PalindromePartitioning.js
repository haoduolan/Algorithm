/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var res = [];
    var path = [];
    var isP = function(str, i, j){
        while(i < j) {
            if(str.charAt(i) != str.charAt(j)) return false;
            i++;
            j--;
        }
        return true;
    }
    var bfs = function(start){
        if(start == s.length){
            res.push(path.slice());
        }
        for(var i = start; i < s.length; i++){
            if(isP(s, start, i)){
                path.push(s.substring(start, i + 1));
                bfs(i + 1);
                path.pop();
            }
        }
    }
    bfs(0);
    return res;
};