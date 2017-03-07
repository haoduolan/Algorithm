/*
Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

Note:
All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
For example, given candidate set [2, 3, 6, 7] and target 7, 
A solution set is: 
[
  [7],
  [2, 2, 3]
]
*/
public class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
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
            int num = candidates[i];
            if(sum + num > target) return;
            list.add(num);
            dfs(res, list, target, sum + num, candidates, i);
            list.remove(list.size() - 1);
        }
    }
}