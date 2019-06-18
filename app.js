function getTime(){
	const time = new Date();
	let hour = time.getHours(),
		minute = time.getMinutes(),
		second = time.getSeconds();

		if (hour < 10) {
			hour = "0"+ hour;
		}
		if (minute < 10) {
			minute = "0"+ minute;
		}
		if (second < 10) {
			second = "0"+ second;
		}

		if (hour > 12) {
			hour = "0"+(hour - 12);
			document.getElementById("second").innerHTML = second +" PM";
		} else {
			document.getElementById("second").innerHTML = second +" AM";
		}
	document.getElementById("hour").innerHTML = hour +":";
	document.getElementById("minute").innerHTML = minute+":";
	
}

setInterval(getTime, 100);