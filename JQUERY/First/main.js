$(document).ready(function () {
    /*$('div').click(function () {
        $('div').fadeOut()
    });*/
    // Events
    /*$('div').click(function () {
        /!*$('div').fadeOut()*!/
        alert('The div has been clicked');
    });*/

    //This Selector
   /* $('div').click(function () {
        $(this).fadeOut()
    })*/

    //Show and hide and toggle
    /*$('#div1').click(function () {
        $('#div2').show()
    })*/

    /*$('#div1').click(function () {
        $('#div2').toggle()
    })*/
    //You can apply any effect to anything which is presented in some other div

    //fadeIn
    //fadeOut
    //slideUP
    //slideDown
    //slideToggle

    //Animation effects with slides
    $('#div1').click(function(){
        $(this).animate({
            marginLeft:'200px',
            marginTop:'0px',
            backgroundColor:'red'
        },2000).animate({
            marginTop:'200px',
            backgroundColor:'blue'
        },2000).animate({
            marginLeft: '0',
            marginTop:'200px',
            backgroundColor:'green'
        },3000).animate({
           marginTop:'0px',
            backgroundColor:'black'
        },3000).slideUp(1000).slideDown(1000).fadeOut(1000,function () {
            alert('this is from call back function animation completed');
        });
    });

       /* $('button').click(function () {
            $('#div1').stop();
        });
        
        $('#div2').click(function () {
            $(this).slideUp(3000);

         });*/
    
});