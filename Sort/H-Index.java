/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, 
and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total 
and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each 
and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

//bucket sort
//[3,0,6,5,1]
// bucket: [0,1,0,1,0,2]
// index:   0,1,2,3,4,5

public class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        int[] bucket = new int[n + 1];
        for(int i = 0; i < n; i++){
            int index = citations[i];
            if(citations[i] > n) index = n;
            bucket[index]++;
        }
        int count = 0;
        for(int i = n; i >= 0; i--){
            count += bucket[i];
            if(count >= i) return i;
        }
        return 0;
    }
}

//sort
public class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int i = 0; int j = citations.length - 1;
        while(i < j){
            int temp = citations[i];
            citations[i++] = citations[j];
            citations[j--] = temp;
        }
        for(int k = 0; k < citations.length; k++){
            if(k + 1 == citations[k]) return k + 1;
            if(k + 1 > citations[k]) return k;
        }
        return citations.length;
    }
}