$(function() {
   
    $('.mobile-menu-button').click(function(e){
        $('.mobile-menu').stop().slideToggle(200);
        e.preventDefault();
        console.log($('img').attr('src'));
        
        //$('.mobile-menu-button>img').attr('src',"images/cross.png");

        if($('.mobile-menu-button>img').attr('src') == "images/cross.png")
        {
            $('.mobile-menu-button>img').attr('src',"images/menu.png");
        }
        else $('.mobile-menu-button>img').attr('src',"images/cross.png");
    });

});
    