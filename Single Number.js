/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var result = nums[0];
    var length = nums.length;
    
    for(var i = 1; i < length; ++i){
        result ^= nums[i];
    }
    
    return result;
};