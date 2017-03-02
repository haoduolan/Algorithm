/*
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort();
    var used = new Array(nums.length).fill(false);
    var bt = function(nums, res, path, used){
        if(path.length == nums.length){
            res.push(path.slice());
            return res;
        }
        for(var i = 0; i < nums.length; i++){
            if(used[i] || (i !== 0 && nums[i] == nums[i - 1] && !used[i - 1])) continue;
            path.push(nums[i]);
            used[i] = true;
            bt(nums, res, path, used);
            path.pop();
            used[i] = false;
        }
        return res;
    }
    return bt(nums, [], [], used);
};