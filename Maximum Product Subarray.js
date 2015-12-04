/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if( nums == null || nums.length == 0){
      return 0;
  }
  
  var product = nums[0];
  
  var minProduct = nums[0];
  var maxProduct = nums[0];
  
  for(var i = 1; i < nums.length; ++i){
      product = Math.max( maxProduct * nums[i], product, nums[i] * minProduct, nums[i]);
      
      if(nums[i] > 0){

          if( maxProduct <= 0 ){
              maxProduct = nums[i];
          }else{
              maxProduct *= nums[i];
          }
          
          if( minProduct > 0 ){
              minProduct = nums[i];
          }else{
              minProduct *= nums[i];
          }
      }else if(nums[i] < 0){
    
          var tmpMaxProduct = 1;
          if( minProduct > 0 ){
              tmpMaxProduct = nums[i]; 
          }else{
              tmpMaxProduct = minProduct * nums[i];
          }
          
          var tmpMinProduct = 1;
          if( maxProduct <= 0 ){
              tmpMinProduct = nums[i];
          }else{
              tmpMinProduct = maxProduct * nums[i];
          }
          
          maxProduct = tmpMaxProduct;
          minProduct = tmpMinProduct;
          
      }else{
          minProduct = 0;
          maxProduct = 0;
      }
  }
  
  return product;
};



