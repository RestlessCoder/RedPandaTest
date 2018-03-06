/* Navbar fixed-top in certain px */
$(document).ready(function() {
	
	$(window).scroll(function() {
		
		if($(window).scrollTop() > 950) {
			$('.navbar').addClass('navbar-fixed-top');
			$('.navbar').css("background-color", "rgba(0,0,0,0.8)");
		
		}
		if($(window).scrollTop() < 950) {
			$('.navbar').removeClass('navbar-fixed-top');
				$('.navbar').css("background-color", "black");
		
		}
	});
});


/* Navbar click */
$(".navbar-inverse ul li a[href^='#']").on('click', function(e) {

	e.preventDefault();
	
	var hash = this.hash;
	
	$('html,body').animate({
		scrollTop: $(hash).offset().top
	}, 700, function() {
		
		window.location.hash= hash;
	});
	
});

/* Animation */
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

//FadeInLeft
$(document).ready(function() {
	
	$('.js-fadeInLeft-1').waypoint(function() {
		$('.js-fadeInLeft-1').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInLeft-2').waypoint(function() {
		$('.js-fadeInLeft-2').addClass('animated fadeInUp');
	}, {
		offset:'60%'
	});
});

//FadeInRight
$(document).ready(function() {
	
	$('.js-fadeInRight-1').waypoint(function() {
		$('.js-fadeInRight-1').addClass('animated fadeInUp');
	}, {
	  offset:'60%'
	});
	
	$('.js-fadeInRight-2').waypoint(function() {
		$('.js-fadeInRight-2').addClass('animated fadeInUp');
	}, {
		offset:'60%'
	});
});

//FadeInDown
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
	




