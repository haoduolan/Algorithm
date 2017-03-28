/*
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

public class Solution {
    public int maxSubArray(int[] nums) {
        if(nums.length == 0) return 0;
        int cur = Integer.MIN_VALUE;
        int res = Integer.MIN_VALUE;
        for(int i = 0; i < nums.length; i++){
            if(cur >= 0){
                cur += nums[i];
            }
            else cur = nums[i];
            res = Math.max(res, cur);
        }
        return res;
    }
}
