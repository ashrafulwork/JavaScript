//Array 1D




function highestScore(scores){


    var max = scores[0];
    for(var  j = 1 ; j < 5 ; j ++){
        if(max < scores[j]){
            max = scores[j];
        }


    }
    return max;
    
}

var scores = new Array();
for(var  i = 0 ; i < 5 ; i++){
    scores[i] = parseInt(prompt("Enter the 5 array values : "));

}
var maxScore = highestScore(scores);
console.log(maxScore);