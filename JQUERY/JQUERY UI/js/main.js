$(document).ready(function () {
    //for testing of jquery-ui
    //$('#draga').draggable();

    //dropable
    $('#draga').draggable({revert : 'valid'});
    $('#draga1').draggable({revert: 'invalid'});
    $('#drop1').droppable({
        accept:'#draga',
        drop:function (event , ui) {
            $('#drop1').addClass('some').text('got it');
        }
    })
})