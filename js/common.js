$(function() {
    $('.hr-top').after('<div class="mobile-menu d-lg-none">');
    $('.top-menu').clone().appendTo('.mobile-menu');
    $('.mobile-menu-button').click(function(){
        $('.mobile-menu').stop().slideToggle();
    });
});
    