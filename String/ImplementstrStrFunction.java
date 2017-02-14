/*
Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*/

public class Solution {
    public int strStr(String haystack, String needle) {
        int hlen = haystack.length();
        int nlen = needle.length();
        if(nlen == 0) return 0;
        if(nlen > hlen) return -1;
        for(int i = 0; i <= hlen - nlen; i++){
            for(int j = 0; j < nlen; j++){
                if(haystack.charAt(i + j) != needle.charAt(j)) break;
                if(j == nlen - 1) return i;
            }
        }
        return -1;
    }
}