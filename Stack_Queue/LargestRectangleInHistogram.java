/*
Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 
find the area of largest rectangle in the histogram.

For example,
Given heights = [2,1,5,6,2,3],
return 10.
*/

public class Solution {
    public int largestRectangleArea(int[] heights) {
        if(heights.length == 0) return 0;
        int len = heights.length;
        Stack<Integer> stack = new Stack<>();
        int max = 0;
        int right = len;
        int left;
        for(int i = 0; i < len; i++) {
            while(!stack.empty() && heights[i] < heights[stack.peek()]){
                int index = stack.pop();
                right = i;
                if(stack.empty()) left = -1;
                else left = stack.peek();
                max = Math.max((right - left - 1) * heights[index], max);
            }
            stack.push(i);
        }
        right = len;
        while(!stack.empty()){
            int index = stack.pop();
            if(stack.empty()) left = -1;
            else left = stack.peek();
            max = Math.max((right - left - 1) * heights[index], max);
        }
        return max;
    }
}