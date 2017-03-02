/*
Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?
*/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    var len = citations.length;
    var lo = 0; var hi = len - 1;
    while(lo <= hi){
        var mid = Math.floor((hi - lo) / 2) + lo;
        if(citations[mid] == len - mid) return citations[mid];
        if(citations[mid] > len - mid) hi = mid - 1;
        else lo = mid + 1;
    }
    return len - lo;
};