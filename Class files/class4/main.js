/*
// Number to string conversion
let val;
val = 5;
val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);
val = String(5+5);
val = String(555);
// boolean to string
val = String(true);
console.log(val);
val = String(false);
// Date to string
val = String(new Date());
//Arrays to string
val = String([1,2,3,]);
// To string method
val = (5).toString();
val = (5+5).toString();
val = '5';

//String to number
val = Number('5');
val = Number(true);
console.log(val);
val = Number(false);
val = Number('500');
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

const val1 = '5';
const val2 = '5';
const sum = (val1) + (val2);
console.log(sum);
console.log(typeof sum);

let array = String([1,2,3]);
console.log(array);


// creation of objects

const person = {
    firstname:'shyam singh',
    lastname : 'Nevula',
    hobbies :['music','sports'],
    address:{
        city:'Hyd',
        state:'Telangana'
    },
    age : 20,
    getbirthyear : function(){
        return 2019 - this.age;
    }
}
let some;
some = person.address;
some = person.hobbies[0];
some = person.firstname;
some = person['firstname'];
some = person.hobbies[1];
some = person.address.city;
some = person.getbirthyear();
console.log(some);

const people = [
    {name:'singh',age:30},
    {name: 'king',age:20}
]

for (let i=0; i < people.length;i++){
    console.log(people[i].name);
    console.log(people[i].age);
}

*/

//Number to string conversion
/*
let num1;
num1 = String(5);
num1 = String(5+5);
num1 = String(55);
// Boolean conversion
num1 = String(true);
num1 = String(false);
//Date object to string
num1 = String(new Date())
// Array object to String Conversion
num1 = String([1,2,3]);

// toString();
num1 = (5).toString()
num1 = (5+5).toString()

//String to Number Conversion
num1 = Number('5');
num1 = Number('5+5');
// Conversion of Boolean Values to number
num1 = Number(true);
num1 = Number(500.23);
num1 = Number(false);

//Using Parse Int
num1 = parseInt('5');
num1 = parseFloat('5.00');
console.log(typeof num1);
console.log(num1);
console.log(num1.toFixed(4));


const num3 = '5';
const num4 = '5';
const sum = Number(num3) + Number(num4);

console.log(sum);*/


//creation of object;
/*

const person = {
    firstname : 'Shyam Singh',
    lastname : 'Nevula',
    age : 1990,
    birtheyear : function(){
        return 2018 - this.age
    },
    address : {
        city : 'hyd',
        pincode : 509102
    }
}

console.log(person.birtheyear());
console.log(person.firstname);
console.log(person.lastname);
console.log(person.address.pincode)*/

/*
const Person = {
    firstname : 'shyam singh',
    lastname : 'Nevula',
    age : 20,

    calcaulateage : function () {
        return this.firstname +" "+ this.lastname;
    },
    address : {
        city:'hyd',
        pincode: 50102
    }

}
console.log(Person);
console.log(Person.firstname);
console.log(Person.lastname);
console.log(Person.calcaulateage())
console.log(Person.address.city);
let shyam = 5;
console.log(shyam);*/
