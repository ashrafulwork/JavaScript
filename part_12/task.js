var marks = prompt("Enter your mark : ");
if(marks>=80 && marks<=100){

    document.write("A+")
}
else if (marks>=75 && marks<=79){

    document.write("A")
}
else if (marks>=70 && marks<=74){

    document.write("A-")
}

else if (marks>=65 && marks<=69){

    document.write("B+")
}

else if (marks>=60 && marks<=64){

    document.write("B")
}

else if (marks>=55 && marks<=59){

    document.write("B-")
}

else if (marks>=50 && marks<=54){

    document.write("C+")
}


else if (marks>=45 && marks<=49){

    document.write("C")
}


else if (marks>=40 && marks<=44){

    document.write("D")
}


else if (marks<=39){

    document.write("Fail")
}


else {

    document.write("Incorrect Input ")
}