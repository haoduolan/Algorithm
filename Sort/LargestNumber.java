/*
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

public class Solution {
    public String largestNumber(int[] nums) {
        if(nums.length == 0) return "";
        String[] s = new String[nums.length];
        for(int i = 0; i< nums.length; i++){
            s[i] = String.valueOf(nums[i]);
        }
        Comparator<String> comp = new Comparator<String>(){
            public int compare(String s1, String s2){
                String str1 = s1 + s2;
                String str2 = s2 + s1;
                return str2.compareTo(str1);
            }  
        };
        Arrays.sort(s, comp);
        if(s[0].charAt(0) == '0') return "0";
        StringBuilder sb = new StringBuilder();
        for(String str : s) sb.append(str);
        return sb.toString();
    }
}