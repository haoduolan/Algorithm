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

public class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        if(wordList.size() == 0 || endWord == null || !wordList.contains(endWord)) return 0;
        Set<String> s1 = new HashSet<>();
        Set<String> s2 = new HashSet<>();
        s1.add(beginWord);
        s2.add(endWord);
        Set<String> dict = new HashSet<String>(wordList);
        Set<String> visited = new HashSet<String>();
        int level = 1;
        while(!s1.isEmpty() && !s2.isEmpty()){
            if(s1.size() > s2.size()){
                Set<String> temp = s1;
                s1 = s2;
                s2 = temp;
            }
            Set<String> next = new HashSet<>();
            level++;
            for(String str: s1) {
                char[] charArr = str.toCharArray();
                for(int i = 0; i < charArr.length; i++){
                    for(char c = 'a'; c <= 'z'; c++){
                        char oldChar = charArr[i];
                        if(c != oldChar) {
                            charArr[i] = c;
                            String newStr = String.valueOf(charArr);
                            if(s2.contains(newStr)) return level;
                            if(dict.contains(newStr) && !visited.contains(newStr)) {
                                visited.add(newStr);
                                next.add(newStr);
                            }
                            charArr[i] = oldChar;
                        }
                    }
                }
            }
            s1 = next;
        }
        return 0;
    }
}