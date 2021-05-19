//флаг-для появления финиша
let e=0;
//флажок-взял мышку или нет
let a=0;
//показатель в какой части карты находиться кошка
let win=1;
//показатель в какой части карты игры хард находиться кошка
let wins=1;
//показатель запуска времени обычного режима
let time=0;
//показатель запуска времени фона на харде
let teme=0;
//таймер для обычного режима
let timer;
//таймер для харда
let tim;
//Перемнные для счетчика времени
let h=0,m=0,s=0,ms=0;
//показатель в обычном режиме пользователь или на харде
let as=0;
//таймер для движения жуков
let glt;
//таймер обратного времени симулятора
let temi=0;
let sec=30;
let msec=0;
//значение поля рейтинга
let veta;
//количество поманных жуков
let j=0;
//показатель рейтинга симулятора
let sim=6;
//показатель как пользователь вышел из игры
let out=0;
//количество жуков в симуляторе
let risk=15;
//показатель взял первый цветок или нет
let fl=0
//показатель взял второй цветок или нет
let fl1=0
//показатель взял третий цветок или нет
let fl2=0
//количество собранных цветов
let flaw=0;
//
let valv,a1,a2,a3,a4,a5;
let valve,ab1,ab2,ab3,ab4,ab5;
let out1=0;

