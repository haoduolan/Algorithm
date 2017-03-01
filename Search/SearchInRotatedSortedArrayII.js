/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Write a function to determine if a given target is in the array.

The array may contain duplicates.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if(nums.length === 0) return false;
    var lo = 0; var hi = nums.length - 1;
    while(lo <= hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        if(nums[mid] == target) return true;
        if(nums[mid] > nums[lo]){
            if(nums[lo] <= target && nums[mid] > target) hi = mid - 1;
            else lo = mid + 1;
        }
        else if(nums[mid] < nums[lo]) {
            if(nums[mid] < target && target <= nums[hi]) lo = mid + 1;
            else hi = mid - 1;
        }
        else lo++;
    }
    return false;
};
