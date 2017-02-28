/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.
*/

public class Solution {
    public void sortColors(int[] nums) {
        int lo = 0;
        int hi = nums.length - 1;
        int p = lo;
        while(p <= hi){
            if(nums[p] == 0) swap(nums, lo++, p++);
            else if(nums[p] == 2) swap(nums, p, hi--);
            else p++;
        }
    }
    private void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}