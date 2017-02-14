/*
Given two binary strings, return their sum (also a binary string).

For example,
a = "11"
b = "1"
Return "100".
*/

public class Solution {
    public String addBinary(String a, String b) {
        StringBuilder res = new StringBuilder();
        int carry = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;
        while(i >= 0 || j >= 0 || carry > 0){
            int num1 = 0;
            int num2 = 0;
            if(i >= 0) num1 = a.charAt(i) - '0';
            if(j >= 0) num2 = b.charAt(j) - '0';
            int n = num1 + num2 + carry;
            res.insert(0, (n % 2));
            carry = n / 2;
            i--;
            j--;
        }
        return res.toString();
    }
}