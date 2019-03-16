/*
//Object.prototype

function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
    /!*this.calculateage = function () {
        const diff = Date.now() - this.birthday.getTime();
        const agedate = newDate(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }*!/
}

Person.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.fullname = function () {
    return `${this.firstname} ${this.lastname}`;
}

Person.prototype.getsMaried = function(newLastName){
    this.lastname = newLastName;
}

const john = new Person('jo','de','March 16 1990');
const mary = new Person('mar','jon','10-20-1995');

console.log(mary);
console.log(mary.calculateAge());
console.log(mary.fullname());

mary.getsMaried('Smith');

console.log(mary.fullname());

console.log(mary.hasOwnProperty('firstname'));
console.log(mary.hasOwnProperty('lastname'));
*/

/*
function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}

Person.prototype.changeName = function(newlastname){
    this.lastname = newlastname;
}

const john = new Person('john','doe','10-20-1990');
const mary = new Person('mary','john','March 20 1995')
console.log(john);
console.log(john.calculateAge());
console.log(john.getFullName());
console.log(mary);
mary.changeName('smith');

console.log(mary.getFullName());*/


function Person(firstname,lastname,dob){
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = new Date(dob);
}

Person.prototype.getfullname = function(){
    return `${this.firstname} ${this.lastname} `;
}

Person.prototype.namechange = function (namechange) {
    this.lastname = namechange;
}

Person.prototype.calculateAge = function(){
    const diff =  Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    /*return ageDate;*/
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


Person.prototype.age = 30;

const p1 = new Person('bha','rath','March 20 1994');
/*p1.age(30);*/
/*console.log(p1);
console.log(p1.age);*/
/*p1.namechange('changedname');
console.log(p1.getfullname());
console.log(p1);*/
console.log(p1);
console.log(p1.calculateAge());




