function validation() {
    var em = document.getElementById("uid").value;
    var pa = document.getElementById("pas").value;
    var us = document.getElementById("uname").value;

    if (em=="" || pa=="" || us=="") {
        document.getElementById("err").innerHTML= "All fields required";
        return false;
    }else if(em.length<4){
        document.getElementById("err").innerHTML="Name must be 4 char";
        return false;
    }else if(pa.length<4){
        document.getElementById("err").innerHTML ="Password must be 4 char";
        return false;
    }
    else if(us.length<4){
        document.getElementById("err").innerHTML = "Name should be atleast 4 char";
        return false;
    }
    else {
        return true;
    }
}