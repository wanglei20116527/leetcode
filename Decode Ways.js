var func = function( num ){
	if( num <= 2 ){
		return num;
	}

	return func( num - 1 ) + func( num - 2 );
};

var numDecodings = function(s) {
	if( !s ){
		return 0;
	}

	var count = 1;

	var i = 0;
	while( i < s.length ){
		if( s[i] == "1" || s[i] == "2" ){
			var num = 1;
			++i;
			while( i < s.length ){
				if( s[i] == "1" || s[i] == "2" ){
					++num;
					++i;
				}else if( s[i] == "0" ){
					--num;
					++i;
					break;
				}else{
					if( parseInt(s[i]) <= 6 || s[i - 1] == "1"){
						++num;
					}
					++i;
					break;
				}
			}

			if( num > 0 ){
				count *= func( num );
			}
		}else if( s[i] == "0" ){
			return 0;
		}else{
			++i;
		}
	}

	return count;
};