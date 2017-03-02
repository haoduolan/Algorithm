/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var keyboard = [" ", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var bt = function(digits, i, path, res){
        if(i == digits.length){
            res.push(path.slice());
            return res;
        }
        var str = keyboard[parseInt(digits.charAt(i))];
        for(var j = 0; j < str.length; j++){
            path = path + str.charAt(j);
            bt(digits, i + 1, path, res);
            path = path.slice(0, path.length - 1);
        }
        return res;
    }
    if(digits.length === 0) return [];
    return bt(digits, 0, "", []);
};