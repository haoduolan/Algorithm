/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it is able to trap after raining.

For example, 
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
*/

public class Solution {
    public int trap(int[] height) {
        int len = height.length;
        int[] left = new int[len];
        int[] right = new int[len];
        int max = -1;
        int res = 0;
        for(int i  = 0; i < len; i++){
            if(max > height[i]){
                left[i] = max - height[i];
            }
            else {
                left[i] = 0;
                max = height[i];
            }
        }
        max = -1;
        for(int j = len - 1; j >= 0; j--){
            if(max > height[j]){
                right[j] = max - height[j];
            }
            else{
                max = height[j];
                right[j] = 0;
            }
        }
        for(int i = 0; i < len; i++){
            res += Math.min(left[i], right[i]);
        }
        return res;
    }
}