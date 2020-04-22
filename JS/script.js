$(window).on("load", function() {
	$(".loader .inner").fadeOut(500, function() {
		$(".loader").fadeOut(700);
	});

	$(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });
    
});

$(document).ready(function() {
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed",{
		strings: ["App Developer","Web Developer","AR Developer","VR Developer"],
		typeSpeed: 200,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel({
	    items:4,
	    loop:true,
	    margin:10,
	    autoplay:true,
	    autoplayTimeout:2000,
	    autoplayHoverPause:true,
	    responsiveClass:true,
    	responsive:{
	        0:{
	            items:1
	        },
	        576:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        992:{
	        	items:4
	        }
    	}
	});

    var skillsTopOffset = $(".skillSection").offset().top;
    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false;
    $(window).scroll(function() {
    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
    		$('.chart').easyPieChart({
		    	easing: 'easeInOut',
		    	barColor: 'white',
		    	trackColor: false,
		    	scaleColor: false,
		    	lineWidth: 4,
		    	size: 152,
		    	onStep: function(from, to, percent) {
		    		$(this.el).find('.percent').text(Math.round(percent));
		    	}
    		});
    	}

    
	    if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
	    	$(".counter").each(function() {
			    var element = $(this);
			    var endVal = parseInt(element.text());
			    element.countup(endVal);
			})
			countUpFinished = true;
	    }
    });

    $("[data-fancy]").fancybox();

    $("#filters a").click(function() {
    	$('#filters.current').removeClass("current");
    	$(this).addClass("current");
    	var selector = $(this).attr("data-filter");
    	$(".items").isotope({
	    	filter: selector,
	    	animationOptions: {
	    		duration: 1500,
	    		easing: 'linear',
	    		queue: false
	    	}
	    });
	    return false;
    });

    $("#navigation li a").click(function(e) {
    	e.preventDefault();
    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	$("html, body").animate({scrollTop: targetPosition - 70}, "slow");
    });

    const nav = $("#navigation");
  	const navTop = nav.offset().top;
  	$(window).on("scroll", stickyNavigation);
	function stickyNavigation() {
  		var body = $("body");
  		if($(window).scrollTop() >= navTop) {
    		body.css("padding-top", nav.outerHeight() + "px");
    		body.addClass("fixedNav");
  		} 
  		else {
    		body.css("padding-top", 0);
    		body.removeClass("fixedNav");
   		}
	}

});  