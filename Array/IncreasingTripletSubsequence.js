/*
Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:
Return true if there exists i, j, k 
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Your algorithm should run in O(n) time complexity and O(1) space complexity.

Examples:
Given [1, 2, 3, 4, 5],
return true.

Given [5, 4, 3, 2, 1],
return false.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    var first = Number.MAX_VALUE;
    var second = Number.MAX_VALUE;
    for(var i = 0; i < nums.length; i++){
        var n =  nums[i];
        if(n <= first) first = n;
        else if(n <= second) second = n;
        else return true;
    }
    return false;
};