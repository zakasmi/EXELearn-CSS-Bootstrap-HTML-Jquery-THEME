$(function(){
    'use strict';
    $(window).scroll(function (){
        var navbar = $('.navbar');
$(window).scrollTop() >= navbar.height() ?navbar.addClass('scrolled') : navbar.removeClass('scrolled');
       

    });
});