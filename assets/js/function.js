
/*---------------------- 
	Script Guide
------------------------
01. BROWSER AGENT FUNCTION
	01.1 Check CHROME (Mobile / Tablet)
	01.2 Check IOS
	01.3 Check FIREFOX
	01.4 Check IE (< IE10)
	01.5 Check IE11
	01.6 Check IE11 (Not Windows Phone)
	01.7 Check IE10
	01.8 Check IE9
	01.9 Check Safari/Chrome Mac
	
02. PRELOAD
    02.1 Hide All Animation Class
	02.2 Waypoint Animate CSS
	02.3 Stellar Parallax
	
03. OWL CAROUSEL
    03.1 Hero Slider
	03.2 Story Carousel 
	03.3 Gift Carousel
	03.4 Journal Carousel
	03.5 Hero slider background setting
	
04. ELEMENT
    04.1 Magnific Zoom Gallery
    04.2 Simple Countdown Timer
    04.3 Gallery Masonry
	04.4 Onepage smooth scroll
	04.5 Active current menu while scrolling
	04.6 Sticky Header
	04.7 Audio Controls
	
05. Custom google map
	
*/

(function ($) {

    "use strict";

$(document).ready(function () {
	
	
    // 01. BROWSER AGENT FUNCTION		
	//====================================================================================
	
	// 01.1 Check Chrome (Mobile / Tablet)
	//================================================================================
	var isChromeMobile = function isChromeMobile() {
		if (device.tablet() || device.mobile()) {
			if (window.navigator.userAgent.indexOf("Chrome") > 0 || window.navigator.userAgent.indexOf("CriOS") > 0){
				return 1;
			}
		}
	}
	
	// 01.2 Check IOS
	//================================================================================
	var isIOS = function isIOS() {
		if (window.navigator.userAgent.indexOf("iPhone") > 0 || window.navigator.userAgent.indexOf("iPad") > 0 || window.navigator.userAgent.indexOf("iPod") > 0){
			return 1;
		}
	}
	
	// 01.3 Check FIREFOX 
	//================================================================================
	var is_firefox = function is_firefox() {
		if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
			return 1;
		}
	}
	
	// 01.4 Check IE (< IE10)
	//================================================================================
	var isIE = function isIE() {
 		if (window.navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.5 Check IE11
	//================================================================================
	var isIE11 = function isIE11() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./)) {
   		 	return 1;
		}
	}
	
	// 01.6 Check IE11 (Not Windows Phone)
	//================================================================================
	var isIE11desktop = function isIE11desktop() {	
 		if (!!navigator.userAgent.match(/Trident\/7\./) && window.navigator.userAgent.indexOf("Windows Phone") < 0) {
   		 	return 1;
		}
	}
	
	// 01.7 Check IE10
	//================================================================================
	var isIE10 = function isIE10() {
 		if (window.navigator.userAgent.indexOf("MSIE 10.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.8 Check IE9
	//================================================================================
	var isIE9 = function isIE9() {
 		if (window.navigator.userAgent.indexOf("MSIE 9.0") > 0) {
   		 	return 1;
		}
	}
	
	// 01.9 Check Safari/Chrome Mac
	//================================================================================
	var isSafari = function isSafari() {
	 	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Mac') != -1) {
   		 	return 1;
		}
	}
	
    // 02. PRELOAD
	//====================================================================================
	var preloader = $('#preloader');
	preloader.delay(50).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(50).css({'overflow':'visible'});
			
   // 02.1 Hide All Animation Class
   //================================================================================
   var animation_nwds = $('.animation');
   if( !device.tablet() && !device.mobile() && !isIE9() ) {
		animation_nwds.css({
		visibility: 'hidden'
		});	
	}
				
	// 02.2 Waypoint Animate CSS
	//================================================================================
	Pace.on('hide', function () {
			if( !device.tablet() && !device.mobile() && !isIE9() ) {	
			animation_nwds.each(function(){
        		var _this = this;
        		var animation_waypoint = new Waypoint({
            		element: _this,
            		handler: function (direction) {
						$(this.element).css({ visibility: 'visible' });
						$(this.element).addClass('animated');
            			},
            			offset: '90%'
        			});
        	});
			
		}
		

		
	// 02.3 Stellar Parallax
	//================================================================================
	if( !device.tablet() && !device.mobile() && !isIE9() && !isIE10() && !isSafari() ) {
        var parallax_nwds = $(".parallax");
		parallax_nwds.css("background-attachment","fixed");
		$(window).stellar({
			horizontalScrolling: false,
			responsive: true,
		});
	}	
	
	}); // END of Pace on Hide	
	
    // 03. OWL CAROUSEL
	//====================================================================================
	
	// 03.1 Hero Slider
	//================================================================================
	var heroslider = $('#hero-slide');
    heroslider.owlCarousel({
    loop:true,
    nav:false,
    pagination:false,
    items:1,
    navigation:true,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut: 'fadeOut'
    });
	
	// 03.2 Story Carousel
	//================================================================================
	var storyslider = $('#story-slider');
    storyslider.owlCarousel({
    loop:true,
    nav:false,
    pagination:true,
    items:1,
    navigation:true,
    autoplay:true,
    autoplayTimeout:5000,
    });

    // 03.3 Gift Carousel
	//================================================================================
	var giftslider = $('#gift-slide');
    giftslider.owlCarousel({
    loop:true,
    nav:false,
    pagination:true,
    navigation:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
	margin: 20,
    responsiveClass:true,
    responsive:{

        0:{
            items:2
        },

        640:{
            items:3
        },
 
        991:{
            items:4
        },

       1100:{
            items:5
        }
    }
    });
	
	// 03.4 Journal Carousel
	//================================================================================
	var journalslider = $('#journal-slide');
    journalslider.owlCarousel({
    loop:true,
    nav:false,
    pagination:true,
    margin: 30,
    navigation:true,
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{

        0:{
            items:1
        },

        991:{
            items:2
        }
    }
    });
	
	// 03.5 Hero slider background setting
	//================================================================================
    function sliderBgSetting() {
        if ($(".owl-full-width .slide").length) {
            $(".owl-full-width .slide").each(function() {
                var $this = $(this);
                var img = $this.children(img);
                var imgSrc = img.attr("src");

                $this.css({
                    backgroundImage: "url("+ imgSrc +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }
	// initialization function on document.ready
	sliderBgSetting();

    // 04. ELEMENT
	//====================================================================================
	
	// 04.1 Magnific Zoom Gallery
	//================================================================================
	var zommgallery = $('.zoom-gallery');
    zommgallery.magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
    
  });


	// 04.2 Simple Countdown Timer
	//================================================================================
	var simpletimer = $('#simple_timer');
     simpletimer.syotimer({
        year: 2018,
        month: 4,
        day: 10,
        hour: 11,
        minute: 25
     });

	// 04.3 Gallery Masonry
	//================================================================================
    var $grid4 = $('.gallery-masonry').imagesLoaded( function() {
      $grid4.masonry({
      // options
      itemSelector: '.item',  
      });
    });
  });

			
 	// 04.4 Onepage smooth scroll
	//================================================================================
    $(function() {
        $(".onepagenav > ul > li > a:not(.dropdown-toggle)").on("click", function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
                if (target.length) {
                    $("html, body").animate({
                    scrollTop: target.offset().top -60
                }, 1000, "easeInOutExpo");
                    return false;
                }
            }

            return false;
        });
    });
	

 	// 04.5 Active current menu while scrolling
	//================================================================================
    var sections = $("section"),
        nav = $(".navBare"),
        nav_height = nav.outerHeight();

    function activeMenuItem() {

        var cur_pos = $(window).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - nav_height - 20,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("ul > li > a").parent().removeClass("active");
            }
        });
    }
	
	  var navicon = $('.navicon'),
	  activediv = $(".sidenav,section,.mask"),
	  link = $('.sidenav ul li a');
	  navicon.on('click', function(){ 
	  activediv.addClass('is-active');
	  }); 
	  $('.mask').on('click', function(){ 
	  $(this).removeClass('is-active');
	  $(".sidenav,section").removeClass('is-active');
	  });

	  link.on('click', function(){ 
	  activediv.removeClass('is-active');
	  });
	
	/*==========================================================================
	  WHEN WINDOW SCROLL
	==========================================================================*/
    $(window).on("scroll", function() {
        activeMenuItem();
    });
	
 	// 04.6 Sticky Header
	//================================================================================
	var stickyNavTop = $( 'body' ).offset().top + 150;
	var stickyNav = function ()
		{
			 var scrollTop = $( window ).scrollTop(); if ( scrollTop > stickyNavTop ){
			  $(".nav-weds").addClass("is-active");
			 } else{
			  $(".nav-weds").removeClass("is-active");
			 }
		 };
		 stickyNav();
		 $( window ).scroll( function (){
		   stickyNav();
		 });

 	// 04.7 Audio Controls
	//================================================================================
	var stopaudio = $('#stop-audio');
	var audio = $("#my_audio");
	stopaudio.on('click', function(){ 
	   audio.get(0).pause();
	   autoplay = true;
	}); 

	var playaudio = $('#play');
	playaudio.on('click', function(){ 
	   audio.get(0).play();
	}); 

	
})(jQuery);



