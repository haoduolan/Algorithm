/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

  public class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        int n1, n2;
        for(String s : tokens){ 
            if(s.equals("+")){
                n1 = stack.pop();
                n2 = stack.pop();
                stack.push(n1 + n2);
            }
            else if(s.equals("-")){
                n1 = stack.pop();
                n2 = stack.pop();
                stack.push(n2 - n1);
            }
            else if(s.equals("*")){
                n1 = stack.pop();
                n2 = stack.pop();
                stack.push(n1 * n2);
            }
            else if(s.equals("/")){
                n2 = stack.pop();
                n1 = stack.pop();
                stack.push(n1 / n2);
            }
            else stack.push(Integer.parseInt(s));
            System.out.println(stack.peek());
        }
        return stack.pop();
    }
}