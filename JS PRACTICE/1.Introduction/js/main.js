/*alert("welcome to the page");*/
console.log("This is console");
let message = "welcome to the message";
console.log(message);

/*let age = 28;
console.log(age);
age++;
console.log(age);
age += 2;
console.log(age);
age++;
console.log(age);*/
function buttonclicked(){
    console.log("button clicked");
    btn.removeEventListener("click",buttonclicked);
    /*document.write("The button is working");*/
}
var btn = document.getElementById("go-button");
btn.addEventListener("click",buttonclicked);
function myfunction(name) {
    console.log("The Name of the :" + name);
}
myfunction("shyam");

function names(){
    console.log("The name is Shyam singh");
    /*nam.removeEventListener("click", names);*/
}
var nam = document.getElementById("name");
nam.addEventListener("click",names);

/*
function having ful access to the variable*/
let myname = "shyamsingh";
function myfunction2(){
    console.log(myname);
    myname="Premsingh";
    console.log(myname);
}
myfunction2();

/*Paramerter : we can pass the arbitary data into function using parameter */
function para(from,text){
    console.log(from+":"+text);
}
para("shyam","hello");

function checkage(age) {
    if(age>18){
        return true;
        console.log("Welcome to the page");
    }
    else {
        console.log("do you have permission");
    }
}
let age = prompt("how old are you ?", " ");
if(checkage(age)){
 alert("You are permitted to enter the page");
}else{
   alert("you need permission to enter the page");
}

/*Is prime code*/

