/*
Rotate an array of n elements to the right by k steps.

For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

Note:
Try to come up as many solutions as you can, 
there are at least 3 different ways to solve this problem.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    k = k % len;
    var reverse = function(nums, i, j){
        while(i < j){
            var temp = nums[i];
            nums[i++] = nums[j];
            nums[j--] = temp;
        }
    }
    reverse(nums, 0, len - 1 - k);
    reverse(nums, len - k, len - 1);
    reverse(nums, 0, len - 1);
};