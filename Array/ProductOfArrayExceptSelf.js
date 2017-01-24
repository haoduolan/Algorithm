/*
Given an array of n integers where n > 1, nums, 
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity?
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(nums.length === 0) return nums;
    var res = [];
    res[0] = 1;
    for(var i = 1; i < nums.length; i++){
        res[i] = res[i - 1] * nums[i - 1];
    }
    var right = 1;
    for(var j = nums.length - 1; j >= 0; j--){
        res[j] *= right;
        right *= nums[j];
    }
    return res;
};