/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    var largest = sort( toStringArray( nums ) ).join("");
    
    if( largest.charAt(0) != "0" ){
        return largest;
    }
    
    var count = 0;
    
    var len= largest.length;
    for(var i = 0; i < len; ++i ){
        if( largest.charAt(i) == "0" ){
            count++;
        }else{
            break;
        }
    }
    
    return largest.substr( count - 1 );
};

var toStringArray = function(nums){
    var len = nums.length;
    
    var arr = new Array( nums.length );
    
    for(var i = 0; i < len; ++i){
        arr[i] = nums[i].toString();
    }
    
    return arr;
    
};

var sort = function( nums ){
    var len = nums.length;
    
    for(var i = 0; i < len - 1; ++i){
        for(var j = 0; j < len - i - 1; ++j){
            if( compare( nums[j], nums[j + 1] ) < 0 ){
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    
    return nums;
};

var compare = function( str1, str2 ){
    var len1 = str1.length;
    var len2 = str2.length;
    
    var len  = Math.min( len1 , len2 );
    for(var i = 0; i < len; ++i ){
        var temp =  parseInt( str1.charAt(i) ) - parseInt( str2.charAt(i) );
        
        if( temp != 0 ){
            return temp;
        }
    }
    
    if( len1 == len2 ){
        return 0;
    }
    
    if( len1 > len2 ){
        return compare( str1.substr( len2 ), str2 );
    }else{
        return compare( str1, str2.substr( len1 ) );
    }
    
};



