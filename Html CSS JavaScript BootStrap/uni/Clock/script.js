var Hour = document.getElementById('hour');
var Minute = document.getElementById('min');
var Second = document.getElementById('sec');

function myFunction() {

	var date = new Date();
	var hours = date.getHours() % 12;
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	var hourDeg = (hours * 30) + (0.5 * minutes); //every hour - 30deg => 30/60 = 1/2 = 0.5
	var minDeg = (minutes * 6) +(0.1 * seconds); //every minute - 6deg => 6/60 = 1/10 = 0.1
	var secDeg = seconds * 6;

	Hour.style.transform = 'rotate('+ hourDeg + 'deg)';
	Minute.style.transform = 'rotate('+ minDeg + 'deg)';
	Second.style.transform = 'rotate('+ secDeg + 'deg)';

	setTimeout(myFunction, 1000);
};

myFunction();

function digClock(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var clock = document.getElementById('myClock');
	var session = 'AM';

	if (h==0) {
		h=12;
	}
	if (h>12) {
		session = 'PM';
	}
	if (m<10) {
		m = '0' + m;
	}
	if (s<10) {
		s = '0' + s;
	}

	var time = h+':'+m+':'+s+' '+session;

	clock.innerText = time;

	setTimeout(digClock, 1000);
};

digClock();

