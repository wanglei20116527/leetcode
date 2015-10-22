

var searchRange = function(nums, target) {
	var length = nums.length;

    var startIndex = length;

    var start  = 0; 
    var end    = length - 1;
    while( start <= end ){
    	var middle = parseInt( (start + end) / 2 );

    	if( nums[middle] >= target ){
    		if(  nums[middle] == target ){
    			startIndex = middle;
    		}
    		end = middle - 1;
    	}else{
    		start = middle + 1;
    	}
    }

    if( startIndex == length ){
    	return [-1, -1];
    }


    var endIndex   = -1;

    var start  = 0; 
    var end    = length - 1;

    while( start <= end ){
    	var middle = parseInt( (start + end) / 2 );

    	if( nums[middle] <= target ){
    		if( nums[middle] == target ){
    			endIndex = middle;
    		}
    		start = middle + 1;
    	}else{
    		end = middle - 1; 
    	}
    }

    return [ startIndex, endIndex ];
};