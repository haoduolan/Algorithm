/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
public class Solution {
    public List<List<Integer>> combine(int n, int k) {
        return bt(new ArrayList<List<Integer>>(), new ArrayList<Integer>(), k, 1, n);
    }
    private List<List<Integer>> bt(List<List<Integer>> res, List<Integer> path, int k, int start, int n){
        if(path.size() == k) {
            res.add(new ArrayList<>(path));
            return res;
        }
        for(int i = start; i <= n; i++){
            path.add(i);
            bt(res, path, k, i + 1, n);
            path.remove(path.size() - 1);
        }
        return res;
    }
}