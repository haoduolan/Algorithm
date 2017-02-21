/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var num = [];
    for(var i = 0; i< tokens.length; i++){
        var s = tokens[i];
        if(s == '+'){
            var n2 = num.pop();
            var n1 = num.pop();
            num.push(n1 + n2);
        }
        else if(s == '-'){
            var n2 = num.pop();
            var n1 = num.pop();
            num.push(n1 - n2);
        }
        else if(s == '*'){
            var n2 = num.pop();
            var n1 = num.pop();
            num.push(n1 * n2);
        }
        else if(s == '/'){
            var n2 = num.pop();
            var n1 = num.pop();
            num.push((n1 / n2) >> 0);
        }
        else {
            num.push(Number(s));
        }
    }
    if(num.length === 0) return 0;
    return num.pop();
};