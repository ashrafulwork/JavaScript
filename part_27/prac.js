
function Student(name,intake,id,section){

    this.name = name;
    this.intake = intake;
    this.id = id;
    this.section = section;
    this.display = function(){

        console.log(name);
        console.log(intake);
        console.log(id);
        console.log(section);

    }


}

var info1 = new Student("MICHAEL" , 02 , 1245,01);
var info2 = new Student("Shroud" , 20,100,04);

info1.display();
info2.display();