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

	});
})(jQuery);
