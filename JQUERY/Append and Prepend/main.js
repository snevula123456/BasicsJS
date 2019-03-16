$(document).ready(function () {
    //Append
    /*$('#btn').click(function () {
        var v1 = $('#some').text();
        $('#ol1').append(`<li>${v1}</li>`)
    });*/

    //Prepend
    /*$('#btn').click(function () {
        var v1 = $('#some').text();
        $('#ol1').prepend(`<li>${v1}</li>`)
    });*/

    //after
    $('#btn').click(function () {
        var v1 = $('#some').text();
        $('#ol1').after(`<li>${v1}</li>`)
    });

})