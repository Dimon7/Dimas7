	var now = new Date();
	var main = document.createElement('div');
	main.id = "main";
	document.body.appendChild(main);

	function createCalendar(year, month){

		var date = new Date(year, month-1, 1);
		var NamefirstDay = date.getDay();

		var date1 = new Date(year, month, 0);
		var lastDay = date1.getDate();

		var cx=NamefirstDay;

		var k=1;
		cx--;
		if (cx==-1){cx=6;}
		var count=7-cx;
		var px = 6;
		if (cx==0 && lastDay==28) {px=5;}
		if (cx>=5 && lastDay>30) {px = 7;}

		var div = document.createElement('div');
		div.id = "div";
		main.appendChild(div);


		var tbl = document.createElement('table');

		div.appendChild(tbl);

		for (var i = 0; i < px; i++) {
			var tr = document.createElement("TR");
			tbl.appendChild(tr);

			for (var j = 0; j < 7; j++) {
				var th = document.createElement("TH");
				tr.appendChild(th);
			}
			if (i!=0){	tbl.children[i].children[6].style.color = "red"; }
		}
		tbl.children[0].id = "tr";

		for(var i=0; i < 7; i++) {tbl.children[0].children[i].id = "th";}

			var days = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];

		for(var i=0; i < 7; i++){ tbl.children[0].children[i].innerHTML=days[i];}

			while(k<=count){

				tbl.children[1].children[cx].innerHTML = k;
				k++;
				cx++;
				if(month-1 == now.getMonth() && k-1 == now.getDate() && year==now.getFullYear() ) {tbl.children[1].children[cx].style.color = "black";
				tbl.children[1].children[cx].style.background = "#FFF200"; }
			}

			for( var i=2; i < px; i++){

				for(var j=0; j < 7; j++){
					if(k<=lastDay){
						tbl.children[i].children[j].innerHTML=k;
						k+=1;

						if( month-1 == now.getMonth() && k-1 == now.getDate() && year==now.getFullYear() ) {tbl.children[i].children[j].style.color="black";
						tbl.children[i].children[j].style.background = "#FFF200"; }
					}

				}
			}


			var mn = ['Січень', 'Лютий', 'Березень','Квітень' ,'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень' ,'Листопад', 'Грудень'];

			var text = document.createElement("p");
			text.innerHTML = mn[month-1] +' '+year ;
			div.appendChild(text);

		}


		// var input1 = document.createElement('input');
		// input1.type="button"; input1.className = "btn-sample"; input1.id = "btn1"; input1.value = "<" ;
		//
		// var input2 = document.createElement('input');
		// input2.type="button"; input2.className = "btn-sample"; input2.id = "btn2"; input2.value = ">";


		// main.appendChild(input1);
		// main.appendChild(input2);

		var btnPrev = document.getElementById('btn1');
		var btnNext = document.getElementById('btn2');

		btnPrev.onclick = function(){
			var length = main.children.length;
			main.children[length-1].style.display = "none";
			month--;
			if (month<1) {year--; month=12;}
			createCalendar( year, month);
			length++;
		}

		var month = now.getMonth();
		var year = now.getFullYear();
		month++;
		createCalendar( year, month);

		btnNext.onclick = function(){
			var length = main.children.length;
			main.children[length-1].style.display = "none";
			month++;
			if (month>12) {year++; month=1;}
			createCalendar(year, month);

		}

		addEventListener("keydown", function(event) {
			if (event.keyCode == 37) {btnPrev.onclick()};
			if (event.keyCode == 39) {btnNext.onclick()};


		});
