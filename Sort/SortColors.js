/*
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function(num, i, j){
        var temp = num[i];
        num[i] = num[j];
        num[j] = temp;
    }
    if(nums.length <= 1) return;
    var lo = 0;
    var hi = nums.length - 1;
    var p = 0;
    while(p <= hi){
        if(nums[p] === 0) swap(nums, p++, lo++);
        else if(nums[p] === 2) swap(nums, p, hi--);
        else p++;
    }
};