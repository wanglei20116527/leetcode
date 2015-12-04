/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if( m == n){
        return m;
    }
    
    if( m > n ){
        var tmp = m;
        m = n;
        n = tmp;
    }
    
    var binaryMString = parseInt(m).toString(2);
    var binaryNString = parseInt(n).toString(2);
    
    var resultString = "";
    
    if( binaryMString.length == binaryNString.length ){
        var i = 0;
        
        while(i < binaryMString.length && binaryMString.charAt(i) == binaryNString.charAt(i) ){
            resultString += binaryMString.charAt(i);
            ++i;
        }
        
        for(var j = i; j < binaryMString.length ; ++j){
            resultString += "0";
        }
    }else{
        resultString = "0";
    }
    
   
    return parseInt( resultString, 2 );
};
