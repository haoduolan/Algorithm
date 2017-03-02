/*
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?
*/
public class Solution {
    public int hIndex(int[] citations) {
        int lo = 0;
        int len = citations.length;
        int hi = len - 1;
        while(lo <= hi){
            int mid = (hi - lo) / 2 + lo;
            if(len - mid == citations[mid]) return citations[mid];
            if(len - mid < citations[mid]) hi = mid - 1;
            else lo = mid + 1;
        }
        return len - lo;
    }
}