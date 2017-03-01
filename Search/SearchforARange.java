/*
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//find left: 
//mid bias to left
//1.nums[mid] < target ==> begin point at right of mid ==> lo = mid + 1;
//2.nums[mid] >= target ==> begin point at left of mid or mid ==> hi = mid;
//find right
//mid bias to right
//1.nums[mid] > target ==> end point at left of mid ==> hi = mid - 1;
//2.nums[mid] <= target ==> end point at right of mid or mid ==> lo = mid;

var searchRange = function(nums, target) {
    var res = [-1, -1];
    if(nums.length === 0) return res;
    var lo = 0;
    var hi = nums.length - 1;
    while(lo < hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        if(nums[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    if(lo == nums.length || nums[lo] != target) return res;
    res[0] = lo;
    lo = 0; hi = nums.length - 1;
    while(lo < hi){
        var mid = Math.floor((hi - lo + 1) / 2) + lo;
        if(nums[mid] > target) hi = mid - 1;
        else lo =  mid;
    }
    res[1] = hi;
    return res;
};