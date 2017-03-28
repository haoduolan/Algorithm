/*
Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/

public class Solution {
    public int maxProduct(int[] nums) {
        if(nums.length == 0) return 0;
        int localMin = nums[0];
        int localMax = nums[0];
        int res = nums[0];
        for(int i = 1; i < nums.length; i++){
            int n = nums[i];
            int temp = localMin;
            localMin = Math.min(localMax * n, Math.min(localMin * n, n));
            localMax = Math.max(localMax * n, Math.max(temp * n,  n));
            res = Math.max(localMax, res);
        }
        return res;
    }
}