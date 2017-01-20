/*
Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var number = nums[0];
    var count = 1;
    for(var i = 1; i < nums.length; i++){
        if(nums[i] != number) count--;
        else count++;
        if(count === 0) {
            number = nums[i];
            count = 1;
        }
    }
    return number;
};