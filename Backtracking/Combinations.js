/*
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var bt = function(n, k, path, res, start){
        if(path.length == k) {
            res.push(path.slice());
            return res;
        }
        for(var i = start; i <= n; i++){
            path.push(i);
            bt(n, k, path, res, i + 1);
            path.pop();
        }
        return res;
    }
    return bt(n, k, [], [], 1);
};