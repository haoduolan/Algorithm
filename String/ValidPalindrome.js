/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === "") return true;
    s = s.toLowerCase();
    var isNumOrChar = function(s, i){
        var c = s.charAt(i);
        if((c >= '0' && c <= '9') || (c >= 'a' && c <= 'z')) return true;
        return false;
    }
    var i = 0;
    var j = s.length - 1;
    while(i < j){
        if(!isNumOrChar(s, i)) i++;
        else if(!isNumOrChar(s, j)) j--;
        else if(s.charAt(i) != s.charAt(j)) return false;
        else{
            i++;
            j--;
        }
    }
    return true;
};