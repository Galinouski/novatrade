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

});
    