/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.
*/

public class Solution {
    public int findMin(int[] nums) {
        int lo = 0;
        int hi = nums.length - 1;
        while(lo < hi){
            int mid = (hi - lo) / 2 + lo;
            if(nums[mid] < nums[hi]) hi = mid;
            else if(nums[mid] > nums[hi]) lo = mid + 1;
            else hi--;
        }
        return nums[lo];
    }
}