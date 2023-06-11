//Document Object Model


// getElementsById 

var myheading = document.getElementById("heading1");


myheading.innerHTML="WADUHEK";
// document.getElementById("heading1").innerHTML = "Changed Word"  ;

document.getElementById("para").innerHTML = "CHANGED WORD DAMN SON"
//if we use tag we need to specify the tag index
document.getElementsByTagName("h1")[0].innerHTML = "CHANGED WOW"

document.getElementsByClassName("para2")[0].innerHTML = "HI";