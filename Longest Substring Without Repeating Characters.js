/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    
    if( len == 0 || len == 1 ){
        return len;
    }
    
    var result = 0;
    
    var hash = {};
    
    for(var i = 0; i < len; ++i){
        if( !hash[ s.charAt(i) ] ){
            hash[ s.charAt(i) ] = [];
        }
        
        hash[ s.charAt(i) ].push( i );
    }

    for(var i = 0; i < len; ++i){
        var tmpLength = hash[ s.charAt(i) ].length;
        
        var end = ( tmpLength > 1 ) ? hash[ s.charAt(i) ][1] : len;
        
        var j = i + 1;
        while(j < end){
            
            var tmpEnd = len;
            var tmpLen = hash[ s.charAt(j) ].length;
            
            if( tmpLen > 1 ){
                for( var k = 0; k < tmpLen; ++k ){
                    if( hash[ s.charAt(j) ][k] > j ){
                        tmpEnd = hash[ s.charAt(j) ][k];
                        break;
                    }
                }   
            }
            
            end = Math.min( end, tmpEnd );
           
            ++j;
        }
        
        result =  Math.max( end - i, result );
        
        hash[ s.charAt(i) ].shift();
    }
    
    return result;
    
    
};


// solution O(n^2)

// var lengthOfLongestSubstring = function(s) {
//     var len = s.length;
    
//     if( len == 0 || len == 1 ){
//         return len;
//     }
    
//     var result = 0;
    
//     for(var i = 0; i < len; ++i){
//         var tmpResult = 1;
//         var set = {};
//         set[s.charAt(i)] = true;
        
//         for(var j = i - 1; j >= 0; --j){
//             if( set[s.charAt(j)] ){
//                 break;
//             }
            
//             set[ s.charAt(j) ] = true;
//             tmpResult++;
//         }
        
//         for(var j = i + 1; j < len; ++j){
//             if( set[s.charAt(j)] ){
//                 break;
//             }
            
//             set[ s.charAt(j) ] = true;
//             tmpResult++;
//         }
        
//         result = Math.max(tmpResult, result);
//     }
    
//     return result;
// };



