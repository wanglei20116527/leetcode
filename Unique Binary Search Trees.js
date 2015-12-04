/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if( n <= 2 ){
        return n;
        
    }else if( n == 3 ){
        return 5;
    }
    
    var count = 0;
    for(var i = n - 1; i >= Math.ceil(n / 2); --i){
        var leftCount = numTrees(i);
        var rightCount = numTrees(n - i - 1);
        
        if( rightCount == 0 ){
            rightCount= 1;
        }
        
        count += leftCount * rightCount;
    }
    
    count *= 2;
    
    if( n % 2 == 1 ){
        var tmp = parseInt( (n - 1) / 2 );
        count += numTrees( tmp ) * numTrees( n - 1 - tmp );
    }
    
    return count;
};
