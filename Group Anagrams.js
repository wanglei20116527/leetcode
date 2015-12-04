/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var len = strs.length;
    
    if( len == 0 ){
        return [];
    }
   
    var container = {};
    
    for(var i = 0; i < strs.length; ++i){
        var key = recombineWord( strs[i] );
        
        if( !container[key] ){
            container[key] = []; 
        }
        
        container[key].push(strs[i] );
    }
    var result = [];
    
    var keys = Object.keys(container);
    
    for(var i = 0; i < keys.length; ++i){
        var tmpArr = container[keys[i]];
        
        var tmpLen = tmpArr.length;
        
        for(var j = 0; j < tmpLen; ++j){
            for(var k = 0; k < tmpLen - j - 1; ++k){
                if(tmpArr[k] > tmpArr[k + 1]){
                    var tmp = tmpArr[k];
                    tmpArr[k] = tmpArr[k + 1];
                    tmpArr[k + 1] = tmp;
                }
            }
        }
       
        result.push( tmpArr );
    }
    
    return result;
};


var recombineWord = function( word ){
    var arr = word.split("");
    arr.sort(function(a, b){
        return a > b;
    });
    
    return arr.join('');
};
