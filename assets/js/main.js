$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//    events slider
    $(".events-slider .slides").owlCarousel({
		autoplay: true,
		smartSpeed: 300,
		margin: 30,
		loop:true,
		dots: false,
		nav: true,
		navText: ['PREV','NEXT'],
        responsive : {
            0 : {
                items: 1,
            },
            992 : {
                items: 2,
            }
        }
    });
    
    
//    page details slider
    $(".pdetails-slider .slides").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true,
		navText: ['PREV','NEXT'],
        active: true,
        smartSpeed: 600,
        autoplay: true,
    });
    
});

