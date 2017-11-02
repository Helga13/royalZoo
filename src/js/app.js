$(document).ready(function () {
  
  'use strict'
  
  // slider
  
  $('.js-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000
  });
  
  // tooltip
  $('.js-tooltip').mousemove(function (e) {
	var tooltip = $(this).next('.tooltip');
	$(tooltip).css({
		"top": e.pageY + 5
		, "left": e.pageX + 5
	}).show();
  }).mouseout(function () {
	var tooltip = $(this).next('.tooltip');
	$(tooltip).hide().css({
		"top": 0
		, "left": 0
	});
  });
  
  
})