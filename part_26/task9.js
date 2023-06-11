//array
//loop
//function




// for 2d Array

function highestScore(score){

    var max = score[0][0]
    var max = score[0][1]
    for(var i = 1 ; i<6; i++){
        for(var j = 0; j<2 ; j++){
            if(max < score[i][j]){
                max = score[i][j];
            }
    
        }
    }
     return max;
    }
    
    
    
    
    
    var score = [
    
        ["Ashraful Hossain" , 137],
        ["Sk. Md. Rumman" , 138],
        ["Arup Raton Chowdhury" , 155],
        ["Arman Hossain" , 156],
        ["Shaminur Rahman" , 198],
        ["Shafin Ahmed" , 168],
    
    
    
    ] ;
    
    var finalScore = highestScore(score)
    console.log("The final number is  : "+finalScore)