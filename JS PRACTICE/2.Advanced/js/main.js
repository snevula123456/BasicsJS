let btn = document.getElementById("go-button");
function myfunction(){
    let usern =   document.getElementsByClassName("user").value;
    let passwo =  document.getElementsByClassName("pass").value;
    let mess = document.getElementsByClassName("mess").value;
    let result =  document.getElementById("text");
    result.innerHTML = ("user name is "+usern+"<br/>"+ "password is :"+passwo);
}
btn.addEventListener("click",myfunction);