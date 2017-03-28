/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

For example,
Given [10, 9, 2, 5, 3, 7, 101, 18],
The longest increasing subsequence is [2, 3, 7, 101], therefore the length is 4. Note that there may be more than one LIS combination, it is only necessary for you to return the length.

Your algorithm should run in O(n2) complexity.

Follow up: Could you improve it to O(n log n) time complexity?
*/

public class Solution {
    public int lengthOfLIS(int[] nums) {
        if(nums.length == 0) return 0;
        int[] dp = new int[nums.length];
        int size = 0;
        for(int i = 0; i < nums.length; i++){
            int l = 0, r = size;
            while(l != r){
                int m = (r - l) / 2 + l;
                if(dp[m] < nums[i]) l = m + 1;
                else r = m;
            }
            dp[l] = nums[i];
            if(l == size) size++;
        }
        return size;
    }
}