/*
Implement int sqrt(int x).

Compute and return the square root of x.

*/

public class Solution {
    public int mySqrt(int x) {
        if(x < 2) return x;
        int left = 1;
        int right = x / 2;
        int last = 1;
        while(left <= right){
            int mid = (right -  left) / 2 + left;
            if(x / mid > mid) {
                left = mid + 1;
                last = mid;
            }
            else if (x / mid < mid){
                right = mid - 1;
            }
            else return mid;
        }
        return last;
    }
}