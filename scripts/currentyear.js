
var mydate = new Date()

var myyear = mydate.getYear()

if ( myyear < 1000 )
myyear += 1900

document.write ( "<span>" + myyear + "</span>" )
