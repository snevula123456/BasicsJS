let val;
val = document;
val = document.all.length;
val = document.body;
val = document.forms;
val = document.links;
val = document.scripts;
console.log(val);
let scripts = document.scripts;
let scriptsarray = Array.from(scripts);
scriptsarray.forEach(function (scripts) {
console.log(scripts);
});

let vard = document.querySelector('.card-title').style.color = 'red';
console.log(vard);
document.querySelector('li:nth-child(3)').style.color = 'red';
