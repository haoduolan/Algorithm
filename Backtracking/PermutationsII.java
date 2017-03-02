/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

public class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        return bt(nums, new boolean[nums.length], new ArrayList<List<Integer>>(), new ArrayList<Integer>());
    }
    private List<List<Integer>> bt(int[] nums, boolean[] used, List<List<Integer>> res, List<Integer> path){
        if(path.size() == nums.length){
            res.add(new ArrayList<>(path));
            return res;
        }
        for(int i = 0; i < nums.length; i++){
            if(used[i]) continue;
            if(i != 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;
            path.add(nums[i]);
            used[i] = true;
            bt(nums, used, res, path);
            path.remove(path.size() - 1);
            used[i] = false;
        }
        return res;
    }
}