(function() {
$(document).ready(function () {
	//изменение надписи рейтинга
	veta=$("#nam").html();
	$("#nam").html(veta+"Рейтинг");

	//отслеживание нажатия кнопок на экране
	$("#start1").click(start1);
	$("#start2").click(start2);
	//процесс изменения надписи рейтинга
	$("#start1").mouseover(cats);
	$("#start1").mouseout(cats1);

	$("#start2").mouseover(juk);
	$("#start2").mouseout(juk1);

	$("#first1").click(first1);
	$("#endlevel").click (back);
	$("#endlevel1").click (back1);

	$("#first1").mouseover(milo);



	//Возврат в главное меню через кнопку Esc
	$("body").keydown(function(event){
		if(event.code=="Escape"){
			back();
			back1();
		}
	});
	//
	for (var i = 0; i < risk; i++) {
	  $("#window3").prepend($("<div>",{
	      "class":"pleyer",
	      "css":{
	        "top": Math.random()*600+"px",
	        "left": Math.random()*850+"px"
      	}
    }));}
	  $(".pleyer").click(Juki);

	$("#purpose").css({
		"top":Math.random()*620+"px",
		"left":Math.random()*620+"px"
	});
	

//Управление клавишами с клавиатуры 
	$("body").keydown(function(event) {
		if(as==1){
			if (event.code == 'ArrowUp' || event.code=='KeyW') {
				up();
				if(a==0){
					if(parseInt($("#player").css("top"))>=parseInt($("#purpose").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#purpose").css("top"))+25 && parseInt($("#player").css("left"))>=parseInt($("#purpose").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#purpose").css("left"))+25){
						a=1;
						dark();
					}
				}
				//контроль переходов между частями карты
				if(win==1 && parseInt($("#player").css("top"))<=4){
					per13();
				}
				if(win==2 && parseInt($("#player").css("top"))<=4){
					per24();
				}
				//цветочек на 2 части карты
				if(win==2 && parseInt($("#player").css("top"))>=parseInt($("#flower").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower").css("top"))+35 && parseInt($("#player").css("left"))>=parseInt($("#flower").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower").css("left"))+35){
					if(fl==0){
						$("#flower").hide();
						fl=1;
						mouse();
						console.log("fl "+fl);
					}
				}
				//цветочек на 3 части карты
				if(win==3 && parseInt($("#player").css("top"))>=parseInt($("#flower1").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower1").css("top"))+35 && parseInt($("#player").css("left"))>=parseInt($("#flower1").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower1").css("left"))+35){
					if(fl1==0){
						$("#flower1").hide();
						fl1=1;
						mouse();
						console.log("fl1 "+fl1);
					}
				}
				//цветочек на 4 части карты
				if(win==4 && parseInt($("#player").css("top"))>=parseInt($("#flower2").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower2").css("top"))+35 && parseInt($("#player").css("left"))>=parseInt($("#flower2").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower2").css("left"))+35){
					if(fl2==0){
						$("#flower2").hide();
						fl2=1;
						mouse();
						console.log("fl2 "+fl2);
					}
				}
			}
			if (event.code == 'ArrowDown' || event.code=='KeyS') {
				down();
				if(a==0){
					if(parseInt($("#player").css("top"))+30>=parseInt($("#purpose").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#purpose").css("top"))+25 && parseInt($("#player").css("left"))+30>=parseInt($("#purpose").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#purpose").css("left"))+25){
						a=1;
						dark();
					}
				}
				//контроль переходов между частями карты
				if(win==3 && parseInt($("#player").css("top"))>=625){
					per31();
				}
				if(win==4 && parseInt($("#player").css("top"))>=625){
					per42();
				}
				//пришел или нет к финишу
				if(e==1){
					if(parseInt($("#player").css("top"))+30>=600 && parseInt($("#player").css("left"))<=40){
						finish();
					}
				}
				//цветочек на 2 части карты
				if(win==2 && parseInt($("#player").css("top"))+30>=parseInt($("#flower").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower").css("top"))+35 && parseInt($("#player").css("left"))+30>=parseInt($("#flower").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower").css("left"))+35){
					if(fl==0){
						$("#flower").hide();
						fl=1;
						mouse();
						console.log("fl "+fl);
					}
				}
				//цветочек на 3 части карты
				if(win==3 && parseInt($("#player").css("top"))+30>=parseInt($("#flower1").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower1").css("top"))+35 && parseInt($("#player").css("left"))+30>=parseInt($("#flower1").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower1").css("left"))+35){
					if(fl1==0){
						$("#flower1").hide();
						fl1=1;
						mouse();
						console.log("fl1 "+fl1);
					}
				}
				//цветочек на 4 части карты
				if(win==4 && parseInt($("#player").css("top"))+30>=parseInt($("#flower2").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower2").css("top"))+35 && parseInt($("#player").css("left"))+30>=parseInt($("#flower2").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower2").css("left"))+35){
					if(fl2==0){
						$("#flower2").hide();
						fl2=1;
						mouse();
						console.log("fl2 "+fl2);
					}
				}
			}
			if (event.code == 'ArrowLeft'|| event.code=='KeyA') {
				left();
				if(a==0){
					if(parseInt($("#player").css("left"))>=parseInt($("#purpose").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#purpose").css("left"))+25 && parseInt($("#player").css("top"))+30>=parseInt($("#purpose").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#purpose").css("top"))+25){
						a=1;
						dark();
					}
				}
				//контроль переходов между частями карты
				if(win==2 && parseInt($("#player").css("left"))<=5){
					per21();
				}
				if(win==4 && parseInt($("#player").css("left"))<=5){
					per43();
				}
				//пришел или нет к финишу
				if(e==1){
					if(parseInt($("#player").css("top"))+30>=600 && parseInt($("#player").css("left"))<=30){
						finish();
					}
				}
				//цветочек на 2 части карты
				if(win==2 &&parseInt($("#player").css("left"))>=parseInt($("#flower").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower").css("left"))+35 && parseInt($("#player").css("top"))+30>=parseInt($("#flower").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower").css("top"))+35){
					if(fl==0){
						$("#flower").hide();
						fl=1;
						mouse();
						console.log("fl "+fl);
					}
				}
				//цветочек на 3 части карты
				if(win==3 &&parseInt($("#player").css("left"))>=parseInt($("#flower1").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower1").css("left"))+35 && parseInt($("#player").css("top"))+30>=parseInt($("#flower1").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower1").css("top"))+35){
					if(fl1==0){
						$("#flower1").hide();
						fl1=1;
						mouse();
						console.log("fl1 "+fl1);
					}
				}
				//цветочек на 4 части карты
				if(win==4 &&parseInt($("#player").css("left"))>=parseInt($("#flower2").css("left")) && parseInt($("#player").css("left"))<=parseInt($("#flower2").css("left"))+35 && parseInt($("#player").css("top"))+30>=parseInt($("#flower2").css("top")) && parseInt($("#player").css("top"))+30<=parseInt($("#flower2").css("top"))+35){
					if(fl2==0){
						$("#flower2").hide();
						fl2=1;
						mouse();
						console.log("fl2 "+fl2);
					}
				}
			}
			if (event.code == 'ArrowRight'|| event.code=='KeyD') {
				right();
				if(a==0){
					if(parseInt($("#player").css("left"))+30>=parseInt($("#purpose").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#purpose").css("left"))+25 && parseInt($("#player").css("top"))>=parseInt($("#purpose").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#purpose").css("top"))+25){
						a=1;
						dark();
					}
				}
				//контроль переходов между частями карты
				if(win==1 && parseInt($("#player").css("left"))>=625){
					per12();
				}
				if(win==3 && parseInt($("#player").css("left"))>=625){
					per34();
				}
				//цветочек на 2 части карты
				if(win==2 && parseInt($("#player").css("left"))+30>=parseInt($("#flower").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower").css("left"))+35 && parseInt($("#player").css("top"))>=parseInt($("#flower").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower").css("top"))+35){
					if(fl==0){
						$("#flower").hide();
						fl=1;
						mouse();
						console.log("fl "+fl);
					}
				}
				//цветочек на 3 части карты
				if(win==3 && parseInt($("#player").css("left"))+30>=parseInt($("#flower1").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower1").css("left"))+35 && parseInt($("#player").css("top"))>=parseInt($("#flower1").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower1").css("top"))+35){
					if(fl1==0){
						$("#flower1").hide();
						fl1=1;
						mouse();
						console.log("fl1 "+fl1);
					}
				}
				//цветочек на 4 части карты
				if(win==4 && parseInt($("#player").css("left"))+30>=parseInt($("#flower2").css("left")) && parseInt($("#player").css("left"))+30<=parseInt($("#flower2").css("left"))+35 && parseInt($("#player").css("top"))>=parseInt($("#flower2").css("top")) && parseInt($("#player").css("top"))<=parseInt($("#flower2").css("top"))+35){
					if(fl2==0){
						$("#flower2").hide();
						fl2=1;
						mouse();
						console.log("fl2 "+fl2);
					}
				}
				
			}
		}
	});


});
//Запуск игры на время
function first1(){
	time++;
	$("#fan").hide();
	$("#strah").hide();
	$("#strah1").hide();
	$("#window1").css("backgroundImage","url(image/map1.png)");
	if(as==2){
		$("#window2").hide();
		$("#hardkor").hide();
	}
	$("#window1").show();
	$("#player").show();
	if(time==1)
		timer=setInterval(timer1,10);
	$("#player").css({
		"top":Math.random()*630+"px",
		"left":Math.random()*630+"px"
	});
	as=1;
}
//заставка для обычного режима
function milo(){
	if(as==0){
	$("#fan").show();
	$("#fan").css("backgroundImage","url(image/fan.png)");
	$("#strah").hide();
	$("#strah1").hide();
	clearInterval(timerTimerId1);
	timerTimerId1=null;
	flagflag1=false;

	}
}
//окна кошки-мышки
function start1(){
	$("#reiting").hide();
	$("#onescreen").hide();
	$("#game").show();
	$("#fan").show();
	$("#nam").hide();
	$("body").css("backgroundImage","url(image/коты.png)");
}
//отображение рейтинга кошки-мышки
function cats(){
		$("#nam").html(veta+"Кошки-мышки");
		let dar=$("#reiting").html();
		if(localStorage.getItem(1)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(1)+'<br>');
		else if(localStorage.getItem(1)==null) $("#reiting").html(dar+"Нет результатов");
		if(localStorage.getItem(2)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>');
		if(localStorage.getItem(3)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>');
		if(localStorage.getItem(4)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>'+"4. "+localStorage.getItem(4)+'<br>');
		if(localStorage.getItem(5)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(1)+'<br>'+"2. "+localStorage.getItem(2)+'<br>'+"3. "+localStorage.getItem(3)+'<br>'+"4. "+localStorage.getItem(4)+'<br>'+"5. "+localStorage.getItem(5)+'<br>');
}
//скрытие рейтинга кошки-мышки
function cats1(){
	$("#nam").html(veta+"Рейтинг");
	$("#reiting").html("");
}
//
function mouse(){
	if((fl+fl1+fl2)==1){
		$("#hu").html("X1");
		console.log("r"+1);
	}
	if((fl+fl1+fl2)==2){
		$("#hu").html("X2");
		console.log("r"+2);
	}
	if((fl+fl1+fl2)==3){
		$("#hu").html("X3");
		console.log("r"+3);
	}

	if(fl==1 && fl1==1 && fl2==1){
		$("#purpose").show();
		console.log("мышь");
	}
}
//показать рейтинг Симулятора
function juk(){
	$("#nam").html(veta+"Симулятор общаги");
	let dar=$("#reiting").html();
		if(localStorage.getItem(6)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(6)+'<br>');
		else if(localStorage.getItem(6)==null) $("#reiting").html(dar+"Нет результатов");
		if(localStorage.getItem(7)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(6)+'<br>'+"2. "+localStorage.getItem(7)+'<br>');
		if(localStorage.getItem(8)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(6)+'<br>'+"2. "+localStorage.getItem(7)+'<br>'+"3. "+localStorage.getItem(8)+'<br>');
		if(localStorage.getItem(9)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(6)+'<br>'+"2. "+localStorage.getItem(7)+'<br>'+"3. "+localStorage.getItem(8)+'<br>'+"4. "+localStorage.getItem(9)+'<br>');
		if(localStorage.getItem(10)!=null) $("#reiting").html(dar+"1. "+localStorage.getItem(6)+'<br>'+"2. "+localStorage.getItem(7)+'<br>'+"3. "+localStorage.getItem(8)+'<br>'+"4. "+localStorage.getItem(9)+'<br>'+"5. "+localStorage.getItem(10)+'<br>');
}
//скрыть рейтинг Симулятора
function juk1(){
	$("#nam").html(veta+"Рейтинг");
	$("#reiting").html("");
}
//окно симулятора общаги
function start2(){
	$("#reiting").hide();
	$("#onescreen").hide();
	$("#gamer").show();
	$("#window3").show();
	$("#nam").hide();
	$("body").css("backgroundImage","url(image/ajy.png)");
	glt=setInterval(gltimer,450);
	temi=setInterval(Temi,10);
}
//таймер обратного времени симулятора
function Temi(){
	$("#e3").html(sec+":"+msec);
	if(msec==0){
		sec--;
		msec=99;
	}
	msec--;
	if(sec==0 && msec==0){ 
		alert("Время вышло. Ваш результат "+j);
		out=1;
		back1();
	}
}
//когда тыкаешь на жука
function Juki(){
	j++;
	console.log(j);
	$(this).hide();
	if(j==risk){
		let f=Math.floor(Math.random()*3);
		if(f==0)
			alert("Вау! А ты хорош! 15 это много!");
		else if(f==1)
			alert("Ух ты! Молодец! 15 мало кто набирал!");
		else if(f==2)
			alert("Тебе норм?! Как ты собрал 15? Это много!");
		out=1;
		back1();
	}
}
//Возврат из игры кошки-мышки
function back(){
	if(out1==1){
		valve=$("#time").val().split(":");
		if(valve[3]<10)
			valv=parseInt(valve[3])*10+parseInt(valve[2])*100+parseInt(valve[1])*100*60;
		else valv=parseInt(valve[3])+parseInt(valve[2])*100+parseInt(valve[1])*100*60;


		if(localStorage.getItem(5)!=null){
			a1=localStorage.getItem(1).split(":");
			a2=localStorage.getItem(2).split(":");
			a3=localStorage.getItem(3).split(":");
			a4=localStorage.getItem(4).split(":");
			a5=localStorage.getItem(5).split(":");

			if(a1[3]<10)
				ab1=parseInt(a1[3])*10+pasreInt(a1[2])*100+parseInt(a1[1])*100*60;
			else ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			console.log(a1);
			if(a2[3]<10)
				ab2=parseInt(a2[3])*10+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			else ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			console.log(a2); 
			if(a3[3]<10)
				ab3=parseInt(a3[3])*10+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			else ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			console.log(a3);
			if(a4[3]<10)
				ab4=parseInt(a4[3])*10+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
			else ab4=parseInt(a4[3])+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
			console.log(a4);
			if(a5[3]<10)
				ab5=parseInt(a5[3])*10+parseInt(a5[2])*100+parseInt(a5[1])*100*60;
			else ab5=parseInt(a5[3])+parseInt(a5[2])*100+parseInt(a5[1])*100*60;
			console.log(a5);

				if(valv>ab5){
					console.log("No");
				}
				if(valv<ab5 && valv>ab4){
					localStorage.setItem(5,$("#time").val());
				}
				if(valv<ab4 && valv>ab3){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,$("#time").val());
				}
				if(valv<ab3 && valv>ab2){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,$("#time").val());
				}
				if(valv<ab2 && valv>ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,$("#time").val());
				}
				if(valv<ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,$("#time").val());
				}
		}
		if(localStorage.getItem(4)!=null){
			a1=localStorage.getItem(1).split(":");
			a2=localStorage.getItem(2).split(":");
			a3=localStorage.getItem(3).split(":");
			a4=localStorage.getItem(4).split(":");

			if(a1[3]<10)
				ab1=parseInt(a1[3])*10+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			else ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			console.log(a1);
			if(a2[3]<10)
				ab2=parseInt(a2[3])*10+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			else ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			console.log(a2); 
			if(a3[3]<10)
				ab3=parseInt(a3[3])*10+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			else ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			console.log(a3);
			if(a4[3]<10)
				ab4=parseInt(a4[3])*10+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
			else ab4=parseInt(a4[3])+parseInt(a4[2])*100+parseInt(a4[1])*100*60;
			console.log(a4);
		
				if(valv>ab4){
					localStorage.setItem(5,$("#time").val());
				}
				if(valv<ab4 && valv>ab3){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,$("#time").val());
				}
				if(valv<ab3 && valv>ab2){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,$("#time").val());
				}
				if(valv<ab2 && valv>ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,$("#time").val());
				}
				if(valv<ab1){
					localStorage.setItem(5,localStorage.getItem(4));
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,$("#time").val());
				}
		}
		if(localStorage.getItem(3)!=null){
			a1=localStorage.getItem(1).split(":");
			a2=localStorage.getItem(2).split(":");
			a3=localStorage.getItem(3).split(":");

			if(a1[3]<10)
				ab1=parseInt(a1[3])*10+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			else ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			console.log(a1);
			if(a2[3]<10)
				ab2=parseInt(a2[3])*10+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			else ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			console.log(a2); 
			if(a3[3]<10)
				ab3=parseInt(a3[3])*10+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			else ab3=parseInt(a3[3])+parseInt(a3[2])*100+parseInt(a3[1])*100*60;
			console.log(a3);


				if(valv>ab3){
					localStorage.setItem(4,$("#time").val());
				}
				if(valv<ab3 && valv>ab2){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,$("#time").val());
				}
				if(valv<ab2 && valv>ab1){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,$("#time").val());
				}
				if(valv<ab1){
					localStorage.setItem(4,localStorage.getItem(3));
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,$("#time").val());
				}
		}
		if(localStorage.getItem(2)!=null){
			a1=localStorage.getItem(1).split(":");
			a2=localStorage.getItem(2).split(":");

			if(a1[3]<10)
				ab1=parseInt(a1[3])*10+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			else ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			console.log(a1);
			if(a2[3]<10)
				ab2=parseInt(a2[3])*10+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			else ab2=parseInt(a2[3])+parseInt(a2[2])*100+parseInt(a2[1])*100*60;
			console.log(a2);

				if(valv>ab2){
					localStorage.setItem(3,$("#time").val());
				}
				if(valv<ab2 && valv>ab1){
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,$("#time").val());
				}
				if(valv<ab1){
					localStorage.setItem(3,localStorage.getItem(2));
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,$("#time").val());
				}
		}
		if(localStorage.getItem(1)!=null){
			a1=localStorage.getItem(1).split(":");

			if(a1[3]<10)
				ab1=parseInt(a1[3])*10+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			else ab1=parseInt(a1[3])+parseInt(a1[2])*100+parseInt(a1[1])*100*60;
			console.log(a1);
			

				if(valv>ab1){
					localStorage.setItem(2,$("#time").val());
				}
				if(valv<ab1){
					localStorage.setItem(2,localStorage.getItem(1));
					localStorage.setItem(1,$("#time").val());
				}
		}

		else {
			localStorage.setItem(1,$("#time").val());
		}
	}
	$("#reiting").show();
	$("#hu").html("");
	$("#nam").show();
	$("#game").hide();
	$("#window1").hide();
	$("#onescreen").show();
	$("#one").show();
	$("#two").hide();
	$("#three").hide();
	$("#four").hide();
	$("#purpose").hide();
	$("#flower").show();
	$("#flower1").show();
	$("#flower2").show();
	clearInterval(timerTimerId1);
	timerTimerId1=null;
	flagflag1=false;
	clearInterval(teme);
	clearInterval(timer);
	timer=null;
	h=0;
	m=0;
	s=0;
	ms=0;
	$("#finish").hide();
	$("#purpose").css("backgroundImage",'url(image/mouse1.png)');
	e=0;
	a=0;
	as=0;
	time=0;
	teme=null;
	win=1;
	fl=0;
	fl1=0;
	fl2=0;
	$("body").css("backgroundImage","url()");
	$("#fan").css("backgroundImage","url()");
}
//Возврат из игры Симулятор общаги
function back1(){
	$("#reiting").show();
	$("#nam").show();
	$("#gamer").hide();
	$("#onescreen").show();
	$("body").css("backgroundImage","url()");
	clearInterval(glt);
	clearInterval(temi);
	sec=30;
	msec=0;
	temi=0;
	if(out==1){
		if(localStorage.getItem(10)!=null){
			if(j<parseInt(localStorage.getItem(10))){
				console.log("No");
			}
			if(j>parseInt(localStorage.getItem(10)) && j<parseInt(localStorage.getItem(9))){
				localStorage.setItem(10,j);
			}
			if(j>parseInt(localStorage.getItem(9)) && j<parseInt(localStorage.getItem(8))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,j);
			}
			if(j>parseInt(localStorage.getItem(8)) && j<parseInt(localStorage.getItem(7))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,j);
			}
			if(j>parseInt(localStorage.getItem(7)) && j<parseInt(localStorage.getItem(6))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,j);
			}
			else if(j>parseInt(localStorage.getItem(6))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,localStorage.getItem(6));
				localStorage.setItem(6,j);
			}

		}
		if(localStorage.getItem(9)!=null && localStorage.getItem(10)==null){
			if(j<localStorage.getItem(9)){
				localStorage.setItem(10,j);
			}
			if(j>localStorage.getItem(9) && j<parseInt(localStorage.getItem(8))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,j);
			}
			if(j>parseInt(localStorage.getItem(8)) && j<parseInt(localStorage.getItem(7))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,j);
			}
			if(j>parseInt(localStorage.getItem(7)) && j<parseInt(localStorage.getItem(6))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,j);
			}
			else if(j>parseInt(localStorage.getItem(6))){
				localStorage.setItem(10,localStorage.getItem(9));
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,localStorage.getItem(6));
				localStorage.setItem(6,j);
			}
		}
		if(localStorage.getItem(8)!=null && localStorage.getItem(9)==null){
			if(j<parseInt(localStorage.getItem(8))){
				localStorage.setItem(9,j);
			}
			if(j>parseInt(localStorage.getItem(8)) && j<parseInt(localStorage.getItem(7))){
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,j);
			}
			if(j>parseInt(localStorage.getItem(7)) && j<parseInt(localStorage.getItem(6))){
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,j);
			}
			else if(j>parseInt(localStorage.getItem(6))){
				localStorage.setItem(9,localStorage.getItem(8));
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,localStorage.getItem(6));
				localStorage.setItem(6,j);
			}
		}
		if(localStorage.getItem(7)!=null && localStorage.getItem(8)==null){
			if(j<parseInt(localStorage.getItem(7))){
				localStorage.setItem(8,j);
			}
			if(j>parseInt(localStorage.getItem(7)) && j<parseInt(localStorage.getItem(6))){
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,j);
			}
			else if(j>parseInt(localStorage.getItem(6))){
				localStorage.setItem(8,localStorage.getItem(7));
				localStorage.setItem(7,localStorage.getItem(6));
				localStorage.setItem(6,j);
			}
		}
		if(localStorage.getItem(6)!=null && localStorage.getItem(7)==null){
			if(j<parseInt(localStorage.getItem(6))){
				localStorage.setItem(7,j);
			}
			else if(j>parseInt(localStorage.getItem(6))){
				localStorage.setItem(7,localStorage.getItem(6));
				localStorage.setItem(6,j);
			}
		}
		if(localStorage.getItem(6)==null){
				localStorage.setItem(6,j);
		}

	}
	j=0;
	out=0;
	$(".pleyer").show();
	//console.log(localStorage.getItem(6));
	//console.log(localStorage.getItem(6)[0]);
}
//Момент когда "поймал" мышку
function dark(){
	if(win==1){
		$("#player").css("backgroundImage",'url(image/cat1.png)');
		$("#purpose").css("backgroundImage",'url()');
		$("#finish").show();
		e=1;
	}
}
//Счетчик времени
function timer1(){
	$("#time").val(h+":"+m+":"+s+":"+ms);
	ms++;
	if(ms==99){
		s++;
		ms=0;
	}
	if(s==59){
		m++;
		s=0;
	}
	if(m==59){
		h++
		m=0;
	}
}
//движение жука в симуляторе
function gltimer(){
	$('.pleyer').each(function (index, value){
	  var rand1 = Math.floor(Math.random() * 850);
	  var rand2 = Math.floor(Math.random() * 600);
	  $(this).css({
	  	"left":rand1 + 'px',
	  	"top":rand2+"px"
	  });
	});
}
//переходы между частями карты
//переход с первой части карты на вторую
function per12(){
	$("#flower").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#one").hide();
	$("#two").show();
	$("#player").css("left",5);
	$("#window1").css("backgroundImage",'url(image/map2.png)');
	win=2;

}
//переход с первой на третью
function per13(){
	$("#flower1").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#one").hide();
	$("#three").show();
	$("#player").css("top",625);
	$("#window1").css("backgroundImage","url(image/map3.png)");
	win=3;
}
//переход со второй части на первую
function per21(){
	$("#one").show();
	$("#two").hide();
	$("#player").css("left",625);
	$("#window1").css("backgroundImage","url(image/map1.png)");
	win=1;
}
//переход со второй на четвертую
function per24(){
	$("#flower2").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#four").show();
	$("#two").hide();
	$("#player").css("top",625);
	$("#window1").css("backgroundImage","url(image/map4.png)");
	win=4;
}
//переход  с третьей на первую
function per31(){
	$("#three").hide();
	$("#one").show();
	$("#player").css("top",5);
	$("#window1").css("backgroundImage","url(image/map1.png)");
	win=1;
}
//переход с третьей на четвертую
function per34(){
	$("#flower2").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#three").hide();
	$("#four").show();
	$("#player").css("left",5);
	$("#window1").css("backgroundImage","url(image/map4.png)");
	win=4;
}
//переход с четвертой на вторую
function per42(){
	$("#flower").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#two").show();
	$("#four").hide();
	$("#player").css("top",5);
	$("#window1").css("backgroundImage","url(image/map2.png)");
	win=2;
}
//переход с четвертой на третью
function per43(){
	$("#flower1").css({
		"top": Math.floor(Math.random()*620)+"px",
		"left":Math.floor(Math.random()*620)+"px"
	});
	$("#four").hide();
	$("#three").show();
	$("#player").css("left",625);
	$("#window1").css("backgroundImage","url(image/map3.png)");
	win=3;
}
//конец переходов



