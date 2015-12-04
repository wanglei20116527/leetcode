/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if( n == 0 || n == 1){
        return n;
    }else if( n == 2 ){
        return 2;
    }
    
    var tmp = [1, 2];
    
    for( var i = 2; i < n; ++i ){
        tmp[i] = tmp[i - 1] + tmp[i - 2];
    }
    
    return tmp[n - 1];
};

// var climbStairs = function(n) {
//     if( n == 0 || n == 1){
//         return n;
//     }else if( n == 2 ){
//         return 2;
//     }
    
//     return climbStairs( n - 1 ) + climbStairs( n - 2 );
// };

