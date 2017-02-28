/*
Given a list of non negative integers, arrange them such that they form the largest number.

For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

Note: The result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(nums.length === 0) return '0';
    function comp(s1, s2){
        var str1 = s1 + s2;
        var str2 = s2 + s1;
        if(str2 > str1) return 1;
        if(str2 < str1) return -1;
        return 0;
    }
    var str = [];
    for(var i = 0; i < nums.length; i++){
        str[i] = '' + nums[i];
    }
    str.sort(comp);
    if(str[0].charAt(0) == '0') return '0';
    var res = '';
    for(var j = 0; j < str.length; j++){
        res += str[j];
    }
    return res;
};