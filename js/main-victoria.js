/* Navbar scrolling effect*/
$(document).ready(function() {
	
	$(window).scroll(function() {
		
		if($(window).scrollTop() > 40) {
			$('.navbar').css("background-color", "rgba(0,0,0,0.5)");
		}
		
		if($(window).scrollTop() < 40) {
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
//lightSpeedIn
$(document).ready(function() {
	
	$('.js-lightSpeedIn-1').waypoint(function() {
		$('.js-lightSpeedIn-1').addClass('animated lightSpeedIn');
	}, {
	  offset:'60%'
	});
	
	$('.js-lightSpeedIn-2').waypoint(function() {
		$('.js-lightSpeedIn-2').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
	});
	
	$('.js-lightSpeedIn-3').waypoint(function() {
		$('.js-lightSpeedIn-3').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
	});
	
	$('.js-lightSpeedIn-4').waypoint(function() {
		$('.js-lightSpeedIn-4').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
	});
	
	$('.js-lightSpeedIn-5').waypoint(function() {
		$('.js-lightSpeedIn-5').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
	});
	
	$('.js-lightSpeedIn-6').waypoint(function() {
		$('.js-lightSpeedIn-6').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
	});
	
	$('.js-lightSpeedIn-7').waypoint(function() {
		$('.js-lightSpeedIn-7').addClass('animated lightSpeedIn');
	}, {
		offset:'60%'
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

//zoomIn
$(document).ready(function() {
	
	$('.js-zoomIn-1').waypoint(function() {
		$('.js-zoomIn-1').addClass('animated zoomIn');
	}, {
	  offset:'60%'
	});
	
	$('.js-zoomIn-2').waypoint(function() {
		$('.js-zoomIn-2').addClass('animated zoomIn');
	}, {
	  offset:'75%'
	});
	
});

//FadeInLeft
$(document).ready(function() {
	
	$('.js-fadeInLeft-1').waypoint(function() {
		$('.js-fadeInLeft-1').addClass('animated fadeInLeft');
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
	
});


/* Google Map */
function initMap() {
	var myLatLng = {lat: 54.5941, lng: -5.93412};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: myLatLng
    });
	
    var marker = new google.maps.Marker({
		position: myLatLng,
		icon: 'img/transparent-google.png',     
		map: map
		
    });
}
	


	
    
		