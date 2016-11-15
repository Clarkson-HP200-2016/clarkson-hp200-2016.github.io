// Main JavaScript file
// Written by Zander Blasingame

(function($) {
	$(document).ready(function () {
		// Initialize skrollr
		var s = skrollr.init();

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

	});
})(jQuery);
