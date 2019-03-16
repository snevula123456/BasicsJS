/*
/!*
document.querySelector('#task').addEventListener('input',runevent);

function runevent(e) {
    let val;
    val = e.type;
    console.log(val);
    e.preventDefault();
}
*!/

document.querySelector('.some2').addEventListener('mouseover',runEventsome2);
function runEventsome2(e){
    console.log('some2 is working')
    e.preventDefault();
}
document.querySelector('.some').addEventListener('mouseover',runEventsome);
function runEventsome(e){
    console.log('some is working');
    e.preventDefault();
}
document.querySelector('.card-title').addEventListener('mouseover',runevent);
function runevent(){
    console.log('card-title is working');
}

document.querySelector('.card-content').addEventListener('mouseover',runevent1);
function runevent1(){
    console.log('card-content is working');
}

document.querySelector('.card').addEventListener('mouseover',runevent2);
function runevent2(){
    console.log('card is working');
}
/!*
document.querySelector('.delete-item').addEventListener('click',runEvent);
function runEvent(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log('Working');
        e.preventDefault();
    }
}
*!/
*/

/*let arr = [1,2,3,45,68,5];
console.log(Math.max(...(arr)));*/

/*let val;
val = Number('hello');
val = Number(true);
val = Number(false);
console.log(val);*/


/*document.querySelector('#task').addEventListener('copy',runevent);

function runevent(e){

   console.log('working');
   e.preventDefault();
}

let elemt = document.createElement('li');
elemt.id = 'singh';
elemt.setAttribute('title','something');
elemt.appendChild(document.createTextNode('THis is from Js'));
document.querySelector('.collection').appendChild(elemt);*/


/*document.getElementById('btn').addEventListener('click',runevent);

function runevent(e){
    var v1 = document.getElementById('first').value;
    console.log(v1);
    var v2 = document.getElementById('second').value;
    console.log(v2);
    var v3 = parseInt(v1) + parseInt(v2);
    console.log(v3)
    document.getElementById('result').value = v3 ;

    e.preventDefault();
}*/

/*
document.querySelector('#task').addEventListener('click',runevent);

function runevent(e){
   /!* var a = document.getElementById('task').value;*!/
    console.log('keyboard is working');
    alert('working');
    e.preventDefault();
}

var a = document.createElement('li');
a.id = 'some';
a.className = 'list';
a.setAttribute('title','TITLE');
a.appendChild(document.createTextNode('listitem'));
document.querySelector('.collection').appendChild(a);
console.log(a);*/

console.log(document);
console.log(document.getElementById('task'));


console.log(document.getElementsByClassName('card-action'));

console.log(document.getElementsByTagName('li'));

console.log(document.querySelector('#task'));
console.log(document.querySelector('.card-action'));


document.querySelector('.btn').addEventListener('dbclick',shyam);

function shyam(e){
    console.log('working');
    alert('welcome');
    e.preventDefault();
}
