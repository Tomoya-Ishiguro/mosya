$(function() {
	$(window).load(function(){
		$('.flexslider').flexslider({
			controlNav: false,
			controlNav: false,
			directionNav: false,
			slideshow: true,
			slideSpeedspeed: 100,
			animation: "fade",
			animationSpeed: 3000,
			animationLoop: true
		});

	$('#page-top').click(function(){
		$('html,body').animate({scrollTop:0},500, 'swing');
		return false;
	});

	$('#slidemenu-btn').on('click', function(){
		$('.globalnav').slideToggle();
	});

	});
});