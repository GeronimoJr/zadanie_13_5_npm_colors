function convertTime(uptime) {
	var time = uptime;
	var seconds = (time % 60).toFixed(0);
	var minutes = Math.floor(time / 60);
	var hours = Math.floor(minutes / 60);

	return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds';
}

exports.print = convertTime;