$(document).ready(function () {

    //Changing the height and width of the Div with button
    /*$('#btn').click(function () {
        $('#div1').width(300);
        $('#div1').height(300);
        $('#div1').text($('#div1').outerHeight()+ " The width is "+$('#div1').outerWidth());
    });*/

    //Adding class to the div with Jquery

    $('#btn').click(function () {
        $('#div1').addClass('some');
    })


});