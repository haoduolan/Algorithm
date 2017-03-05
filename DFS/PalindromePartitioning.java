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

public class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<List<String>>();
        bfs(s, 0, new ArrayList<String>(), res);
        return res;
    }
    private void bfs(String s, int start, List<String> path, List<List<String>> res){
        if(start == s.length()){
            res.add(new ArrayList<String>(path));
            return;
        }
        for(int i = start; i < s.length(); i++){
            if(isPalindrome(s, start, i)) {
                path.add(s.substring(start, i + 1));
                bfs(s, i + 1, path, res);
                path.remove(path.size() - 1);
            }
        }
    }
    private boolean isPalindrome(String s, int i, int j){
        char[] c = s.toCharArray();
        if(c.length == 0) return false;
        while(i < j){
            if(c[i] != c[j]) return false;
            i++;
            j--;
        }
        return true;
    }
}