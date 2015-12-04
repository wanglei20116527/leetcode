/**
 * @param {number[]} nums
 * @return {number}
 */
 
var lengthOfLIS = function( nums ){
    if( nums.length == 0 ){
        return 0;
    }
    
    var max =1;
    var tmp = [1];
    var len = nums.length;
    for( var i = 1; i < len; ++i ){
        
        var tmpMax = 1;
        for(var j = 0; j < i; ++j){
            if( nums[i] > nums[j] ){
                tmpMax = Math.max( tmpMax, tmp[j] + 1 );
            }
        }
        
        tmp[i] = tmpMax;
        
        max = Math.max( max, tmpMax );
    }
    
    return max;
}

// var lengthOfLIS = function(nums) {
//     if( nums.length == 0 ){
//         return 0;
//     }
    
//     var copy = nums.slice();
    
//     copy.sort(function( a, b ){
//         return a - b;
//     });
    
//     var len = nums.length;
//     var tmp = [];
//     for( var i = 0; i < len; ++i ){
//          tmp[i] = [];
//     }
    
//     for( var i = 0; i < len; ++i ){
//         tmp[0][i] = copy[i] > nums[0] ? 1 : 0;   
//     }
    
//     for( var i = 1; i < len; ++i ){
//         for( var j = 0; j < len; ++j ){
//             if( nums[i] >= copy[j]  ){
//                 tmp[i][j] = tmp[i - 1][j];
                
//             }else{
//                 tmp[i][j] = tmp[i - 1][j];
//                 for( var k = 0; k < j; ++k ){
//                     if( copy[k] > nums[i] ){
//                         tmp[i][j] = Math.max( tmp[i - 1][k] + 1, tmp[i][j] );
//                     }
//                 }
//             }
//         }
//     }
    
//     return tmp[len-1][len -1];
    
// };




