/* 
There are N children standing in a line. Each child is assigned a rating value.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
What is the minimum candies you must give?
*/

/**
 * @param {number[]} ratings
 * @return {number}
 */

/**
 * First solution is simpliler to trapping water. scan ratings array from left to right then from right to left.
 * Then scan again to find the maximun sum of two arrays(left and right);
 * This way is simple to understand but need 2n extra space.
 * 
 * The second solution only need one pass.
 * His/her rating is equal to the previous one -> give 1 candy.
 * His/her rating is greater than the previous one -> give him (previous + 1) candies.
 * His/her rating is less than the previous one -> don't know what to do yet, 
 * let's just count the number of such consequent cases.
 */ 
 
var candy = function(ratings) {
    var countDown = 0;
    var total = 1;
    var prev = 1;
    for(var i = 1; i< ratings.length; i++){
        if(ratings[i] >= ratings[i - 1]){
            if(countDown > 0){
                total += countDown * (countDown + 1) / 2;
                if(countDown >= prev) total += countDown - prev + 1;
                prev = 1;
                countDown = 0;
            }
            if(ratings[i] == ratings[i - 1]) prev = 1;
            else prev++;
            total += prev;
        }
        else {
            countDown++;
        }
    }
    if(countDown > 0){
        total += countDown * (countDown + 1) / 2;
        if(countDown >= prev) total += countDown - prev + 1;
    }
    return total;
};