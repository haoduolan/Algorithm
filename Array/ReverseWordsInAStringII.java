/*
Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.

The input string does not contain leading or trailing spaces and the words are always separated by a single space.

For example,
Given s = "the sky is blue",
return "blue is sky the".

Could you do it in-place without allocating extra space?
*/

public class Solution {
    public void reverseWords(char[] s) {
        if(s.length == 0) return;
        int j = 0;
        while(j < s.length){
            int i = j;
            while(j < s.length && s[j] != ' ') j++;
            reverse(s, i, j - 1);
            j++;
        }
        reverse(s, 0, s.length - 1);
    }
    private void reverse(char[] s, int i, int j){
        while(i < j){
            char temp = s[i];
            s[i++] = s[j];
            s[j--] = temp;
        }
    }
}