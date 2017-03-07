/*
Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
A solution set is: 
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
*/

public class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(candidates.length == 0 && target == 0) return res;
        Arrays.sort(candidates);
        dfs(res, new ArrayList<Integer>(), target, 0, candidates, 0);
        return res;
    }
    private void dfs(List<List<Integer>> res, List<Integer> list, int target, int sum, int[] candidates, int start){
        if(sum == target){
            res.add(new ArrayList<Integer>(list));
            return;
        } 
        for(int i = start; i < candidates.length; i++){
            if(i > start && candidates[i] == candidates[i - 1]) continue;
            int num = candidates[i];
            if(sum + num > target) return;
            list.add(num);
            dfs(res, list, target, sum + num, candidates, i + 1);
            list.remove(list.size() - 1);
        }
    }
}