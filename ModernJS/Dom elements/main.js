/*
let val;
val = document;
val = document.all.length;
val = document.domain;
val = document.doctype;
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val  = document.scripts;
/!*val = document.scripts[0].getAttribute('src');*!/
/!*conversion of arrays to function*!/
let script = document.scripts;
let stringarray = Array.from(script);
stringarray.forEach(function (script) {
    console.log(script);
});
console.log(val);
*/

/*Dom Single element selectors*/
/*val = document.getElementById('task-title');
val= document.querySelector('.card-title');
val = document.querySelector('li:nth-child(3)').style.color = 'red';
console.log(val);*/
/*Conversion of Html collection to Array*/
/*let lis = document.getElementsByTagName('li');
lis = Array.from(lis);
lis.forEach(function (li) {
    console.log(li.className);
});*/
/*console.log(lis);*/
/*changing the even and odd */
/*
let odd = document.querySelectorAll('li:nth-child(odd)');
let Even = document.querySelectorAll('li:nth-child(even)');


 odd.forEach(function (li) {
    li.style.background = '#ccc';
});
 Even.forEach(function (li) {
     li.style.background = '#f4f4f4';
 });
 val = document.forms[0].className;
 console.log(val);*/


