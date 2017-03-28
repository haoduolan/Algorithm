/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

public class Solution {
    public int maxProfit(int[] prices) {
        int s1 = 0;
        int b1 = Integer.MIN_VALUE;
        int s2 = 0;
        int b2 = Integer.MIN_VALUE;
        for(int i = 0; i < prices.length; i++){
            s2 = Math.max(s2, b2 + prices[i]);
            b2 = Math.max(b2, s1 - prices[i]);
            s1 = Math.max(s1, b1 + prices[i]);
            b1 = Math.max(b1, -prices[i]);
        }
        return s2;
    }
}