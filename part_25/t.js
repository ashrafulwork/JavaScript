//function
//array
//loop


function highestScore(array){
    var maxNum = array[0];
    for(var j = 1 ; j<5 ; j++){

        if(maxNum < array[j]){
            maxNum = array[j]
        }

    }

    return maxNum;




}









var array = new Array();
for(var i = 0 ; i < 5 ; i++){
    array[i] = parseInt(prompt("Enter the array values : "));
}

var finalScore = highestScore(array)
console.log("The biggest score is : "+finalScore);