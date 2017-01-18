/* 
 Given an array S of n integers, 
 find three integers in S such that the sum is closest to a given number, target. 
 Return the sum of the three integers. 
 You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

 public class Solution {
    public int threeSumClosest(int[] nums, int target) {
        int res = 0;
        if(nums.length < 3) return res;
        Arrays.sort(nums);
        int gap = Integer.MAX_VALUE;
        for(int i = 0; i < nums.length - 2; i++){
            int j = i + 1;
            int k = nums.length - 1;
            while(j < k){
                int sum = nums[i] + nums[j] + nums[k];
                int curgap = Math.abs(sum - target);
                if(curgap < gap){
                    gap = curgap;
                    res = sum;
                }
                if(sum < target) j++;
                else k--;
            }
        }
        return res;
    }
}