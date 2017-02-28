/*
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if(nums.length < 2) return 0;
    var minBucket = [];
    var maxBucket = [];
    var min = nums[0];
    var max = nums[0];
    var len = nums.length;
    for(var i = 0; i < len; i++){
        minBucket.push(Number.MAX_SAFE_INTEGER);
        maxBucket.push(Number.MIN_SAFE_INTEGER);
        min = Math.min(min, nums[i]);
        max = Math.max(max, nums[i]);
    }
    minBucket.push(Number.MAX_SAFE_INTEGER);
    maxBucket.push(Number.MIN_SAFE_INTEGER);
    var gap = Math.ceil((max - min) / (len + 1)) + 1;
    for(var j = 0; j < len; j++){
        var index = Math.floor((nums[j] - min) / gap);
        minBucket[index] = Math.min(nums[j], minBucket[index]);
        maxBucket[index] = Math.max(nums[j], maxBucket[index]);
        console.log(index + ' ' + minBucket[index] + " " + maxBucket[index])
    }
    var res = Number.MIN_SAFE_INTEGER;
    var prev = min;
    for(var k = 0; k <= len; k++){
        if(minBucket[k] == Number.MAX_SAFE_INTEGER && maxBucket[k] == Number.MIN_SAFE_INTEGER) continue;
        res = Math.max(minBucket[k] - prev, res);
        prev = maxBucket[k];
    }
    return res;
};