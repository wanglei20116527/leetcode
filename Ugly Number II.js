/**
 * @param {number} n
 * @return {number}
 */
 
 var nthUglyNumber = function(n){
     var two   = [1];
     var three = [1];
     var five  = [1];
     
     var result;
     
     for( var i = 0; i < n; ++i ){
         result = Math.min( two[0], Math.min(three[0], five[0]) );
         
         if( result == two[0]   ) two.shift()  ;
         if( result == three[0] ) three.shift();
         if( result == five[0]  ) five.shift() ;
         
         two.push( result * 2 );
         three.push( result * 3 );
         five.push( result * 5 );
     }
     
     return result;
 }
 
/*var nthUglyNumber = function(n) {
    if( n == 1 ){
        return 1;
    }
    
    var datas   = [ new Node(1) ];
    
    for(var i = 1; i < n; ++i){
        if( !datas[0].two ){
            datas[0].two = true;
            datas.push( new Node( datas[0].val * 2 ) );
            
        }else if( !datas[0].three ){
            var k   = 0;
            var val = datas[0].val * 3;
            
            var tmpIndex = 1;
            while( tmpIndex < datas.length ){
                if( !datas[ tmpIndex ].two ){
                    var tmpVal = datas[tmpIndex].val * 2;
                    if( tmpVal <= datas[datas.length - 1].val ){
                        datas[tmpIndex].two = true;
                        continue;
                    }
                    
                    if( tmpVal < val ){
                        k   = tmpIndex;
                        val = datas[tmpIndex].val * 2;
                    }
                    break;
                }
                
                ++tmpIndex;
            }
            
            if( tmpIndex == datas.length ){
                datas[k].two   = true;
            }else{
                datas[k].three = true;
            }
            
            datas.push( new Node( val ) );
            
        }else{
            var k    = 0;
            var val  = datas[0].val * 5;
            var type = 5;
            
            var tmpIndex = 1;
            while( tmpIndex < datas.length ){
                
                if( !datas[tmpIndex].two ){
                    var tmpVal = datas[tmpIndex].val * 2;
                    if( tmpVal <= datas[ datas.length - 1 ].val ){
                        datas[tmpIndex].two = true;
                        continue;
                    }
                    
                    if( tmpVal < val ){
                        k    = tmpIndex;
                        val  = datas[tmpIndex].val * 2;
                        type = 2;
                    }
                    break;
                    
                }else if( !datas[tmpIndex].three ){
                    var tmpVal = datas[tmpIndex].val * 3;
                    if( tmpVal <= datas[ datas.length - 1 ].val ){
                        datas[tmpIndex].three = true;
                        continue;
                    }
                    
                    if( datas[tmpIndex].val * 3 < val ){
                        k    = tmpIndex;
                        val  = datas[tmpIndex].val * 3;
                        type = 3;
                    }
                }
                
                
                ++tmpIndex;
            }
            
            datas.push( new Node( val ) );
            
            switch( type ){
                case 2:
                    datas[k].two = true;
                    break;
                case 3:
                    datas[k].three = true;
                    break;
                case 5:
                    datas.shift();
                    break;
            }
        }
    }
    
    return datas[ datas.length - 1 ].val;
    
};

var Node = function(val){
    this.val = val;
    this.two   = false;
    this.three = false;
    this.five  = false;
}*/