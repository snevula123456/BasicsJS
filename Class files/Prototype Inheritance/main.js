//Prototype Inheritance

/*
function Person(FirstName,lastname){
    this.FirstName = FirstName;
    this.lastname = lastname;
}

Person.prototype.greeting = function(){
    return `THis is from Person Prototype ${this.FirstName} ${this.lastname}`;
}

const person1 = new Person('shyam','singh');

function Customer(FirstName,lastname,phone,membership){
    Person.call(this,FirstName,lastname);
    this.phone = phone;
    this.membership = membership;
}

//Inherit the Prototype Property
Customer.prototype = Object.create(Person.prototype);

//TO make Prototype as Customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('john','doe','949449494','year');
console.log(customer1);*/

function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greeting = function(){
    return `THis is from Person Object ${this.firstname} ${this.lastname}`;
}

/*const p1 = new Person("shyam",'singh');
console.log(p1);*/
/*//Prototype Calling
console.log(p1.greeting());*/

function Customer(firstname,lastname,phno,membership){
    Person.call(this,firstname,lastname);
    this.phno = phno;
    this.membership = membership;
}
//Prototype Inheritance
Customer.prototype = Object.create(Person.prototype);

const c1 = new Customer('some','thing',949494,'year');
/*console.log(c1);*/

console.log(c1.greeting());



