/*
 Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

 For example,
 Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4]. 
 Return its length: 4.

 Your algorithm should run in O(n) complexity.
*/

public class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<Integer>();
        int longest = 0;
        for(int n : nums){
            set.add(n);
        }
        for(int i: nums){
            int length = 1;
            int j = i - 1;
            while(set.contains(j)){
                length++;
                set.remove(j);
                j--;
            }
            j = i + 1;
            while(set.contains(j)){
                length++;
                set.remove(j);
                j++;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}