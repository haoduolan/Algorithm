/*
 Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, 
 with the first five elements of nums being 1, 1, 2, 2 and 3. 
 It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    var i = 2;
    for(var j = 2; j < nums.length; j++){
        if(nums[j] != nums[i - 2]){
            nums[i++] = nums[j];
        }
    }
    return i;
};