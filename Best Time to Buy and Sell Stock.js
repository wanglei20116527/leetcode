/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    var profit = 0;
    var len   = prices.length;
    var index = 0;
    for(var i = 1; i < len; ++i){
        profit = Math.max( profit, prices[i] - prices[index] );
        if(prices[i] < prices[index]){
            index = i;
        }
    }
    
    return profit;
};
