/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length == 0){
        return 0;
    }
    
    var profit = 0;
    var start  = 0;
    var curt   = 1;
    var len    = prices.length
    
    while(curt < len){
       if( prices[curt] < prices[curt -1] ){
           if( curt - start > 1 ){
               profit += prices[curt - 1] - prices[start];   
           }
           start  = curt; 
       }
       
       curt++;
    }
    
    if( curt - start > 1 ){
        profit += prices[curt - 1] - prices[start];   
    }
    
    return profit;
};