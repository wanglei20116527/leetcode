var searchInsert = function(nums, target) {
    var start = 0;
    var end   = nums.length - 1;

    while( start <= end ){
    	var middle = parseInt( (start + end) / 2 );

    	if( nums[middle] == target ){
    		return middle;
    	}else if( nums[ middle ] < target ){
    		start = middle + 1;
    	}else {
    		end = middle - 1;
    	}
    }

    return start;
};