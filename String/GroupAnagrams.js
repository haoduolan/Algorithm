/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0) return [[""]];
    var map = {};
    var res = [];
    for(var i = 0; i < strs.length; i++){
        var arr = Array.from(strs[i]);
        // arr.split("");
        arr.sort();
        if(map[arr] === undefined){
            map[arr] = [];
        }
        map[arr].push(strs[i]);
    }
    for(var key in map){
        if(map.hasOwnProperty(key)){
            res.push(map[key]);
        }
    }
    return res;
};