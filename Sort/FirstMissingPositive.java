/*
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

public class Solution {
    public int firstMissingPositive(int[] nums) {
        for(int i = 0; i < nums.length; i++){
            int cur = nums[i];
            while(cur > 0 && cur <= nums.length && cur != nums[cur - 1]){
                int next = nums[cur - 1];
                nums[cur - 1] = cur;
                cur = next;
            }
        }
        for(int i = 0; i < nums.length; i++){
            if(nums[i] != i + 1) return i + 1;
        }
        return nums.length + 1;
    }
}