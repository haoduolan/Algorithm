/*
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log","cog"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
Return an empty list if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    if(wordList.length === 0 || !wordList.includes(endWord)) return [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var set1 = {};
    var set2 = {};
    set1[beginWord] = true;
    set2[endWord] = true;
    var map = {};
    var connect = {};
    var visited = {};
    var wordSet = {};
    wordList.forEach(function(string) {
        wordSet[string] = true;
    });
    visited[beginWord] = true;
    visited[endWord] = true;
    var res = [];
    var BFS = function(s1, s2, flip){
        if(Object.keys(s1).length === 0) return false;
        if(Object.keys(s1).length > Object.keys(s2).length){
            return BFS(s2, s1, !flip);
        }
        var next = {};
        var done = false;
        for(var word in s1){
            // if(!s1.hasOwnProperty(word)) continue;
            for(var i = 0; i < word.length; i++){
                for(var j = 0; j < 26; j++){
                    if(alphabet[j] == word.charAt(i)) continue;
                    var new_word = word.substring(0, i) + alphabet[j] + word.substring(i + 1);
                    var list = [];
                    if(map[new_word] !== undefined) list = map[new_word];
                    if(s2[new_word] !== undefined) {
                        done = true;
                        var key = flip ? new_word : word;
                        var val = flip ? word : new_word;
                        var l = [];
                        if(connect[key] !== undefined) l = connect[key];
                        l.push(val);
                        connect[key] = l;
                    }
                    if(wordSet[new_word] !== undefined && visited[new_word] === undefined && !done){
                        next[new_word] = true;
                        list.push(word);
                        map[new_word] = list;
                    }
                }
            }
        }
        for (var visited_word in next) {
            // if (!next.hasOwnProperty(visited_word)) continue;
            visited[visited_word] = true;
        }
        return done || BFS(s2, next, !flip);
    }
    BFS(set1, set2, false);
    result_map = {};
    var generateHalf = function(word, direction){
        if (result_map[word] !== undefined) {
            return result_map[word];
        }
        if(map[word] === undefined){
            result_map[word] = [[word]];
            return result_map[word];
        }
        result_map[word] = [];
        for(var i = 0; i < map[word].length; i++){
            var cur_word = map[word][i];
            var result = generateHalf(cur_word, direction);
            for (var j = 0; j < result.length; ++j) {
                if (direction) {
                    result_map[word].push(result[j].concat([word]));
                } else {
                    result_map[word].push([word].concat(result[j]));
                }
            }
        }
        return result_map[word];
    }
    for(var word in connect){
        var left = generateHalf(word, true);
        for (var n = 0; n < connect[word].length; ++n) {
            var right = generateHalf(connect[word][n], false);
            for(var i = 0; i < left.length; i++){
                for(var j = 0; j < right.length; j++){
                    res.push(left[i].concat(right[j]));
                }
            }
        }
    }
    return res;
};