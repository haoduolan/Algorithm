/*
Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Example 1:
Input: k = 3, n = 7
Output:
[[1,2,4]]

Example 2:
Input: k = 3, n = 9
Output:
[[1,2,6], [1,3,5], [2,3,4]]
*/

public class Solution {
    public List<List<Integer>> combinationSum3(int k, int n) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(k <= 0 || n <= 0) return res;
        dfs(k, n, 1, res, new ArrayList<Integer>(), 0, 0);
        return res;
    }
    private void dfs(int k, int n, int num, List<List<Integer>> res, List<Integer> list, int sum, int count) {
        if(sum == n && k == count){
            res.add(new ArrayList<Integer>(list));
            return;
        }
        for(int i = num; i <= 9; i++){
            if((sum + i) > n || count == k) return;
            list.add(i);
            dfs(k, n, i + 1, res, list, sum + i, count + 1);
            list.remove(list.size() - 1);
        }
    }
}