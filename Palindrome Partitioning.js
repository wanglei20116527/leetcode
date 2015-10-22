/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    var result = [];
    
    solution( s, 0, [], result );
    return result;
};

var solution = function(s, index, temp, result){
    var len = s.length;
    
    if( index >= len ){
        if( temp.length ){
            result.push( temp );
        }
        return;
    }
    
    for(var i = 1; i + index <= s.length; ++i){
        var subString = s.substr(index, i);
        
        if( isPalindrome( subString ) ){
            var arr = temp.slice();
            arr.push( subString );
            
            solution( s, index + i, arr, result );
        }
    }
};

var isPalindrome = function(s){
    var start = 0;
    var end   = s.length - 1;
    
   while( start <= end ){
       if( s.charAt( start ) == s.charAt( end ) ){
           start++;
           end--;
       }else{
           return false;
       }
   }
   
   return true;
};