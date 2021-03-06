/*
 Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
 Find all unique triplets in the array which gives the sum of zero.

 Note: The solution set must not contain duplicate triplets.

 For example, given array S = [-1, 0, 1, 2, -1, -4],

 A solution set is:
 [
   [-1, 0, 1],
   [-1, -1, 2]
 ]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    if(nums.length < 3) return res;
    nums.sort(function (a, b) {
        if (Number(a) < Number(b)) return -1;
        if (Number(a) == Number(b)) return 0;
        if (Number(a) > Number(b)) return 1;
    });
    for(var i = 0; i < nums.length - 2; i++) {
        if(i !== 0 && nums[i] == nums[i - 1]) continue;
        var j = i + 1;
        var k = nums.length - 1;
        while(j < k){
            var sum = nums[i] + nums[j] + nums[k];
            if(sum === 0){
                var arr = [];
                arr.push(nums[i]);
                arr.push(nums[j++]);
                arr.push(nums[k--]);
                res.push(arr);
                while(j < k && nums[j] == nums[j - 1]) j++;
                while(j < k && nums[k] == nums[k + 1]) k--;
            }
            else if(sum < 0){
                j++;
                while(j < k && nums[j] == nums[j - 1]) j++;
            }
            else {
                k--;
                while(j < k && nums[k] == nums[k + 1]) k--;
            }
        }
    }
    return res;
};