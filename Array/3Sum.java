/*
 Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
 Find all unique triplets in the array which gives the sum of zero.

 Note: The solution set must not contain duplicate triplets.

 For example, given array S = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
   [-1, 0, 1],
   [-1, -1, 2]
 ]
*/

 public class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(nums.length < 3) return res;
        Arrays.sort(nums);
        for(int i = 0 ; i < nums.length - 2; i++){
            if(i != 0 && nums[i] == nums[i - 1]) continue;
            int j = i + 1;
            int k = nums.length - 1;
            while(j < k){
                int sum = nums[i] + nums[j] + nums[k];
                if(sum < 0) {
                    j++;
                    while(j < k && nums[j] == nums[j - 1]) j++;
                }
                else if(sum > 0) {
                    k--;
                    while(j < k && nums[k] == nums[k + 1]) k--;
                }
                else {
                    List<Integer> list = new ArrayList<Integer>(Arrays.asList(nums[i], nums[j], nums[k]));
                    res.add(list);
                    j++;
                    k--;
                    while(j < k && nums[j] == nums[j - 1]) j++;
                    while(j < k && nums[k] == nums[k + 1]) k--;
                }
            }
        }
        return res;
    }
}