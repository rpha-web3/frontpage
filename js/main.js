;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
	  return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
	      (navigator.platform.indexOf("iPhone") != -1) || 
	      (navigator.platform.indexOf("iPod") != -1)
	    );
	};

	
	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if ( isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	var menuAnimate = function(o, margin, duration, mul) {
		var navLi = $('#nav > ul > li'), 
			ktemp = 0;
		navLi.each( function(k){
			var el = $(this);
			setTimeout(function() {
				el.velocity(
					{ opacity: o, marginRight: margin }, 
					{ duration: duration }
				);
			},  k * mul );
			ktemp = k;
		});
		
		console.log(ktemp);
		setTimeout(function(){
			$('.js-nav-call-to-action').velocity(
				{ opacity: o, marginRight: margin }, 
				{ duration: duration }
			);
		}, ktemp+1 * mul );
		
		
	};

	var burgerMenu = function() {
		$('body').on('click', '.js-nav-toggle', function(){
			$('#nav > ul > li, .js-nav-call-to-action').css({ marginRight: -50, opacity: 0 });
			$(this).toggleClass('active');
			
			var mainNav = $('#main-nav');
			mainNav.slideToggle(400).toggleClass('active');
			

			if ( mainNav.hasClass('active') ) {
				menuAnimate(1, 0, 400, 200);	
			} else {
				menuAnimate(0, -50, 1, 0);	
			}

		});
	};

	var mobileMenuState = function() {
		if ( $(window).width() > 768 ) {
			$('#main-nav').removeClass('active').show();
			$('#nav > ul > li, .js-nav-call-to-action').attr('style', '');
		} else {
			$('.js-nav-toggle').removeClass('active');
			$('#main-nav').hide();
		}
	};

	var imgHover = function(){
		$('.js-work-item').mouseenter(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-overlay-bg, .js-overlay-text').stop().animate({
					opacity: 1
				});
			}
		}).mouseleave(function(){
			if ( $(window).width() > 768 ) {
				$(this).find('.js-overlay-bg, .js-overlay-text').stop().animate({
					opacity: 0
				});
			}
		});
	};

	var viewWorks = function() {
		$('.js-view').click(function(evt){
			
			var $this = $(this);
			$this.toggleClass('active');
			setTimeout(function(){
				$('.js-more-works').slideToggle(400);
				if ( $this.hasClass('active') ) {
					$this.find('.js-view-text').text('View Less');
				} else {
					$this.find('.js-view-text').text('View All');
				}
			}, 500);

			evt.preventDefault();

		})
	};

	



	// Easy Repsonsive Tabs
	var responsiveTabs = function(){
		$('#tab-feature').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto', 
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	            
	    });
	    $('#tab-feature-center').easyResponsiveTabs({
	      type: 'default',
	      width: 'auto',
	      fit: true, 
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion', 
	      tabidentify: 'hor_1' 
	      
	    });
	    $('#tab-feature-vertical').easyResponsiveTabs({
	      type: 'vertical',
	      width: 'auto',
	      fit: true,
	      inactive_bg: '',
	      active_border_color: '',
	      active_content_border_color: '',
	      closed: 'accordion',
	      tabidentify: 'hor_1'
	    });
	};

	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
		  gallery:{
		    enabled:true
		  }
		});
	};

	// Smooth Scroll Top
	var sScrollTop = function () {

		$(window).scroll(function(){
			if ($(window).scrollTop() > 100 ) {
				$('.gotop').show();
			} else {
				$('.gotop').hide();
			}
		});
		$('.gotop').click(function(event){

		    $('html, body').animate({
		        scrollTop: 0
		    }, 500);

		    event.preventDefault();
		    return false;
		});
	};

	var wResize = function() {
		mobileMenuState();
		imgHover();
		$(window).resize(function(){
			mobileMenuState();
			imgHover();
		});

	};
	

	$(function(){
		burgerMenu();
		mobileFastClick();
		responsiveTabs();
		magnifPopup();
		sScrollTop();
		wResize();
		viewWorks();
	});


}());