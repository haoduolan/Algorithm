/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

public class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> res = new ArrayList<String>();
        if(n <= 0) return res;
        dfs(n, 0, 0, new StringBuilder(), res);
        return res;
    }
    private void dfs(int n, int left, int right, StringBuilder sb, List<String> res){
        if(left == n && right == n) {
            res.add(sb.toString());
            return;
        }
        if(left < n){
            sb.append('(');
            dfs(n, left + 1, right, sb, res);
            sb.deleteCharAt(sb.length() - 1);
        }
        if(left > right){
            sb.append(')');
            dfs(n, left, right + 1, sb, res);
            sb.deleteCharAt(sb.length() - 1);
        }
    }
}