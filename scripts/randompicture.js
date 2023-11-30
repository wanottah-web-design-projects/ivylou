
var rand = Math.floor(Math.random() * 133 ) + 1;

var picture = rand + ".jpg"

document.write("<img src =" + "../images/my_cooking/" + picture + " ");
document.write("width=" + 250 + " height=" + 250 + ">");
document.write("</img>");