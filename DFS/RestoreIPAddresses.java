/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)

*/

public class Solution {
    public List<String> restoreIpAddresses(String s) {
        if(s.length() < 4) return new ArrayList<String>();
        List<String> res = new ArrayList<String>();
        int len = s.length();
        for(int i = 1; i < 4 && i < len - 2; i++){
            for(int j = i + 1; j < i + 4 && j < len - 1; j++){
                for(int k = j + 1; k < j + 4 && k < len; k++){
                    String s1 = s.substring(0, i);
                    String s2 = s.substring(i, j);
                    String s3 = s.substring(j, k);
                    String s4 = s.substring(k, len);
                    if(isValid(s1) && isValid(s2) && isValid(s3) && isValid(s4)){
                        StringBuilder sb = new StringBuilder();
                        sb.append(s1).append('.').append(s2).append('.').append(s3).append('.').append(s4);
                        res.add(sb.toString());
                    }
                }
            }
        }
        return res;
    }
    private boolean isValid(String s){
        int len = s.length();
        if(len == 0 || len > 3 || (len == 3 && Integer.parseInt(s) > 255) || (len > 1 && s.charAt(0) == '0'))
        return false;
        return true;
    }
}