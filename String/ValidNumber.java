/*
Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
Note: It is intended for the problem statement to be ambiguous. 
You should gather all requirements up front before implementing one.
*/

public class Solution {
    public boolean isNumber(String s) {
        s = s.trim();
        if(s == "") return false;
        boolean pseen = false;
        boolean eseen = false;
        boolean NafterE = true;
        boolean nseen = false;
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if(c >= '0' && c <= '9'){
                nseen = true;
                NafterE = true;
            }
            else if(c == '.'){
                if(pseen || eseen) return false;
                pseen = true;
            }
            else if(c == 'e'){
                if(eseen || !nseen) return false;
                eseen = true;
                NafterE = false;
            }
            else if(c =='+' || c =='-'){
                if(i != 0 && s.charAt(i - 1) != 'e') return false;
            }
            else {
                return false;
            }
        }
        return nseen && NafterE;
    }
}
