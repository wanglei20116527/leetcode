/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if( nums == null || nums.length === 0 ){
        return 0;
    }
    
    nums = nums.sort(function(first, second){
        return first - second;
    });
    
    var count = 0;
    
    var tmpCount = 0;
    var index = 0;
    
    for(var i = 0; i < nums.length; ++i){
        if( i == 0 || nums[i] != nums[i - 1] ){
            count += tmpCount;
            tmpCount = 1;
            
            nums[ index++ ] = nums[i];
            
        }else if( tmpCount < 2 ){
            tmpCount++;
            nums[ index++ ] = nums[i];
        }
    }
    
    count += tmpCount;
    
    if( tmpCount <= 2 ){
        nums[ index++ ] = nums[i];
    }
    
    
    return count;
};
