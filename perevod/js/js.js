function bukva( cx ) {
	var ch;
switch ( cx ) {

                case 10 : ch = "A"; break;
                case 11 : ch = "B"; break;
                case 12 : ch = "C"; break;
                case 13 : ch = "D"; break;
                case 14 : ch = "E"; break;
                case 15 : ch = "F"; break;

                default : ch = cx;
            }
     return ch;       
}


function before_coma(b, o) {
	var mas1 = [];
	
    var i = 0;
    while (b >= o){

        mas1[i] = b % o;
        b = (b-b%o)/o;
        i++;
    }

    mas1[i]=b;
    if (o>10 ) {
        for (var j = i; j >=0; j--) {
			mas1[j] = bukva(mas1[j]);
        }
    }

	return mas1.reverse();
};


function after_coma(a,o){
    var mas2 = [];
    var i =0;
    while(i<=7){

        a = a * o;
        if (a > 0.0){
            var cile = a % 1;
            mas2[i] = a - cile;
            a = cile;
        }
        else{
            mas2[i]=0;
        }

        i++;
    }


if (o>10) {
    for (var j = 0; j < i; j++) {
			mas2[j] = bukva(mas2[j]);
    }


    return mas2;
}
};


$('#click').on('mousedown',function(){
        var val =  parseFloat($('.val').val());
        var o =  parseInt($('.osnova').val());
        

        var after = val % 1;
        var before = val - after;


       var ret1  = before_coma(before,o);
       var ret2 = after_coma(after,o);
       var str1 = ret1.join("");
       var str2 = ret2.join("");
       
       if (after === 0 ) { $('.answer-input').val(str1); }
       else{   $('.answer-input').val(str1+"."+str2);
    }
 
});	    

