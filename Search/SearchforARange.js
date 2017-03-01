/*
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

//find left: 
//mid bias to left
//1.nums[mid] < target ==> begin point at right of mid ==> lo = mid + 1;
//2.nums[mid] >= target ==> begin point at left of mid or mid ==> hi = mid;
//find right
//mid bias to right
//1.nums[mid] > target ==> end point at left of mid ==> hi = mid - 1;
//2.nums[mid] <= target ==> end point at right of mid or mid ==> lo = mid;

public class Solution {
    public int[] searchRange(int[] nums, int target) {
        int[] res = new int[2];
        res[0] = -1;
        res[1] = -1;
        int lo = 0; int hi = nums.length - 1;
        while(lo < hi){
            int mid = (hi - lo) / 2 + lo;
            if(nums[mid] < target) lo = mid + 1;
            else hi = mid;
        }
        if(lo == nums.length || nums[lo] != target) return res;
        res[0] = lo;
        lo = 0; hi = nums.length - 1;
        while(lo < hi){
            int mid = (hi - lo + 1) / 2 + lo;
            if(nums[mid] <= target) lo = mid;
            else hi = mid - 1;
        }
        res[1] = hi;
        return res;
    }
}