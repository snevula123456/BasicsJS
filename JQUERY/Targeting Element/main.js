$(document).ready(function () {

   alert("Hello world");
    $('#demo').html("This is changed element");

    var el = document.getElementById("text");

    console.log(el);
    console.log("This is jquery"+ (el));
    /*The below is one event handler*/

    /*$('#go-button').on('click',function () {
        alert("This is alert button")
    });*/

    /*The below is hover handler*/
    /*$('#go-button').hover(function () {
       console.log("fantastic job");
       /!*alert("this is hover effect");*!/
    });*/

    /*The below is mouse enter*/
    $('#go-button').on('mouseenter',function () {
        console.log("This is mouseenter effect");
    })
    /*mouseleave*/ /*mousedown*/ /*mouseup*/
});

 