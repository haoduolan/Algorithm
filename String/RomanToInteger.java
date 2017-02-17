/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.
*/


public class Solution {
    public int romanToInt(String s) {
        int pre = 0;
        int res = 0;
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('M', 1000);
        map.put('D', 500);
        map.put('C', 100);
        map.put('L', 50);
        map.put('X', 10);
        map.put('V', 5);
        map.put('I', 1);
        for(int i = s.length() - 1; i >= 0; i--){
            int cur = map.get(s.charAt(i));
            if(cur >= pre) {
                res += cur;
                pre = cur;
            }
            else res -= cur;
        }
        return res;
    }
}
