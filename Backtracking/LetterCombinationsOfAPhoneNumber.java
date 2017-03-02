/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

public class Solution {
    private String[] keyboard = new String[]{ " ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" };
    public List<String> letterCombinations(String digits) {
        if(digits.length() == 0) return new ArrayList<String>();
        char[] digit = digits.toCharArray();
        return bt(digit, new StringBuilder(), new ArrayList<String>(), 0);
    }
    private List<String> bt(char[] digit, StringBuilder path, List<String> res, int i){
        if(i == digit.length) {
            res.add(path.toString());
            return res;
        }
        char[] arr = keyboard[digit[i] - '0'].toCharArray();
        for(int j = 0; j < arr.length; j++){
            path.append(arr[j]);
            bt(digit, path, res, i + 1);
            path.deleteCharAt(path.length() - 1);
        }
        return res;
    }
}