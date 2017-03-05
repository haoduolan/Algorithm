/*Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.length === 0 || beginWord == endWord || !wordList.includes(endWord)) return 0;
    var s1 = {};
    var s2 = {};
    s1[beginWord] = beginWord;
    s2[endWord] = endWord;
    var wordSet = {};
    var level = 1;
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    while(Object.keys(s1).length !== 0){
        level++;
        if(Object.keys(s1).length > Object.keys(s2).length){
            var temp = s2;
            s2 = s1;
            s1 = temp;
        }
        var next = {};
        for(var word in s1){
            if(s1.hasOwnProperty(word)){
                for (var l = 0; l < word.length; ++l) {
                    for (var c = 0; c < 26; ++c) {
                        if(word.charAt(l) == alphabet[c]) {
                            continue;
                        }
                        var new_word = word.substring(0, l) + alphabet[c] + word.substring(l + 1);
                        if (s2[new_word] !== undefined) {
                            return level;
                        }
                        if(wordList.includes(new_word) && wordSet[new_word] === undefined){
                            next[new_word] = new_word;
                            wordSet[new_word] = new_word;
                        }
                    }
                }
            }
        }
        s1 = next;
    }
    return 0;
};