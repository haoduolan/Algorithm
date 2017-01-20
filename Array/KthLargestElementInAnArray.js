/*
Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
var swap = function(nums, i, j){
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
} 
var quickSelect = function(nums, lo, hi, k) {
    var i = lo;
    var j = hi;
    var cur = lo;
    while(i <= j){
        if(nums[i] > nums[cur]){
            swap(nums, i, j);
            j--;
        }
        else i++;
    }
    swap(nums, j, cur);
    cur = nums.length - j;
    if(cur == k) return j;
    else if (cur < k) return quickSelect(nums, lo, j - 1, k);
    else return quickSelect(nums, j + 1, hi, k);
}

var findKthLargest = function(nums, k) {
    var hi = nums.length - 1;
    return quickSelect(nums, 0, hi, k);
};