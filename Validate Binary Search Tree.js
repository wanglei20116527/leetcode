var isValidBST = function( root ) {
    if( root.length == 0 && root.length == 1 ){
    	return true;
    }

  	for( var i = 0; i < root.length; ++i ){
  		if( root[i] == "#" ){
  			continue;
  		}

  		var left = ( i + 1 ) * 2 - 1;

  		if( left < root.length && root[i] <= root[left] ){
  			return false;
  		}

  		var right = ( i + 1 ) * 2;

  		if( right < root.length && root[i] >= root[right] ){
  			return false;
  		}
  	}

  	return true;
};