/*class Animal {
    constructor(){
        console.log("The Animal class is created");
    }
}
let dog = new Animal();
let fish = new Animal();*/

/* Creation of instance variable and using them*/

/*
class Animal {
    constructor(name,color,speed){
      this.name = name;
      this.color = color;
      this.speed = speed;
    }
    namelength(){
        return this.name.length;
    }
    output(){
        console.log("The out put of the object is : " + this.name , this.color , this.speed);
    }
}
let dog = new Animal("puppy","grey","50");
let fish = new Animal("goldie","gold",72);
console.log(fish.namelength());
console.log(dog.name);
console.log(dog.color);
console.log(dog.speed);
console.log(dog.namelength());
dog.output();*/

/*Creation of extension clasess in js and using them*/
class Animal {
    constructor (name,color){
        this.name = name;
        this.color = color;
    }
}
class Dog extends Animal{
    constructor(name,color,speed){
        super(name,color);
        this.speed = speed;
    }
    bark(){
        console.log("THe details are ; "+ this.name,this.color,this.speed)
    }
}
let king = new Dog("puppuy","red",72);
king.bark();

class Employee{
    constructor(empid,empname){
        this.empid=empid;
        this.empname=empname;
    }

   /* output(){
        console.log("The output is "+ this.empid+","+this.empname);
    }*/
}
class Department extends Employee{
    constructor(empid,empname,deptname,block){
        super(empid,empname);
        this.deptname = deptname;
        this.block = block;
    }
    show(){
        console.log("The details are"+this.deptname+","+this.block+","+this.empid+","+this.empname);
    }
}

/*let shyam = new Employee(1,"shyamsingh");*/
/*shyam.output();*/
let shyam = new Department(1,"shyamsingh","UI","D");
shyam.show();

class Student {
    constructor(math,english,science) {
        this.math = math;
        this.english = english;
        this.science = science;
    }
     avg(){
         return((this.math+this.english+this.science)/3);
     }
}
let ravi = new Student(50,100,150);
console.log(ravi.avg());



