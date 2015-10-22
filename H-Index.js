/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort(function(a, b){
        return a - b;
    });
    
    var len = citations.length;
    
    var maxIndex = Math.max( citations[len -1], len );
    
    for( var i = len; i >= 1; --i ){
        if( citations[ len - i ] >= i ){
            return i;
        }
    }
    
    return 0;
};