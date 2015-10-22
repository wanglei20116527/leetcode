var getNextIndex = function( currentIndex, length, direction ){
	var index;
	if( direction == 0 ){ // left
		index = currentIndex == 0 ? length - 1 : currentIndex - 1;
	}else{ // right
		index = currentIndex + 1 == length ? 0 : currentIndex + 1;
	}
	return index;
};

var canCompleteCircuit = function(gas, cost) {
	var length = gas.length;

	for( var i = 0; i < length; ++i ){
		if( gas[i] - cost[i] < 0 ){
			continue;
		}
		var amount = gas[i] - cost[i];
		var currentIndex = i; 
		var targetIndex  = i;
		while( amount >= 0 ){
			currentIndex = getNextIndex( currentIndex, length, 1 );

			if( currentIndex == targetIndex ){
				return i;
			}

			amount += gas[currentIndex] - cost[currentIndex];
		}

		if( currentIndex < i ){
			break;
		}else{
			i = currentIndex;
		}
	}


    return -1;
};