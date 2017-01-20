/*
Implement next permutation, 
which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, 
it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. 
Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

public class Solution {
    public void nextPermutation(int[] nums) {
        int partition = nums.length - 2;
        while(partition >= 0 && nums[partition] >= nums[partition + 1]) {
            partition--;
        }
        if(partition < 0){
            reverse(nums, 0);
            return;
        }
        int exchange = nums.length - 1;
        while(nums[exchange] <= nums[partition]) exchange--;
        swap(nums, exchange, partition);
        reverse(nums, partition + 1);
    }
    private void reverse(int[] nums, int start){
        int end = nums.length - 1;
        while(start < end){
            swap(nums, start++, end--);
        }
    }
    private void swap(int[] nums, int i, int j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}