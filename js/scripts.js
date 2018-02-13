$(document).ready(function() {

	//Angle Double Down on Home Page
	$('.nav-links').click(function () {
	    $('#nav-links').slideToggle();
	});



	// let bigImage = $('#img-carousel');
	// let imgTime;
	// let i = 0;
	// let imageArray = [
	// 'img/food-carousel/1.jpg', 
	// 'img/food-carousel/2.jpeg', 
	// 'img/food-carousel/3.jpeg', 
	// 'img/food-carousel/4.jpeg', 
	// 'img/food-carousel/5.jpeg', 
	// 'img/food-carousel/6.png'
	// ];

	//Image Carousel on Home Page
	// function changeImageByTimer() {
	// 	bigImage.animate({opacity: .1, duration: 1000}, function()
	//   		{$(this).attr('src', imageArray[i])});
	// 	i++;
	// 	if (i >= 6) {
	//     	i = 0;
	// 	}
	//   	bigImage.animate({opacity: 1, duration: 1000})
	// };

	// if ($(window).width() > 750) {
	// 	imgTimer = setInterval(changeImageByTimer, 5000);
	// 	bigImage.addClass('on');
	// }

 //    window.onresize = function() {
	// 	if ($(window).width() > 750 && !bigImage.hasClass('on')) {
	// 		imgTimer = setInterval(changeImageByTimer, 5000);
	// 		bigImage.addClass('on');
	// 	} else if ($(window).width() < 751 && bigImage.hasClass('on')) {
	// 		clearInterval(imgTimer);
	// 		bigImage.removeClass('on');
	// 	}
 //    };

});
