document.getElementById('butt').addEventListener('click',loaddata);

function loaddata(e){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.txt',true);


    xhr.onload = function(){
        if(this.status===200){
            /*console.log(this.responseText);*/
            document.getElementById('result').innerHTML = this.responseText;
        }
    }
    xhr.send();
    e.preventDefault();
}

/*
1.creation of Object
2. Open
3.onload
4.Send
*/
