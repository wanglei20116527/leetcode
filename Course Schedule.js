var getInputDegreeOfZero = function( inputDegreeArray, courseFinished ){
	var length = inputDegreeArray.length;

	for( var i = 0; i < length; ++i ){
		if( !courseFinished[i] && inputDegreeArray[i] <= 0 ){
			courseFinished[i] = true;
			return i;
		}
	}

	return -1;
};


var removeCourse = function(matrix, course, inputDegreeArray ){
	var length = matrix[ course ].length;

	for( var i = 0; i < length; ++i ){
		inputDegreeArray[ matrix[course][i] ]--;
	}
};

var canFinish = function(numCourses, prerequisites) {
	var inputDegreeArray = new Array( numCourses );
	for( var i = 0; i < numCourses; ++i ){
		inputDegreeArray[i] = 0;
	}

	var matrix = new Array( numCourses );
	for( var i = 0; i < numCourses; ++i ){
		matrix[i] = [];
	}

	var length = prerequisites.length;
	for( var i = 0; i < length; ++i ){
		++inputDegreeArray[ prerequisites[i][0] ];

		matrix[ prerequisites[i][1] ].push( prerequisites[i][0] );
	}

	var courseFinished = new Array( numCourses );

	var count = 0;
	while( count < numCourses ){
		var course = getInputDegreeOfZero( inputDegreeArray, courseFinished );

		if( course == -1 ){
			break;
		}

		count++;

		removeCourse(matrix, course, inputDegreeArray );
	}

	return count == numCourses;
};