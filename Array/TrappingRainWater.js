/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height.length == 0) return 0;
    var max = 0;
    var left = [];
    var right = [];
    for(var i = 0; i < height.length; i++){
        if(height[i] > max) {
            left[i] = 0;
            max = height[i];
        }
        else left[i] = max - height[i];
    }
    max = 0;
    for(var j = height.length - 1; j >= 0; j--){
        if(height[j] > max){
            max = height[j];
            right[j] = 0
        }
        else right[j] = max - height[j];
    }
    var sum = 0;
    for(var k = 0; k < height.length; k++){
        sum += Math.min(left[k], right[k]);
    }
    return sum
};