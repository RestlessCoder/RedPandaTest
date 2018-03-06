/* Navbar scrolling effect */
$(document).ready(function() {
	
	$(window).scroll(function() {
		
		if($(window).scrollTop() > 20) {
			$('.navbar').css("background-color", "rgba(0,0,0,0.5)");
		}
		
		if($(window).scrollTop() < 20) {
			$('.navbar').css("background-color", "black");
		}	
		
	});
});

//fadeInDown
$(document).ready(function() {
	
	$('.js-fadeInDown-1').waypoint(function() {
		$('.js-fadeInDown-1').addClass('animated fadeInDown');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInDown-2').waypoint(function() {
		$('.js-fadeInDown-2').addClass('animated fadeInDown');
	}, {
		offset:'60%'
	});
	
	$('.js-fadeInDown-3').waypoint(function() {
		$('.js-fadeInDown-3').addClass('animated fadeInDown');
	}, {
		offset:'60%'
	});
});

//FadeInLeft
$(document).ready(function() {
	
	$('.js-fadeInLeft-1').waypoint(function() {
		$('.js-fadeInLeft-1').addClass('animated fadeInLeft');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInLeft-2').waypoint(function() {
		$('.js-fadeInLeft-2').addClass('animated fadeInLeft');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInLeft-3').waypoint(function() {
		$('.js-fadeInLeft-3').addClass('animated fadeInLeft');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInLeft-4').waypoint(function() {
		$('.js-fadeInLeft-4').addClass('animated fadeInLeft');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInLeft-5').waypoint(function() {
		$('.js-fadeInLeft-5').addClass('animated fadeInLeft');
	}, {
	  offset:'60%'
	});
	
});

//FadeInRight
$(document).ready(function() {
	
	$('.js-fadeInRight-1').waypoint(function() {
		$('.js-fadeInRight-1').addClass('animated fadeInRight');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInRight-2').waypoint(function() {
		$('.js-fadeInRight-2').addClass('animated fadeInRight');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInRight-3').waypoint(function() {
		$('.js-fadeInRight-3').addClass('animated fadeInRight');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInRight-4').waypoint(function() {
		$('.js-fadeInRight-4').addClass('animated fadeInRight');
	}, {
	  offset:'60%'
	});
	
});

//FadeInUp
$(document).ready(function() {
	
	$('.js-fadeInUp-1').waypoint(function() {
		$('.js-fadeInUp-1').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInUp-2').waypoint(function() {
		$('.js-fadeInUp-2').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInUp-3').waypoint(function() {
		$('.js-fadeInUp-3').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInUp-4').waypoint(function() {
		$('.js-fadeInUp-4').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
});