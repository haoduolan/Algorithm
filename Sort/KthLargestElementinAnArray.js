/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var swap = function(n, i, j){
        var temp = n[i];
        n[i] = n[j];
        n[j] = temp;
    }
    var quickSelect = function(arr, lo, hi, k){
        var p = lo;
        var i = lo;
        var j = hi;
        while(p <= j){
            if(nums[p] <= nums[lo]) p++;
            else {
                swap(arr, p, j--);
            }
        }
        swap(arr, lo, j);
        if(arr.length - j == k) return j;
        if(arr.length - j > k) return quickSelect(arr, j + 1, hi, k);
        return quickSelect(arr, lo, j - 1, k);
    }
    return nums[quickSelect(nums, 0, nums.length - 1, k)];
};