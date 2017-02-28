/*
Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.

Your algorithm should run in O(n) time and uses constant space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(var i = 0; i< nums.length; i++){
        var n = nums[i];
        while(n > 0 && n <= nums.length && nums[n - 1] != n){
            var temp = nums[n - 1];
            nums[n - 1] = n;
            n = temp;
        }
    }
    for(var j = 0; j < nums.length; j++){
        if(nums[j] != j + 1) return j + 1;
    }
    return nums.length + 1;
};