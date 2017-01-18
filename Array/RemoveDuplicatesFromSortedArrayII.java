/*
 Follow up for "Remove Duplicates":
 What if duplicates are allowed at most twice?

 For example,
 Given sorted array nums = [1,1,1,2,2,3],

 Your function should return length = 5, 
 with the first five elements of nums being 1, 1, 2, 2 and 3. 
 It doesn't matter what you leave beyond the new length.
*/

 public class Solution {
    public int removeDuplicates(int[] nums) {
        if(nums.length <= 2) return nums.length;
        int index = 2;
        for(int j = 2; j < nums.length; j++){
            if(nums[j] != nums[index - 2]){
                nums[index] = nums[j];
                index++;
            }
        }
        return index;
    }
}