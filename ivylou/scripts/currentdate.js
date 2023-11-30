
var mydate = new Date()

var myyear = mydate.getYear()

if ( myyear < 1000 )
myyear += 1900

var myday = mydate.getDay()
var mymonth = mydate.getMonth()
var daym = mydate.getDate()

if (	daym == 1 ||
		daym == 21 ||
		daym == 31 )
daym = daym + "st"

if (	daym == 2 ||
		daym == 22 )
daym = daym + "nd"

if (	daym == 3 ||
		daym == 23 )
daym = daym + "rd"

if ( 	daym == 4 || 
		daym == 5 || 
		daym == 6 ||
		daym == 7 ||
		daym == 8 ||
		daym == 9 ||
		daym == 10 ||
		daym == 11 ||
		daym == 12 ||
		daym == 13 ||
		daym == 14 ||
		daym == 15 ||
		daym == 16 ||
		daym == 17 ||
		daym == 18 ||
		daym == 19 ||
		daym == 20 ||
		daym == 24 ||
		daym == 25 ||
		daym == 26 ||
		daym == 27 ||
		daym == 28 ||
		daym == 29 ||
		daym == 30 )
daym = daym + "th"

var dayarray = new Array ( "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" )

var montharray = new Array ( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" )

document.write ( "<span align=" + "right" + ">" + dayarray [ myday ] + ", " + montharray [ mymonth ] + " " + daym + ", " + myyear + "</span>" )
