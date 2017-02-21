/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 
find the area of largest rectangle in the histogram.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var res = 0;
    if(heights.length === 0) return res;
    var stack = [];
    var right;
    var left;
    for(var i = 0; i < heights.length; i++){
        while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]){
            right = i;
            var index = stack.pop();
            if(stack.length === 0) left = -1;
            else left = stack[stack.length - 1];
            res = Math.max(res, heights[index] * (right - left - 1));
        }
        stack.push(i);
    }
    right = heights.length;
    while(stack.length > 0){
        var id = stack.pop();
        if(stack.length === 0) left = -1;
        else left = stack[stack.length - 1];
        res = Math.max(res, heights[id] * (right - left - 1));
    }
    return res;
};