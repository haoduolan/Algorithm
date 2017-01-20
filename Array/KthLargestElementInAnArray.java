/*
Find the kth largest element in an unsorted array. 
Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

public class Solution {
    public int findKthLargest(int[] nums, int k) {
        shuffle(nums);
        int hi = nums.length - 1;
        int index = quickSelect(nums, 0, hi, k);
        return nums[index];
    }
    private int quickSelect(int[] nums, int lo, int hi, int k){
        int i = lo;
        int j = hi;
        int cur = lo;
        while(i <= j){
            if(nums[i] > nums[cur]) {
                swap(nums, i, j--);
            }
            else i++;
        }
        swap(nums, lo, j);
        cur = nums.length - j;
        if(cur == k) return j;
        if(cur > k) return quickSelect(nums, j + 1, hi, k);
        else return quickSelect(nums, lo, j - 1, k);
    }
    private void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    private void shuffle(int[] nums){
        if(nums.length == 1) return;
        for(int i = nums.length - 1; i >= 0; i--){
            int ran = (int) Math.floor(Math.random() * i);
            swap(nums, ran, i);
        }
    }
}
