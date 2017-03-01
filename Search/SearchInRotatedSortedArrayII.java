/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.

*/
public class Solution {
    public boolean search(int[] nums, int target) {
        int i = 0;
        int j = nums.length - 1;
        while(i <= j){
            int mid = (j - i) / 2 + i;
            if(nums[mid] == target) return true;
            if(nums[mid] > nums[i]){
                if(nums[i] <= target && nums[mid] > target) j = mid - 1;
                else i = mid + 1;
            }
            else if(nums[mid] < nums[i]) {
                if(nums[mid] < target && nums[j] >= target) i = mid + 1;
                else j = mid - 1;
            }
            else i++;
        }
        return false;
    }
}