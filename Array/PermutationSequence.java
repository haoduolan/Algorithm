/*
The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive.
*/

public class Solution {
    public String getPermutation(int n, int k) {
        StringBuilder res = new StringBuilder();
        List<Integer> number = new ArrayList<Integer>();
        for(int i = 1; i <= n; i++){
            number.add(i);
        }
        //number = [1,2,..., n];
        int[] f = new int[n];
        int sum = 1;
        f[0] = 1; // 0! = 1;
        for(int i = 1; i < n; i++){
            sum *= i;
            f[i] = sum;
        }
        k--;
        // f = [1,1,2,6,..., (n-1)!];
        for(int i  = n - 1; i >= 0 ; i--){
            int curPos = k / f[i];
            res.append(number.get(curPos));
            number.remove(curPos);
            k = k % f[i];
        }
        return String.valueOf(res);
    }
}