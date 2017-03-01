/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.length === 0) return 0;
    var lo = 0; var hi = nums.length;
    while(lo < hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        if(nums[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};