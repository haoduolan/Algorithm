/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

//iterative
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        list.add(new ArrayList<Integer>());
        for(int num : nums){
            int n = list.size();
            for(int i = 0; i < n; i++){
                list.add(new ArrayList<>(list.get(i)));
            }
            for(int i = n; i < list.size(); i++){
                list.get(i).add(num);
            }
        }
        return list;
    }
}
//recursive
public class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        Arrays.sort(nums);
        return bt(new ArrayList<List<Integer>>(), new ArrayList<Integer>(), nums, 0);
    }
    private List<List<Integer>> bt(List<List<Integer>> list, List<Integer> path, int[] nums, int start){
        list.add(new ArrayList<Integer>(path));
        for(int i = start; i < nums.length; i++){
            path.add(nums[i]);
            bt(list, path, nums, i + 1);
            path.remove(path.size() - 1);
        }
        return list;
    }
}