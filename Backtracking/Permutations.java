/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        return bt(nums, new ArrayList<List<Integer>>(), new ArrayList<Integer>());
    }
    private List<List<Integer>> bt(int[] nums, List<List<Integer>> res, List<Integer> list){
        if(list.size() == nums.length) {
            res.add(new ArrayList<Integer>(list));
            return res;
        }
        for(int i = 0; i < nums.length; i++){
            if(list.contains(nums[i])) continue;
            list.add(nums[i]);
            bt(nums, res, list);
            list.remove(list.size() - 1);
        }
        return res;
    }
}
//interative
public class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if (nums.length ==0) return res;
        res.add(new ArrayList<Integer>());
        res.get(0).add(nums[0]);
        for(int i = 1; i < nums.length; i++){
            List<List<Integer>> list = new ArrayList<List<Integer>>();
            int new_num = nums[i];
            for(int j = 0; j <= i; j++){
                for(int k = 0; k < res.size(); k++){
                    ArrayList<Integer> temp = new ArrayList<>(res.get(k));
                    temp.add(j, new_num);
                    list.add(temp);
                }
            }
            res = list;
        }
        return res;
    }
}