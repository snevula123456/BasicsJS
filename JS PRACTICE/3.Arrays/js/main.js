/*
let hobbies = ["music","sports","archery","some"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies.push("gaming"));
console.log(hobbies);
console.log(hobbies.pop("some"));
console.log(hobbies);
console.log(hobbies.length-1);
console.log(hobbies.slice(0,1));
console.log(hobbies);

hobbies.forEach(function(index,text){
    console.log("I like :" +index+ " " + text);
});
console.log(hobbies[0]);
console.log(hobbies.push("kingkhan"));
console.log(hobbies.toString());
console.log(hobbies.pop());
console.log(hobbies.toString());
console.log(hobbies.length);
console.log(hobbies.shift());
console.log(hobbies.unshift("something"));
console.log(hobbies.toString());
console.log(hobbies.slice(0,1));
console.log(hobbies.toString());
*/

/*let btn = document.getElementById("go-button");
function myfunction(){
   let usern = document.getElementsByClassName("user");
   let passwo =  document.getElementsByClassName("pass");
   let result = document.getElementById("text");
   result.innerHTML = ("user name is "+usern[0].value+"<br/>"+ "password is :"+passwo[0].value);
}
btn.addEventListener("click",myfunction);*/

let btn = document.getElementById("go-button");
btn.addEventListener("click",myfunction);
function myfunction() {
    let username = document.getElementsByClassName("user");
    let password = document.getElementsByClassName("pass");
    let result = document.getElementById("text");
    result.innerHTML = ("user name is "+username[0].value + "<br/>" + "password is :"+password[0].value);
}
