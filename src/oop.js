// Define a blueprint for a car
class Car{
    // the constructor to initialise an object
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isEngineOn=false;

    }
    // a method that is part of a class
    startEngine(){
        this.isEngineOn=true;
        console.log(`The ${this.make} ${this.model}'s engine is running`);
    }
    displayInfo(){
        console.log(`car Info ${this.year} ${this.make} ${this.model}`);
    }
}
// create an instance of a class
const myCar = new Car("Mercedes","E500","2024");
myCar.startEngine()
myCar.displayInfo()

class Student{
    constructor(name,age,course) {
        this.name=name;
        this.age=age;
        this.course=course;
    }
    displayedinfo(){
        console.log(`student info: name: ${this.name} age: ${this.age} course: ${this.course}`)
    }
}
const myStudent = new Student("Yvonne","25","MIT");
myStudent.displayedinfo()