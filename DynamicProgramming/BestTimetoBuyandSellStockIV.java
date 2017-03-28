/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most k transactions.

Note:
You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

public class Solution {
    public int maxProfit(int k, int[] prices) {
        if(prices.length < 2 || k < 1) return 0;
        if(k >= prices.length) return maxP(prices);
        int[] sell = new int[k];
        int[] buy = new int[k];
        Arrays.fill(buy, Integer.MIN_VALUE);
        for(int i = 0; i < prices.length; i++){
            int p = prices[i];
            for(int j = k - 1; j > 0; j--){
                sell[j] = Math.max(sell[j], buy[j] + p);
                buy[j] = Math.max(buy[j], sell[j - 1] - p);
            }
            sell[0] = Math.max(sell[0], buy[0] + p);
            buy[0] = Math.max(buy[0], -p);
        }
        return sell[k - 1];
    }
    private int maxP(int[] prices){
        int sum = 0;
        for(int i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1];
        }
        return sum;
    }
}