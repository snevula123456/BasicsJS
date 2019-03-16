/*Event Bubbling*/
/*When you click on the child element of event listener you will get the result of
* parent event listener also this is called Event Bubbling*/


document.querySelector('.card-title').addEventListener('click',function(e){
   console.log('TaskList');
});
document.querySelector('.card-content').addEventListener('click',function(e){
   console.log('card-content');
});
document.querySelector('.card').addEventListener('click' , function(e){
console.log('card');
});
document.querySelector('.col').addEventListener('click',function(e){
   console.log('column');
});

/*Event Deligation*/

/*document.body.addEventListener('click',deletefunc);
function deletefunc(e) {
    if(e.target.className === 'fa fa-remove'){
        console.log('delete-item working with one event Listener');
    }
}*/
/*In the above listener if there is any extra class added to the element then the function will not
work so better way us*/
/*document.body.addEventListener('click', deletefun);
function deletefun(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('working for every one');
       /!* e.target.parentElement.parentElement.remove();*!/
    }
}*/









