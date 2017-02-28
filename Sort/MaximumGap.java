/*
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

Return 0 if the array contains less than 2 elements.

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
*/
public class Solution {
    public int maximumGap(int[] nums) {
        if(nums.length < 2) return 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int n = nums.length;
        for(int i : nums){
            min = Math.min(i, min);
            max = Math.max(i, max);
        }
        int gap = (int)Math.ceil((double) (max - min) / n );
        
        int[] minBucket = new int[n + 1];
        int[] maxBucket = new int[n + 1];
        Arrays.fill(minBucket, Integer.MAX_VALUE);
        Arrays.fill(maxBucket, Integer.MIN_VALUE);
        for(int i = 0; i < n; i++){
            int index = (nums[i] - min) / gap;
            minBucket[index] = Math.min(nums[i], minBucket[index]);
            maxBucket[index] = Math.max(nums[i], maxBucket[index]);
            
        }
        int res = 0;
        int prev = min;
        for(int i = 0; i <= n; i++){
            if(minBucket[i] == Integer.MAX_VALUE && maxBucket[i] == Integer.MIN_VALUE) continue;
            res = Math.max(res, (minBucket[i] - prev));
            prev = maxBucket[i];
        }
        return res;
    }
}