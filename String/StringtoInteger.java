/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. 
If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). 
You are responsible to gather all the input requirements up front.
*/

public class Solution {
    public int myAtoi(String str) {
        int len = str.length();
        int res = 0;
        int i = 0;
        boolean neg = false;
        while(i < len && str.charAt(i) == ' '){
            i++;
        }
        if(i == len) return 0;
        if(str.charAt(i) == '-') {neg = true; i++;}
        else if(str.charAt(i) == '+') i++;
        for(; i < len; i++){
            char c = str.charAt(i);
            if(c < '0' || c > '9') break;
            else if(res > Integer.MAX_VALUE/10 || (res == Integer.MAX_VALUE/10 && (c - '0') > Integer.MAX_VALUE % 10)){
                if(neg) return Integer.MIN_VALUE;
                else return Integer.MAX_VALUE;
            }
            res = res * 10 + (c - '0');
        }
        if(neg) return -1 * res;
        return res;
    }
}
