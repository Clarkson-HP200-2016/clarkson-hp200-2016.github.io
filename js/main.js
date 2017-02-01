// Main JavaScript file
// Written by Zander Blasingame

(function($) {
	'use-strict';

	$(document).ready(function () {
		//smooth scrolling
		$('a[href*=#]').on('click', function(e){
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

		// navbar
		$('.header').sticky({
			topSpacing: 0
		});

		$('.body').scrollspy({
			target: '.navbar-custom',
			offset: 70
		});

		// timeline animation
		// function for checking if element is in viewport
		function is_in_viewport(el) {
			var rect = el.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
		}

		// listener
		$(window).on('load resize scroll', function() {
			$('.timeline li').each(function(index, element) {
				if (is_in_viewport(element)) {
					$(this).addClass('in-view');
				}
			});
		});

		// fix width of div in timeline
		$(window).on('load resize', function() {
			$('.timeline li div').each(function() {
				var new_width = $(this).parents('.container').width() - 100;
				var mq = window.matchMedia('(min-width: 600px)');
				new_width = new_width / (mq.matches ? 2 : 1);
				$(this).width(new_width);

				// this code fixes left offset
				if ($(this).is('.timeline li:nth-child(even) div')) {
					var new_offset = -1 * (new_width + 65);
					$(this).css('left', new_offset);
				}
			});
		})

		// google maps
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
