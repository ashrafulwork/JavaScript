






function highestScore(array){

    var max = array[0][0];
    var max = array[0][1];
    for(var i=1;i<6;i++){

        for(var j=0;j<2;j++){
            if(max< array[i][j]){
                max = array[i][j];
               
            }
        }

      
    }

    return max;
}




var array =  [ 

    ["Ashraful" , 137],
    ["Rumman" , 138],
    ["Arup" , 155],
    ["Rana" , 156],
    ["Setu" , 158],
    ["Shafin" , 165]





]

var maxScore = highestScore(array);
document.write("The higest score is  : " +maxScore);















