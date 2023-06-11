//Guessing the game : 

var numofWin = 0;
var numofLost = 0;


for(var i = 1; i <=5 ; i++){

    var myNumber = parseInt(prompt("Enter your value : "))
    var randomGenerator = Math.floor(Math.random()*6);
    if( myNumber == randomGenerator){
    
        console.log("You have WON !")
        numofWin++;
    }
    else 
        console.log("You have lost ! Random Number was " + randomGenerator)
        numofLost++;

}

document.write("Number of time you won  = " +numofWin + "<br>")
document.write("Number of time you lost  = "+numofLost + "<br>");