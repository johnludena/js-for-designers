console.log('codepen test');

$(window).on('load', function() {
	$("body").removeClass("preload");
	$(".spinner").hide();
});

$(document).ready(function(){

	// Menu Toggle
	var navigation = $('nav'),
		navigationToggle = $('.toggle');

	navigation.hide();

	navigationToggle.on('click', function() {

		$(this).toggleClass('open');
		navigation.fadeToggle('fast');

	});

	// Scroll Down
	var scrollToggle = $('.scroll'),
		scrollTarget = $('.body');

	scrollToggle.show();

	scrollToggle.on('click', function(e) {
		e.preventDefault();

		console.log('you clicked on the button...')

		$('html, body').animate({
			scrollTop: scrollTarget.offset().top
		}, 1000);

	});

	// Reveal Animation
	var animatedElements = $('[data-animation]');

	$.each(animatedElements, function(index, value) {

		var $this = $(this),
			animation = $this.data('animation');

		$this.addClass('hidden').viewportChecker({
			classToAdd: 'visible animated ' + animation,
			classToRemove: 'hidden',
			offset: 30,
			// callbackFunction: function(elem, action){
			// 	$('header').removeClass('hidden');
			// },
		});

	});

	// Parallax Scrolling
	var parallaxElements = $('[data-parallax]'),
		browserWindow = $(window);

	$.each(parallaxElements, function(index, value) {

		var $this = $(value),
			speed = $this.data('parallax');

		browserWindow.scroll(function() {

			var offset = -(browserWindow.scrollTop() / speed);
 
			$this.css({ backgroundPosition: '50% ' + offset + 'px' });
    
		});

	});

	// Background and logo change on CTA hover
	$('.top-cta, .logo').hover(function(){
		// $('header .overlay').addClass('active');
		$('.logo').addClass('active');
	}, function(){
		// $('header .overlay, .logo').removeClass('active');
		$('.logo').removeClass('active');
	});

	// Mailchimp AJAX signup form
	$('.mc_embed_signup > form').submit(function (e) {
    	e.preventDefault();

    	var validForm = true;
    	var inputArray = $(this).find('input.required');

    	inputArray.each(function(item) {
    		if ($(this).val() == '') {
    			console.log('Not so fast cowboy!');
    			validForm = false;
	    		$('.mc_embed_signup .error-message').show();
	    		$('form input').addClass('error');
    		}

    	});

    	if (validForm == true) {
	    	var formContainer = $(this).closest('.mc_embed_signup');
	        var formData = $(this).serialize();

			$.ajax({
				type: $(this).attr('method'), 
				url: $(this).attr('action'),
				data: formData, 
				cache: false,
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				encode: true, 
				error: function(err) {
					console.log('Uh, oh. There was an error:', err);
				},
				success: function(data){
					console.log('Success!');
				}
			})
			// Our callback function 
			.done(function(data){
				$(formContainer).hide();
				$(formContainer).parent('.cta-form').siblings('.cta-form').hide();
				$('.success-message').show();
			})
    	}

    	return; // No go on form...	
    	
    });

});
