/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    
    if( len < 2 ){
        return []
    }
    
    var xor = 0;

    for( var i = 0; i < len; ++i ){
        xor ^= nums[i];
    }
    
    var n = xor & (~(xor - 1));
    
    var result = [0, 0];
    
    for( var i = 0; i < len; ++i  ){
        if( ( n & nums[i] ) == 0){
            result[0] ^= nums[i];
        }else{
            result[1] ^= nums[i];
        }
    }
    
    return result;
}

var singleNumber = function(nums) {
    var len = nums.length;
    
    var map = {};
    
    for( var i = 0; i < len; ++i ){
        if( map[ nums[i] ] == undefined ){
            map[ nums[i] ] = 0;
        }
        
        map[ nums[i] ]++;
    }
    
    var keys = Object.keys( map );
    
    var result = [];
    for( var i = 0; i < keys.length; ++i ){
        if( map[ keys[i] ] == 1 ){
            result.push( parseInt( keys[i] ) );
        }
    }
    
    return result;
};
