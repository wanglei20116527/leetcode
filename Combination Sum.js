var combinationSum = function(candidates, target) {
    candidates.sort(function(a, b){
    	return a - b;
    });
    var result = [];

    solution( candidates, target, 0, 0, [], result);

    return result;
};

var solution = function( sourceData, target, index, sum, candidate, result ){
	if( index >= sourceData.length || sum > target ){
		return;
	}

	if( target == sum ){
		result.push( candidate.slice() );
		return;
	}

	for( var i = index; i < sourceData.length; ++i ){
		var tempCandidate = candidate.slice();
		tempCandidate.push( sourceData[i] );
		solution( sourceData, target, i, sum + sourceData[i], tempCandidate, result );
	}
};