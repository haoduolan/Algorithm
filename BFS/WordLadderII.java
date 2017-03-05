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

public class Solution {
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        if(wordList.size() == 0 || endWord == null || !wordList.contains(endWord)) return new ArrayList<List<String>>();
        Set<String> s1 = new HashSet<String>();
        Set<String> s2 = new HashSet<String>();
        Map<String, List<String>> map = new HashMap<String, List<String>>();
        Set<String> wordlist = new HashSet<String>(wordList);
        s1.add(beginWord);
        s2.add(endWord);
        BFS(s1, s2, wordlist, map, false);
        
        List<List<String>> res = new ArrayList<List<String>>();
        List<String> path = new ArrayList<String>(Arrays.asList(beginWord));
        generate(beginWord, endWord, map, path, res);
        return res;
    }
    private boolean BFS(Set<String> s1, Set<String> s2, Set<String> wordlist, Map<String, List<String>> map, boolean flip) {
        if(s1.isEmpty()) return false;
        if(s1.size() > s2.size()) return BFS(s2, s1, wordlist, map, !flip);
        wordlist.removeAll(s1);
        wordlist.removeAll(s2);
        boolean done = false;
        Set<String> next = new HashSet<String>();
        for(String str : s1){
            for(int i = 0; i < str.length(); i++){
                char[] chars = str.toCharArray();
                for(char c = 'a'; c <= 'z'; c++){
                    if(chars[i] == c) continue;
                    chars[i] = c;
                    String word = new String(chars);
                    String key = flip ? word : str;
                    String val = flip ? str : word;
                    if(!map.containsKey(key)) map.put(key, new ArrayList<String>());
                    List<String> list = map.get(key);
                    if(s2.contains(word)){
                        done = true;
                        list.add(val);
                        map.put(key, list);
                    }
                    if(!done && wordlist.contains(word)){
                        next.add(word);
                        list.add(val);
                        map.put(key, list);
                    }
                    
                }
            }
        }
        return done || BFS(s2, next, wordlist, map, !flip);
    }
    private void generate(String start, String end, Map<String, List<String>> map, List<String> path, List<List<String>> res){
        if(start.equals(end)){
            res.add(new ArrayList<String>(path));
            return;
        }
        
        if(!map.containsKey(start)) return;
        for(String word : map.get(start)){
            path.add(word);
            generate(word, end, map, path, res);
            path.remove(path.size() - 1);
        }
    }
}