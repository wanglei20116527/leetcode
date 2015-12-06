/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var products = nums.slice().reverse();
    
    var len = nums.length;
    for(var i = 1; i < len; ++i){
        nums[i] *= nums[i - 1];
        products[i] *= products[i - 1];
    }
    
    var tmp = products.slice();
    products[0] = tmp[len -2];
    products[ len - 1 ] = nums[ len - 2 ];
    for(var i = 1; i < len - 1; ++i){
        products[i] = nums[i - 1] * tmp[len - i - 2];
    }
    
    
    
    return products;
};
