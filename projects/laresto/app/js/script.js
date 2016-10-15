$(document).ready(function(){

	/*-----BUTTON SHOW MENU-----*/
	$('.icon-1').click(function(e){
  		$(this).toggleClass('x-icon-1');
  		$('.navbar-hide').toggleClass('animate-show-menu');
  		e.preventDefault();
	});
	$('.fa-1').click(function(){
		$('.dropdown-menu-navbar-hide').toggleClass('toggle-display');
	});
	$('.fa-2').click(function(){
		$('.dropdown-menu-navbar-hide-2').toggleClass('toggle-display');
	});
	/*-----SLIDER-----*/
	$('.slide-container').each(function(){
		var $this = $(this);
		var $group = $this.find('.slide-show');
		var $slide = $this.find('.slides');
		var currentIndex = 0;
		var timeout;

		function move(newIndex){
			var animateLeft,slideLeft;

			advance();

			if($group.is(':animated') || currentIndex == newIndex){
				return;
			}

			if(newIndex > currentIndex){
				slideLeft = '100%';
				animateLeft = '-100%';
			}
			else{
				slideLeft = '-100%';
				animateLeft = '100%';
			}

			$slide.eq(newIndex).css({ left: slideLeft, display: 'block'});
			$group.animate({left: animateLeft},function(){
				$slide.eq(currentIndex).css({display: 'none'});
				$slide.eq(newIndex).css({left: 0});
				$group.css({left: 0});
				currentIndex = newIndex;
			});
		}

		function advance(){
			clearTimeout(timeout);
			timeout = setTimeout(function(){
				if(currentIndex < $slide.length - 1){
					move(currentIndex + 1);
				}
				else{
					move(0);
				}
			},3000);
		}

		advance();
		$('#btn-prev').click(function(){
				if(currentIndex > 0)
					move(currentIndex - 1);
		});
		$('#btn-next').click(function(){
				if(currentIndex < $slide.length - 1)
					move(currentIndex + 1);
		});
	});

	/*-----STICKY NAV-----*/
	$('.shell').waypoint(function(direction){
		if(direction == "down"){
			$('nav').addClass('sticky-bar');
		}
		else
			$('nav').removeClass('sticky-bar');
	});

	/*-----BUTTON SCROLL TO TOP-----*/
	$('#section-1').waypoint(function(direction){
		if(direction == "down")
			$('.btn-top').addClass('btn-scroll-top');
		else
			$('.btn-top').removeClass('btn-scroll-top');
	},{
		offset: '20%'
	});
	$('.btn-top').click(function(){
		$('html,body').animate({scrollTop: 0},500);
	});

});