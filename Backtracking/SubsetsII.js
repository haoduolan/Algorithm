/*
Given a collection of integers that might contain duplicates, nums, return all possible subsets.

Note: The solution set must not contain duplicate subsets.

For example,
If nums = [1,2,2], a solution is:

[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var bt = function(nums, path, start, res){
        res.push(path.slice());
        for(var i = start; i < nums.length; i++){
            if(i != start && nums[i - 1] == nums[i]) continue;
            path.push(nums[i]);
            bt(nums, path, i + 1, res);
            path.pop();
        }
        return res;
    }
    nums.sort();
    return bt(nums, [], 0, []);
};