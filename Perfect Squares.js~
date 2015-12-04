/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if( n == 1 ){
        return 1;
    }
    
    var arr = new Array( n + 1 );
    
    arr[0] = 0;
    for( var i = 1; i * i <= n; ++i ){
        arr[i * i] = 1;
    }
    
    for( var i = 1; i <= n; ++i ){
        for( var j = 0; j + i * i <= n; ++j ){
            if( arr[j + i * i] == undefined ){
                arr[j + i * i] = arr[j] + 1;
            }else{
                arr[j + i * i] = Math.min( arr[j] + 1, arr[j + i * i] );
            }
        }
    }
    
    return arr[n];
}

// var numSquares = function(n) {
//     if( n == 1 || n == 0 ){
//         return n;
//     }
    
//     var factor = Math.sqrt(n);
//     var tmp = Math.floor( factor );
//     if( tmp == factor ){
//         return 1;
//     }
    
//     var min = Math.floor( n / Math.pow(tmp, 2) );
//     min += numSquares( n - min * Math.pow(tmp, 2) );
    
//     for( var i = tmp - 1; i >= 1; --i ){
//         var tmpMin = Math.floor(n / Math.pow(i, 2));
//         tmpMin += numSquares( n - tmpMin * Math.pow(i, 2) );
//         min = Math.min( min, tmpMin );
//     }
    
//     return min;
// };
