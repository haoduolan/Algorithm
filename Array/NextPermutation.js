/*
Implement next permutation, 
which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, 
it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. 
Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var swap = function(nums, i, j){
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    var reverse = function(nums, i){
        var j = nums.length - 1;
        while(i < j){
            swap(nums, i++, j--)
        }
    }
    if(nums.length < 2) return;
    var partition = nums.length - 2;
    var exchange = nums.length - 1;
    while(partition >= 0 && nums[partition] >= nums[partition + 1]) partition--;
    if(partition < 0){
        reverse(nums, 0);
        return;
    }
    while(nums[exchange] <= nums[partition]) exchange--;
    swap(nums, partition, exchange);
    reverse(nums, partition + 1);
    return;
    
};
