/*
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given an encoded message containing digits, determine the total number of ways to decode it.

For example,
Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

The number of ways decoding "12" is 2.
*/

public class Solution {
    public int numDecodings(String s) {
        int len = s.length();
        if(len < 1 || s.charAt(0) == '0') return 0;
        char[] str = s.toCharArray();
        int prev = 1;
        int cur = 1;
        for(int i = 1; i < len; i++){
            if(str[i] == '0') cur = 0;
            if(str[i] <= '6' && str[i - 1] == '2' || str[i - 1] == '1') {
                int temp = cur;
                cur += prev;
                prev = temp;
            }
            else prev = cur;
        }
        return cur;
    }
}