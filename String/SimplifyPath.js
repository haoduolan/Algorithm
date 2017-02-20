/*
Given an absolute path for a file (Unix-style), simplify it.

For example,
path = "/home/", => "/home"
path = "/a/./b/../../c/", => "/c"
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var arr = path.split('/');
    if(path == '/') return '/';
    var stack = [];
    for(var i = 0; i < arr.length; i++){
        var s = arr[i];
        if(s != '.' && s !== ''){
            if(s == '..'){
                if(stack.length !== 0) stack.pop();
            }
            else stack.push(s);
        }
    }
    var res = '';
    while(stack.length !== 0){
        res = res + '/' + stack.shift();
    }
    if(res === '') return '/';
    else return res;
};