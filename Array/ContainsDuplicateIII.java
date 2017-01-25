/*
Given an array of integers, find out whether there are two distinct indices i and j 
in the array such that the absolute difference between nums[i] and nums[j] is at most t 
and the absolute difference between i and j is at most k.
*/

public class Solution {
    public boolean containsNearbyAlmostDuplicate(int[] nums, int k, int t) {
        if(k <= 0 || t < 0) return false;
        HashMap<Long, Long> map = new HashMap<Long, Long>();
        long w = (long)t + 1;
        for(int i = 0; i < nums.length; i++){
            long index = getBucketNum(nums[i], w);
            if(map.containsKey(index)) return true;
            if(map.containsKey(index - 1) && Math.abs(map.get(index - 1) - nums[i]) < w) return true;
            if(map.containsKey(index + 1) && Math.abs(map.get(index + 1) - nums[i]) < w) return true;
            
            if(i >= k) map.remove(getBucketNum(nums[i - k], w));
            map.put(index, (long)nums[i]);
        }
        return false;
    }
    private Long getBucketNum(long n, long w){
        if(n < 0) return (n + 1) / w - 1;
        return n / w;
    }
}