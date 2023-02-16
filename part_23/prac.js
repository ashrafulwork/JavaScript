
//Loop in  array
var loop_count = 0;
var loop = 0;
var sum = 0;
var array_num  = new Array();
var loop_count= parseInt(prompt("Enter the value of loop count :"))
for(loop = 0 ; loop < loop_count; loop ++){
 array_num [loop] = parseInt(prompt("Enter the values of Array :"))
}

for( loop = 0; loop <loop_count; loop++){
    sum = sum + array_num [loop]  ;
}
document.write("The result is  : " + sum );