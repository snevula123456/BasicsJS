/*
let val;
const items = document.querySelector('ul.collection');
const listitems = document.querySelector('li.collection-item');
/!*Getting childNodes in ul items*!/
val = items.childNodes;

val = items.children;
console.log(val);
let date = new Date();
console.log(date);
*/

/*Conversion of Array*/
/*let scrip = document.scripts;
let scriptaray = Array.from(scrip);
scriptaray.forEach(function (scripts) {
    console.log(scripts);
});*/
/*console.log(location.port);
console.log(window.location.href);
console.log(navigator.appName);
console.log(navigator.userAgent);
console.log(navigator.appVersion);
console.log(navigator.appCodeName);*/

/*Creating an element and append them to child*/

/*
const li = document.createElement('li');
li.className = 'collection-item';
li.id = 'new-item';
li.setAttribute('title','New-item');
li.appendChild(document.createTextNode('helo-world'));
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML='<i class="fa fa-remove">';
li.appendChild(link);
console.log(link);

document.querySelector('ul.collection').appendChild(li);
console.log(li);
*/

/*Replacing the child node */

/*const newheading = document.createElement('h2');
newheading.id = 'task-title';
newheading.appendChild((document.createTextNode('Task-list')));

const oldheading = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newheading,oldheading);
console.log(oldheading);
console.log(newheading);*/

/*Event Listeners*/
// on click event listeners
/*document.querySelector('.clear-tasks').addEventListener('click',onclick);
function onclick(e){
    let val;
    val = e.type;
    console.log(val);
    e.preventDefault();
}*/
// Mouse Events
/* 1.Click
* 2. dblclick
* 3.mouseenter
* 4.mouseleave
* 5.mouseover
* 6.mouseout
* 7.mousemove*/
/*document.querySelector('.clear-tasks').addEventListener('mousemove',runEvent);
function runEvent(e){
    let val;
    val = e.type;
    console.log(val);
    console.log(e.clientX);
    console.log(e.clientY);
    e.preventDefault();
}*/
document.querySelector('.btn').addEventListener('click',shyam);
function shyam(e) {
    let val;
    val = e.type;
    console.log(val);
    e.preventDefault();
}
