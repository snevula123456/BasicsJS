$(document).ready(function(){

 $('[data-trigger="dropdown"]').on('mouseenter',function(){
    var submenu = $('this').parent().find('.submenu');
    submenu.addClass('.active');
    /*$("this").show("active");*/
        alert("This is hover effect working");
 });

});
