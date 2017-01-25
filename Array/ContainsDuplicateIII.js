/*
Given an array of integers, find out whether there are two distinct indices i and j 
in the array such that the absolute difference between nums[i] and nums[j] is at most t 
and the absolute difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k <= 0 || t < 0) return false;
    var map = {};
    var getIndex = function(i, w){
        if(i < 0) return Math.floor((i - 1)/w - 1);
        return Math.floor(i / w);
    }
    var w = t + 1;
    for(var i = 0; i < nums.length; i++){
        var index = getIndex(nums[i], w);
        if(map[index] !== undefined) return true;
        else if (map[index - 1] !== undefined && Math.abs(map[index - 1] - nums[i]) <= t) return true;
        else if (map[index + 1] !== undefined && Math.abs(map[index + 1] - nums[i]) <= t) return true;
        map[index] = nums[i];
        if(i >= k) delete map[getIndex(nums[i - k], w)];
    }
    return false;
};