//Конец игры кошки-мышки 1
function finish(){
	$("#player").css("backgroundImage",'url(image/cat.png)');
	

	out1=1;
	console.log(localStorage.getItem(1));
	back();
	alert("Финиш! Ваше время-"+$("#time").val());
}
//Движение персонажа основной игры кошки-мышки
function up(){
	if(parseInt($("#player").css("top"))>4 && (win==3 ||win==4)){
		$("#player").css("top", function(index, old) {
  			return parseInt(old) -7 + "px"});
	}
	else if(win==1 || win==2){
		$("#player").css("top", function(index, old) {
  			return parseInt(old) -7 + "px"});
	}
}
function down(){
	if(parseInt($("#player").css("top"))<620 && (win==1 || win==2)){
		$("#player").css("top", function(index, old) {
  			return parseInt(old) +7 + "px"});
	}
	else if(win==3 || win==4){
		$("#player").css("top", function(index, old) {
  			return parseInt(old) +7 + "px"});
	}
}
function left(){
	if(parseInt($("#player").css("left"))>4 && (win==1 || win==3)){
		$("#player").css("left", function(index, old) {
  			return parseInt(old) -7 + "px"});
	}
	else if(win==2 || win==4){
		$("#player").css("left", function(index, old) {
  			return parseInt(old) -7 + "px"});
	}
}
function right(){
	if(win==1 || win==3){
		$("#player").css("left", function(index, old) {
  			return parseInt(old) +7 + "px"});
	}
	else if(parseInt($("#player").css("left"))<620 && (win==2 || win==4)){
		$("#player").css("left", function(index, old) {
  			return parseInt(old) +7 + "px"});
	}
}
})();