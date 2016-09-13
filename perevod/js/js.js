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
}

    return mas2;

};


function Perevod(){
        var val =  parseFloat($('.val').val());
        // var o =  parseInt($('.osnova').val());
        var o = 2;

        var after = val % 1;
        var before = val - after;


       var ret1  = before_coma(before,o);
       var ret2 = after_coma(after,o);
       var str1 = ret1.join("");
       if (after > 0){ var str2 = ret2.join(""); }
       
       if (after === 0 ) { $('.answer-input').val(str1); }
       else{   $('.answer-input').val(str1+"."+str2);
    }
 
};	    

var s="";
var eq="";
$('.calc').on('mousedown', function(event){
	
	
	var target = event.target.getAttribute('id');
	
	switch(target){
		case "btn-1" : s = s + 1; break;
		case "btn-2" : s = s + 2; break;
		case "btn-3" : s = s + 3; break;
		case "btn-4" : s = s + 4; break;
		case "btn-5" : s = s + 5; break;
		case "btn-6" : s = s + 6; break;
		case "btn-7" : s = s + 7; break;
		case "btn-8" : s = s + 8; break;
		case "btn-9" : s = s + 9; break;
		case "btn-0" : s = s + 0; break;
		case "btn-point" : s = s + '.'; break;
		case "btn-clear" : s=s.substring(0, s.length - 1); break;
		case "btn-eq" : Perevod(); break;
		case "btn-c" : s = "";
		$('.answer-input').val(""); break;
		default : break;

	}
	// var  = target.getAttribute('data-toggle-id');

	$('.val').val(s);
	
	

});
//  var menuElem = document.getElementById('sweeties');
//     var titleElem = menuElem.querySelector('.title');

// $('.menu').on('mousedown', function(event){
//     var target = event.currentTarget;
//       // $(menuElem).removeClass();	
      
//        target.classList.toggle('open');
      
//       	// var tar = event.target.getAttribute('class');
      	

//     });  