document.getElementById('shyam').addEventListener('click',showcontent);

function showcontent() {
    document.getElementById('mydiv').style.display = 'block';
}

/*
setTimeout(showcontent,2000);*/

document.getElementById('hiding').addEventListener('mouseenter',function(){
    console.log('working');
   document.getElementById('hide').style.display = 'block';
});

document.getElementById('hiding').addEventListener('mouseleave',function(){
    console.log('working');
    document.getElementById('hide').style.display = 'none';
});
