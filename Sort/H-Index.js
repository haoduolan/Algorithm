/*
Given an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, 
and the other N − h papers have no more than h citations each."

For example, given citations = [3, 0, 6, 1, 5], which means the researcher has 5 papers in total 
and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each 
and the remaining two with no more than 3 citations each, his h-index is 3.

Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
 //[3,0,6,5,1]
// bucket: [0,1,0,1,0,2]
// index:   0,1,2,3,4,5
var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    var bucket = [];
    var len = citations.length;
    for(var i = 0; i < len + 1; i++) bucket.push(0);
    for(var j = 0; j < len; j++){
        index = citations[j];
        if(index > len) index = len;
        bucket[index]++;
    }
    var count = 0;
    for(var k = len; k >= 0; k--){
        count += bucket[k];
        if(count >= k) return k;
    }
    return 0;
};