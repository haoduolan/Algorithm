/*
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
*/

public class Solution {
    public String simplifyPath(String path) {
        StringBuilder sb = new StringBuilder();
        if(path.isEmpty() || path == "/")  return "/";
        Deque<String> stack = new LinkedList<String>();
        for(int i = 1; i < path.length(); i++){
            int j = path.indexOf('/', i);
            if(j < 0) j = path.length();
            String str = path.substring(i, j);
            if(!str.isEmpty() && !str.equals(".")){
                if(str.equals("..")) {
                    if(!stack.isEmpty()) stack.pop();
                }
                else {
                    stack.push(str);
                }
            }
            i = j;
        }
        if(stack.isEmpty()) sb.append("/");
        while(!stack.isEmpty()){
            sb.append("/").append(stack.removeLast());
        }
        return sb.toString();
    }
}