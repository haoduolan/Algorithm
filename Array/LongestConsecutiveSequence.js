/*
 Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

 For example,
 Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4]. 
 Return its length: 4.

 Your algorithm should run in O(n) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    var map = {};
    var longest = 0;
    for(var n = 0; n < nums.length; n++){
        map[nums[n]] = nums[n];
        //console.log(map[nums[n]]);
    }
    for(var i= 0; i < nums.length; i++){
        var length = 1;
        var j = nums[i] - 1;
        while(map[j] !== undefined){
            length++;
            //console.log(length);
            delete map[j];
            j--;
        }
        j = nums[i] + 1;
        while(map[j] !== undefined){
            length++;
            delete map[j];
            j++;
        }
        longest = Math.max(longest, length);
    }
    return longest;
};