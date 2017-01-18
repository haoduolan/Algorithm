/* 
 Given an array S of n integers, 
 find three integers in S such that the sum is closest to a given number, target. 
 Return the sum of the three integers. 
 You may assume that each input would have exactly one solution.

 For example, given array S = {-1 2 1 -4}, and target = 1.

 The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if(nums.length < 3) return null;
    nums.sort(function(a, b){
        if(Number(a) < Number(b)) return -1;
        if(Number(a) > Number(b)) return 1;
        else return 0;
    })
    var gap = Number.MAX_SAFE_INTEGER;
    var res = 0;
    for(var i = 0; i < nums.length - 2; i++){
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(sum - target) < gap){
                gap = Math.abs(sum - target);
                res = sum;
            }
            if(sum < target) j++;
            else k--;
        }
    }
    return res;
};