const form = document.querySelector('form');
const taskinput = document.getElementById('task');
const heading = document.getElementById('task-title');

taskinput.value = '';
/*Keyboard Events are
* 1.submit
* 2.keydown
* 3.keyup
* 4.keypress
* 5.foucus
* 6.blur
* 7..cut
* 8.paste
* 9.input
* 10.change*/
taskinput.addEventListener('keyup',runevent);
function runevent(e){

    console.log(`Event : ${e.type}`);
    heading.innerHTML = e.target.value;
    e.preventDefault();
}
document.querySelector('li').style.color = "red";
document.querySelector('li:nth-child(2)').style.color = 'green';
