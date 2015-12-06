/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    if( nums.length == 0 ){
        return [];
    }
    
    nums.sort(function(a, b){
        return a - b;
    });
    var tmp = {};
    solution(0, [], nums, tmp);
    
    var subset = [];
    
    var keys = Object.keys( tmp );
    for(var i = 0; i < keys.length; ++i){
        subset.push( tmp[ keys[i] ] );
    }
    
    return subset;

};

function solution( index, curt, nums, result ){
    if(index == nums.length){
       var key = curt.join(' ');
       result[ key ] = curt;
       return;
    }
    
    var tmpCurt1 = curt.slice();
    tmpCurt1.push( nums[ index ] );
    solution( index + 1, tmpCurt1, nums, result );
    
    var tmpCurt2 = curt.slice();
    solution( index + 1, tmpCurt2, nums, result );
}
