/*
 Given a sorted array, remove the duplicates in place 
 such that each element appear only once and return the new length.
 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example,
 Given input array nums = [1,1,2],

 Your function should return length = 2, 
 with the first two elements of nums being 1 and 2 respectively. 
 It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 2) return nums.length;
    var i = 1;
    for(var j = 1; j < nums.length; j++){
        if(nums[j] != nums[i - 1]){
            nums[i++] = nums[j];
        }
    }
    return i;
};