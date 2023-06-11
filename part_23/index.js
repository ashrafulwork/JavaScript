
//Loop in  array
// var number = 0;
// var num = new Array();
// number = parseInt(prompt("Enter the value of number : "))
// for ( var i = 0 ; i<number; i++){
//     num[i] = parseInt(prompt("Enter your array"))
// }

// var sum = 0;

// for(var i = 0; i<number ; i++){
  
   

//     console.log(num[i]);
//     sum = sum + num[i]
// }
//     console.log("Total sum : "+sum);

// var num = new Array();
// var n = parseInt(prompt("Enter the range number : "))
// for (var  i = 0 ; i<n ; i++){
//     num[i] = parseInt(prompt("Enter your number : "))
// }
// var sum = 0;
// for (var i = 0 ; i < n ; i++){
//     console.log(num[i])
//     sum = sum + num[i];
    
// }
// console.log("Sum  = " + sum)



var array = new Array();

var range = parseInt(prompt("Enter the range :"))

for( var i = 0 ; i < range; i++){

    array[i] = parseInt(prompt("Enter the array values : "))


}
var sum = 0;
for( var i = 0 ; i < range; i++){ 

   
    console.log(array[i]);
     sum = sum + array[i];
}

console.log("The sum is : " + sum)