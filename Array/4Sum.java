/*
 Given an array S of n integers, 
 are there elements a, b, c, and d in S such that a + b + c + d = target? 
 Find all unique quadruplets in the array which gives the sum of target.

 The solution set must not contain duplicate quadruplets.

 For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

 A solution set is:
 [
   [-1,  0, 0, 1],
   [-2, -1, 1, 2],
   [-2,  0, 0, 2]
 ]
*/

public class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(nums.length < 4) return res;
        Arrays.sort(nums);
        for(int i = 0; i < nums.length - 3; i++){
            if(i != 0 && nums[i] == nums[i - 1]) continue;
            for(int j = i + 1; j < nums.length - 2; j++){
                if(j != i + 1 && nums[j] == nums[j - 1]) continue;
                int m = j + 1;
                int n = nums.length - 1;
                while(m < n){
                    int sum = nums[i] + nums[j] + nums[n] + nums[m];
                    if(sum == target){
                        List<Integer> list = new ArrayList<Integer>(Arrays.asList(nums[i], nums[j], nums[m++], nums[n--]));
                        res.add(list);
                        while(m < n && nums[m] == nums[m - 1]) m++;
                        while(m < n && nums[n] == nums[n + 1]) n--;
                    }
                    else if(sum < target){
                        m++;
                        while(m < n && nums[m] == nums[m - 1]) m++;
                    }
                    else {
                        n--;
                        while(m < n && nums[n] == nums[n + 1]) n--;
                    }
                }
            }
        }
        return res;
    }
}