/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

public class Solution {
    public boolean isPalindrome(String s) {
        s = s.toLowerCase();
        int left = 0;
        int right = s.length() - 1;
        while(left < right){
            if(!isNumOrChar(s.charAt(left))) left++;
            else if(!isNumOrChar(s.charAt(right))) right--;
            else if(s.charAt(left) != s.charAt(right)) return false;
            else {
                left++;
                right--;
            }
        }
        return true;
    }
    private boolean isNumOrChar(char c){
        if((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z')) return true;
        return false;
    }
}