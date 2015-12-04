/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length;
    
    if( len == 0 ){
        return 0;
    }else if( len == 1 ){
        return nums[0];
    }
    
    
    var tmp = [nums[0] ];
    tmp[1] = Math.max( nums[0], nums[1] );
    
    for( var i = 2; i < len; ++i ){
        tmp[i] = Math.max( tmp[i - 1], tmp[i -2] + nums[i] );
    }
    
    return tmp[ len - 1 ];
    
};
