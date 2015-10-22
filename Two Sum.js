/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    var len = nums.length;
    
    for(var i = 0; i < len; ++i){
        if( map[ nums[i] ] == undefined ){
            map[ nums[i] ] = [];
        }
        
        map[ nums[i] ].push( i + 1 );
    }
    
    var keys = Object.keys( map );
    
    for(var i = 0; i < keys.length; ++i){
        var minus = target - keys[i];
        
        if( map[minus] != undefined && map[ keys[i] ][0] < map[minus][ map[minus].length - 1  ]  ){
            return [ map[ keys[i] ][0],map[minus][ map[minus].length - 1  ] ];
        }
    }
    
};