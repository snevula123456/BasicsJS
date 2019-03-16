document.getElementById('butt').addEventListener('click',loaddata);

function loaddata(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.txt',true);

    xhr.onprogress = function(){
   document.getElementById('result').innerHTML = `${this.readyState}`;
   /*e.preventDefault();*/
    };

    xhr.onload = setTimeout(function(){
        if(xhr.status===200){
            document.getElementById('result').innerHTML= xhr.responseText;
        }
    },2000);
    setTimeout(function(){
    document.getElementById('result').remove();
    },3000);

    xhr.send();
e.preventDefault();
}