/*
Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var bt = function(nums, path, res){
        if(path.length == nums.length) {
            res.push(path.slice());
            return res;
        }
        for(var i = 0; i < nums.length; i++){
            if(path.includes(nums[i])) continue;
            path.push(nums[i]);
            bt(nums, path, res);
            path.pop();
        }
        return res;
    }
    return bt(nums, [], []);
};