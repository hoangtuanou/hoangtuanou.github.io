$(document).ready(function(){
	$('.mobile-menu').click(function(e){
		var icon = $('.icon-mobile-menu');
		var nav = $('.main-nav');
		nav.slideToggle(300);
		if(icon.hasClass('ion-navicon-round')){
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
			nav.css('display','block');
		}
		else{
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
			nav.css('display','none');
		}
		e.preventDefault();
	});

	$(function(){
		$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	$('.js-section-features').waypoint(function(direction){
		if(direction == 'down')
			$('nav').addClass('sticky');
		else
			$('nav').removeClass('sticky');
	},{
		offset: '60px'
	});

	$('.js-wp-1').waypoint(function(direction){
		$('.js-wp-1').addClass('animated fadeIn');
	},{
		offset: '70%'
	});
	$('.js-wp-2').waypoint(function(direction){
		$('.js-wp-2').addClass('animated slideInLeft');
	},{
		offset: '70%'
	});
	$('.js-wp-3').waypoint(function(direction){
		$('.js-wp-3').addClass('animated jello');
	},{
		offset: '70%'
	});

	$('.logo-black').click(function(){
		$('html,body').animate({scrollTop: 0},1000);
	});

	var latValue = 48.8709664,lngValue = 2.3597744;
	var map = new GMaps({
		div: '.map',
		lat: latValue,
		lng: lngValue,
		zoom: 15,
		scrollWheel: false
	});
	map.addMarker({
		lat: latValue,
		lng: lngValue,
		title: 'Omnifood'
	});
});