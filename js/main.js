// Main JavaScript file
// Written by Zander Blasingame

(function($) {
	$(document).ready(function () {
		//smooth scrolling
		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		//navbar
		$('.header').sticky({
			topSpacing: 0
		});

		$('.body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		});

		//parallax
		// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		// 	$('.parallax').css({'background-attachment': 'scroll'});
		// } else {
		// 	$('.parallax').parallax('50%', 0.1);
		// }

		//google maps
		function init_map() {
			var location = new google.maps.LatLng(44.231505, -76.109560);

			var map_canvas = document.getElementById('map');
			var map_options = {
				center: location,
				zoom: 14,
				panControl: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			var map = new google.maps.Map(map_canvas, map_options);

			var marker = new google.maps.Marker({
				position: location,
				map: map
			})

		}

		google.maps.event.addDomListener(window, 'load', init_map);

		// bg image for homepage
		$('.screen-height').height($(window).height());

		$(window).resize(function() {
			$('.screen-height').height($(window).height());
		});

		// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		// 	$('#home').css({'background-attachment': 'scroll'});
		// }


		// code for carousel
		$('#stories').carousel();

	});

	//preloader
	$(window).on('load', function (){
		$('#preloader span').fadeOut();
		$('#preloader').delay(350).fadeOut('slow', function() {
			$('body').css({'overflow-y': 'scroll'});
		});
	});

})(jQuery);
