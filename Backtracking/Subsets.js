/*
Given a set of distinct integers, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,3], a solution is:

[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var bt = function(res, path, start, nums){
        res.push(path.slice());
        for(var i = start; i < nums.length; i++){
            path.push(nums[i]);
            bt(res, path, i + 1, nums);
            path.pop();
        }
        return res;
    }
    return bt([], [], 0, nums);
};