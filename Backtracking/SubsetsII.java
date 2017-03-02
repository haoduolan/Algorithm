/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

public class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        Arrays.sort(nums);
        return bt(nums, new ArrayList<List<Integer>>(), new ArrayList<Integer>(), 0);
    }
    private List<List<Integer>> bt(int[] nums, List<List<Integer>> list, List<Integer> path, int start){
        list.add(new ArrayList<Integer>(path));
        for(int i = start; i < nums.length; i++){
            if(i > start && nums[i] == nums[i - 1]) continue;
            path.add(nums[i]);
            bt(nums, list, path, i + 1);
            path.remove(path.size() - 1);
        }
        return list;
    }
}