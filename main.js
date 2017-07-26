var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

//PROBLEM 1: Write a set of loops that will print out each day of each month in the following format:

// <pre>
// January 1
// January 2
// ...
// January 30
// January 31
// February 1
// February 2
// ...
// February 27
// February 28
// March 1
// March 2
// ...
// Dec 30
// Dec 31
// </pre>. 

// #1: There should be 365 print statements, one for each day in a year.

// for (var i = 0; i < months.length; i++)	{
// 	for	(var k = 1; k < months[i].days; k++) {
// 			console.log(`${months[i].name} ${k}`)
// 		}
// }


//#2: Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

/*For example, your output should look like the following:

<pre>
0:0:0
0:0:1
...
0:0:58
0:0:59
0:1:0
0:1:1
...
0:1:58
0:1:59
...
23:0:0
23:0:1
...
23:59:58
23:59:59
</pre>

There should be 24 * 60 * 60 = 82,800 print statements.




// //FIX - GOES INTO AN INFINITE LOOP - FIXED asof7_26_17__1509*/
var formatHours = function (hour) {
 	hour = hour % 12
 	if(hour < 10) {
 		hour = '0' + hour
 	}
	return hour
 }

var formatMinSec = function (time) {
	if(time < 10) {
		time = '0' + time
	}
	return time
}



 for (var hour = 0; hour< 24; hour++) {//hours
 	for (var minute = 0; minute < 60; minute++) {//minutes
 		for (var second = 0; second< 60; second++) {//seconds

			console.log(`${formatHours(hour)} : ${formatMinSec(minute)} : ${formatMinSec(second)}`)
 		}
 	}
 }


//WITH AM & PM FORMATTING

//  var formatHours = function (hour) {
//  	hour = hour % 12
//  	if(hour < 10) {
//  		hour = '0' + hour
//  	}
// 	return hour
//  }

// var formatMinSec = function (time) {
// 	if(time < 10) {
// 		time = '0' + time
// 	}
// 	return time
// }


// // //formatAM & PM
//  var amOrPm = function (hour) {
//  	if (hour > 11) {
//  		return 'PM'
//  	} else {
//  		return 'AM'
//  	}
//  }

//  for (var hour = 0; hour< 24; hour++) {//hours
//  	for (var minute = 0; minute < 60; minute++) {//minutes
//  		for (var second = 0; second< 60; second++) {//seconds

// 			console.log(`${formatHours(hour)} : ${formatMinSec(minute)} : ${formatMinSec(second)} ${amOrPm(hour)}`)
//  		}
//  	}
//  }
