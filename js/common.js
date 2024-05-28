$(function() {
   
    $('.mobile-menu-button').click(function(e){
        $('.mobile-menu').stop().slideToggle(200);
        e.preventDefault();

        if($('.mobile-menu-button>img').attr('src') == "images/cross.png")
        {
            $('.mobile-menu-button>img').attr('src',"images/menu.png");
        }
        else $('.mobile-menu-button>img').attr('src',"images/cross.png");
    });
    $('#first').mouseover(function(e){

        $('#first>.arrow>img').attr('src',"images/arrow-right.png");
        $(this).css("background-color", "#36DFE3");
        $(this).css("color", "#181C2C");

    });
    $('#first').mouseout(function(e){

        $('#first>.arrow>img').attr('src',"images/w-arrow-right.png");
        $(this).css("background-color", "#1B424D");
        $(this).css("color", "#FBFBFC");
        
    });
    $('#second').mouseover(function(e){

        $('#second>.arrow>img').attr('src',"images/arrow-right.png");
        $(this).css("background-color", "#36DFE3");
        $(this).css("color", "#181C2C");

    });
    $('#second').mouseout(function(e){

        $('#second>.arrow>img').attr('src',"images/w-arrow-right.png");
        $(this).css("background-color", "#1B424D");
        $(this).css("color", "#FBFBFC");
        
    });

    $('.item-title-7').mouseover(function(e){

        $(this).css("background-color", "#D4F2F3");
        $(this).find('.item-title-content-7 h2').css("color", "#3CB3B6");
        $(this).find('.h2').css("color", "#3CB3B6");

    });

    $('.item-title-7').mouseout(function(e){

        $(this).css("background-color", "#fff");
        $(this).find('.item-title-content-7 h2').css("color", "#99A2B5");
        $(this).find('.h2').css("color", "#99A2B5");
        
    });


});
    