/*
Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
*/

public class Solution {
    public boolean isAdditiveNumber(String num) {
        if(num.length() <= 2 || num.charAt(0) == 0) {
            return false;
        }
        for(int i = 1; i <= num.length() / 2; i++){
            if (num.charAt(0) == '0' && i > 1) continue;
            for(int j = i + 1; j < num.length(); j++){
                if(num.charAt(i) == '0' && j - i > 1) continue;
                if(dfs(0, i, j, num)) return true;
            }
        }
        return false;
    }
    private boolean dfs(int i, int j, int k, String num){
        Long first = Long.parseLong(num.substring(i, j));
        Long second = Long.parseLong(num.substring(j, k));
        String add = String.valueOf(first + second);
        if(!num.substring(k).startsWith(add)) return false;
        if(k + add.length() == num.length()) return true;
        return dfs(j, k, k + add.length(), num);
    }
}