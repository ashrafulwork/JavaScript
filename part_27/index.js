//object and constructor 


// student info

///function
///parameter
///





function Student(name,age,id,language){
    this.name = name;
    this.age = age;
    this.id = id;
    this.language = language;
    this.display = function(){

        console.log(this.name);
        console.log(this.age);
        console.log(this.id);
        console.log(this.language);
    }

}




var student1 = new Student("Md. Ashraful Hossain",23,18192103137, ["Bengali" , "Hindi" , "English"]);
var student2 = new Student(" Hossain",23,112525, ["Bengali" , "Hindi" , "English"]);



student1.display();
student2.display();

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.id);
// console.log(student1.language);




// var name = "Anisul Islam";

// var studenInfo1 = {

//     name : "Md. Ashraful Hossain",
//     age : 23,
//     id : 18192103137,
//     language : ["Bengali" , "Hindi" , "English"]

    
// }



// var studenInfo2 = {

//     name : " Hossain",
//     age : 25,
//     id : 112545,
//     language : ["Bengali" , "Hindi" , "English"]

    
// }
// console.log(studenInfo1.name);
// console.log(studenInfo2.age);

// console.log(studenInfo1.id);
// console.log(studenInfo2.language);

