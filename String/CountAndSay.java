/*
The count-and-say sequence is the sequence of integers beginning as follows:
1, 11, 21, 1211, 111221, ...

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n, generate the nth sequence.

Note: The sequence of integers will be represented as a string.
*/

public class Solution {
    public String countAndSay(int n) {
        StringBuilder prev = new StringBuilder("1");
        int count;
        char say;
        for(int i = 1; i < n; i++){
            StringBuilder cur = new StringBuilder();
            count = 1;
            say = prev.charAt(0);
            for(int j = 1; j < prev.length(); j++){
                if(say == prev.charAt(j)) count++;
                else {
                    cur.append(count).append(say);
                    count = 1;
                    say = prev.charAt(j);
                }
            }
            cur.append(count).append(say);
            prev = cur;
        }
        return prev.toString();
    }
}