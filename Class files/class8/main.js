/*
/!*
// Creation of Object


function Person(firstname,lastname,dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthyear = new Date(dob);
    //console.log(this);
}

const shyam = new Person('shyamsingh','nevula','7-16-1994');
document.getElementById('dis').innerHTML = shyam.firstname;
document.getElementById('dis2').innerText = shyam.lastname;
console.log(shyam);



// Creation of Single instant object

const house = {
    color : 'red'
}

console.log(house);


*!/

//Multiple object creation

function Employee(firstname,lastname){
    this.firstname = firstname ;
    this.lastname = lastname;

}

const shyam = new Employee('shyam','singh');
/!*const shyam2 = new Employee();*!/
/!*console.log(shyam2);*!/
/!*console.log(shyam);*!/

document.getElementById('dis').innerHTML = shyam.firstname;
document.getElementById('dis2').innerHTML = shyam.lastname;

function Person(){}

const pre = new Person();

console.log(pre);

//How to calculate the age

//Date.now

//getUtcFullYear

//new Date();

*/

/*
const house = {
    color:'red'
}

console.log(house);
*/

function Employee(firstname,secondname){
    this.firstname = firstname;
    this.secondname = secondname;
}

const shyam = new Employee('shyamsingh','nevula');
const prem = new Employee('Prem');

document.getElementById('dis').innerHTML = shyam.firstname;
/*document.getElementById('dis2').innerHTML = shyam.secondname;*/

document.getElementById('dis2').innerHTML = shyam.firstname;

console.log(typeof Employee);
/*console.log(prem);
console.log(shyam);*/
