$(document).ready(function() {

	$('.nav-links').click(function () {

		if ($(window).width() < 625) {
	    	$('#nav-links').slideToggle();
		}
	});

});
