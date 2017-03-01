/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0) return -1;
    var lo = 0; var hi = nums.length - 1;
    while(lo <= hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        if(nums[mid] == target) return mid;
        if(nums[mid] >= nums[lo]){
            if(nums[lo] <= target && nums[mid] > target) hi = mid - 1;
            else lo = mid + 1;
        }
        else {
            if(nums[mid] < target && target <= nums[hi]) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    return -1;
};