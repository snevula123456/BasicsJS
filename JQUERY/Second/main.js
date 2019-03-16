$(document).ready(function () {
    //getting data from divs
    $('#div2').click(function () {
        var v1 = $(this).text();
        /*alert(v1);*/
    });

    //Gettign html from divs
    $('#div2').click(function () {
        var v2 = $(this).html()
        alert(v2);
    });

    // taking data and showing on some place
    $('#btn').click(function () {
        var v3 = $('#div2').text();
        $('.sho').text(v3);
        console.log(v3);
    });



})