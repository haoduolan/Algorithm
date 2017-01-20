/*
There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). 
You begin the journey with an empty tank at one of the gas stations.

Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.

Note:
The solution is guaranteed to be unique.
*/

/*
total = gas - cost
if total from station A to station B is less than 0, that means start from A can not
reach B. Hence start point should be after B, because we need to accumulate more gas.
*/

public class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int total = 0;
        int start = 0;
        int min = 0;
        for(int i = 0; i < gas.length; i++){
            total += (gas[i] - cost[i]);
            if(total < min){
                start = i + 1;
                min = total;
            }
        }
        if(total < 0) return -1;
        return start;
    }
}