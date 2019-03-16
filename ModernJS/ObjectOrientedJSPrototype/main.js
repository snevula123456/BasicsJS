/*function Person(name){
    this.name = name;
}
Person.prototype.age = 30;
console.log(Person.prototype.age);
Person.prototype.lastname = "Nevula";
const shyam = new Person('shyam');
console.log(shyam);
console.log(Person.prototype.lastname);*/

/*Prototypical Inheritence*/
/*function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.greetings = function () {
  return `Hello ${this.firstname} ${this.lastname}`
};
function Customer(firstname,lastname,phone,type){
    Person.call(this,firstname,lastname);
    this.phone = phone;
    this.type = type;
}

Customer.prototype = Object.create(Person.prototype);

Customer.prototype.greetings = function(){
    return `this is customer ${this.firstname} ${this.lastname} welcome to the company`;
};
Customer.prototype.constructor = Customer();

const cus = new Customer('some','thing',96969669,'fix');
console.log(cus);

console.log(cus.greetings());*/

/*Creation of Object with Object.create*/
/*
const prototypeproperties = {
    greetings: function () {
        return `${this.firstname} ${this.lastname} welcome`;
    },
    marriedname : function (namechange) {
        this.namechange = namechange;
        return `${this.namechange} is changed`
    }
};
const per = Object.create(prototypeproperties);
per.firstname = 'shyam';
per.lastname = 'nevu';
console.log(per);
console.log(per.marriedname('something'));
console.log(per.greetings());
*/
/*Creation of Clasess and Sub Clasess*/
class Person{
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    greetings(){
        return `${this.firstname} ${this.lastname} Welcome to the clasess`;
    }
}

class Customer extends Person{
    constructor(firstname,lastname,age,phone){
        super(firstname,lastname,age);
        this.phone = phone;
    }
}

/*const per1 = new Person('shya','singh',20);
console.log(per1);
console.log(per1.greetings());

const cus1 = new Customer('singh','king',18,9492721994);
console.log(cus1);
console.log(cus1.greetings());*/

/*const li = document.createElement('li');
li.className = 'collection-items';
li.id = 'some';
li.setAttribute('title','som');
li.appendChild(document.createTextNode('list-items'));
console.log(li);*/
/*
document.querySelector('.clear-tasks').addEventListener('mouseover',onclick);
function onclick(e){
    let val;
    val = e.type;
    val = e.clientX +","+e.clientY;
    console.log(val);
}*/
/*
const form = document.querySelector('form');
const taskinput = document.getElementById('task');

taskinput.value = "";
form.addEventListener('submit',runevent);
function runevent(e) {
    console.log(`eventtype : ${e.type}`);
    console.log(taskinput.value);
    e.preventDefault();
}*/
/*function Person2(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person2.prototype.getlastname = function(namechanged){
    this.lastname = namechanged;
};


const per10 = new Person2('shyam','singh');
console.log(per10);
per10.getlastname('some');
console.log(per10);*/
function Some(dob){
    this.dateofbirth = new Date(dob);
    this.calculateage = function () {
        const diff = Date.now() - this.dateofbirth.getTime();
        const agediff = new Date(diff);
        return Math.abs(agediff.getUTCFullYear() - 1970);
    }
}
const shyam = new Some('10-07-1990');
console.log(shyam);
console.log(shyam.calculateage());