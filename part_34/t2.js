// //creating html element

// var heading3 = document.createElement("h1");
// var text = document.createTextNode("This is  heading no 3");

// heading3.appendChild(text);


// var myDiv = document.getElementById("my-div");
// myDiv.appendChild(heading3);




// // //
// // var heading0 = document.createElement("h1");
// // var text0 = document.createTextNode("This is  heading no 0");

// // var remLine2 = document.getElementsByTagName("h1")[0];
// // heading0.appendChild(text0);

// var heading0 = document.createElement("h1");
// var text = document.createTextNode("This is  heading no 3");

// heading3.appendChild(text);

var heading0 = document.createElement("h1");
var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading0);
var text0 = document.createTextNode("Testing text 137");
heading0.appendChild(text0);



var remLine2 = document.getElementsByTagName("h1")[0];

myDiv.insertBefore(heading0,remLine2);

//classlist
//classlist.add
//classlist.remove




