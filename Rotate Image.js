var rotate = function(matrix) {
  	var n = matrix.length;

  	var tempMatrix = [];

  	for( var i = 0; i < n; ++i ){
  		tempMatrix[i] = matrix[i].slice();
  	}

  	for( var i = 0; i < n; ++i ){
  		for( var j = 0; j < n; ++j ){
  			matrix[j][ n - i - 1 ] = tempMatrix[i][j];
  		}
  	}  

};