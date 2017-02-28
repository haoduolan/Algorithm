/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

public class Solution {
    public int findKthLargest(int[] nums, int k) {
        return nums[quickSelect(nums, k, 0, nums.length - 1)];
    }
    private void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    private void shuffle(int[] nums){
        for(int i = 0; i < nums.length; i++){
            int j = (int)Math.floor(Math.random() * i);
            swap(nums, i, j);
        }
    }
    private int quickSelect(int[] nums, int k, int start, int end){
        int i = start;
        int j = end;
        while(i <= j){
            if(nums[i] <= nums[start]) i++;
            else {
                swap(nums, i, j--);
            }
        }
        swap(nums, start, j);
        int cur = nums.length - j;
        if(cur > k) return quickSelect(nums, k, j + 1, end);
        if(cur < k) return quickSelect(nums, k, start, j - 1);
        return j;
    }
}