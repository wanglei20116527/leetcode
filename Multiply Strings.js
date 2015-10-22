/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var result  = "0";
    
    var suffix = "";
    
    var len1 = num1.length;
    var len2 = num2.length;
    
    for(var i = len2 - 1; i >= 0; --i){
        var factor1 = parseInt( num2.charAt(i) );
        if( factor1 === 0){
            suffix += "0";
            continue;
        }
        
        var carry_multi = 0;
        var multi = suffix;
        for(var j = len1 - 1; j >= 0; --j){
            var factor2 = parseInt( num1.charAt(j) );
            var tmp = factor1 * factor2 + carry_multi;
            
            multi = (tmp % 10) + multi;
            carry_multi = Math.floor( tmp / 10 );
        }
        
        if(carry_multi !== 0){
            multi = carry_multi + multi;
        }
        
        var len_minus = Math.abs( result.length - multi.length );
        if( len_minus !== 0 ){
            if(result.length > multi.length){
                for(var j = 0; j < len_minus; ++j){
                    multi = "0" + multi;
                }
            }else{
                for(var j = 0; j < len_minus; ++j){
                    result = "0" + result;
                }
            }
        }
        
        var carry_sum = 0;
        var tmpResult = result;
        result = "";
        for(var j = tmpResult.length - 1; j >= 0; --j){
            var tmp = parseInt( multi.charAt(j) ) + parseInt( tmpResult.charAt(j) ) + carry_sum;
            result = (tmp % 10) + result;
            carry_sum = Math.floor(tmp / 10);
        }
        
        if(carry_sum !== 0){
            result = carry_sum + result;
        }
        
        suffix += "0";
    }
    
    var count = 0;
    var i = 0;
    while(result.charAt(i) === "0"){
        count++;
        ++i;
    }
    
    result = result.substr(count);
    
    if(result === ""){
        result = "0";
    }
    
    return result;
    
};