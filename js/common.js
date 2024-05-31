$(function() {
   
    $('.mobile-menu-button').click(function(e){
        $('.mobile-menu').stop().slideToggle(200);
        e.preventDefault();
        if ($(this).hasClass('open-nav')) {
            $(this).removeClass('open-nav');
        } else {
            $(this).addClass('open-nav');
        }
    });
    $('#first, #second').mouseover(function(e){

        if ($(this).hasClass('mouse-over')) {
            $(this).removeClass('mouse-over');
        } else {
            $(this).addClass('mouse-over');
        }
    });
    $('#first, #second').mouseout(function(e){
        if ($(this).hasClass('mouse-over')) {
            $(this).removeClass('mouse-over');
        } else {
            $(this).addClass('mouse-over');
        }  
    });

    $('.item-title-7').mouseover(function(e){

        $(this).find('.item-title-content-7 h2').css("color", "#3CB3B6");
        $(this).find('.h2').css("color", "#3CB3B6");

        if ($(this).hasClass('mouse-over-flag')) {
            $(this).removeClass('mouse-over-flag');
        } else {
            $(this).addClass('mouse-over-flag');
        }

    });

    $('.item-title-7').mouseout(function(e){

        $(this).find('.item-title-content-7 h2').css("color", "#99A2B5");
        $(this).find('.h2').css("color", "#99A2B5");

        if ($(this).hasClass('mouse-over-flag')) {
            $(this).removeClass('mouse-over-flag');
        } else {
            $(this).addClass('mouse-over-flag');
        }
        
    });


});
    