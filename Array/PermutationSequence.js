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

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    var number = [];
    for(var i = 1; i <=n; i++){
        number.push(i);
    }
    var f = [];
    var sum = 1;
    f.push(1);
    for(var j = 1; j < n; j++){
        sum *= j;
        f.push(sum);
    }
    k--;
    var res = [];
    for(var m = n - 1; m >= 0; m--){
        var index = Math.floor(k/f[m]);
        res.push(number[index]);
        number.splice(index, 1);
        k = k % f[m];
    }
    return res.join("");
};