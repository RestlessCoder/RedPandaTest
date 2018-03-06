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

/* Animation */
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
	
});

//fadeInRight
$(document).ready(function() {
	
	$('.js-fadeInRight-1').waypoint(function() {
		$('.js-fadeInRight-1').addClass('animated fadeInRight');
	}, {
	  offset:'60%'
	});
	
});

//bounceInLeft 
$(document).ready(function() {
	
	$('.js-bounceInLeft-1').waypoint(function() {
		$('.js-bounceInLeft-1').addClass('animated bounceInLeft');
	}, {
	  offset:'60%'
	});
	
	$('.js-bounceInLeft-2').waypoint(function() {
		$('.js-bounceInLeft-2').addClass('animated bounceInLeft');
	}, {
	  offset:'80%'
	});
	
});

//bounceInRight
$(document).ready(function() {
	
	$('.js-bounceInRight-1').waypoint(function() {
		$('.js-bounceInRight-1').addClass('animated bounceInRight');
	}, {
	  offset:'80%'
	});
	
});

//bounceInUp
$(document).ready(function() {
	
	$('.js-bounceInUp-1').waypoint(function() {
		$('.js-bounceInUp-1').addClass('animated bounceInUp');
	}, {
	  offset:'80%'
	});
	
});