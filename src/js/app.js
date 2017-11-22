$(document).ready(function () {
  
  'use strict'
  
  // slider
  
  $('.js-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
//    autoplay: true,
    autoplaySpeed: 4000    
  });
  
  $('.products_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
     breakpoint: 768,
      settings: {
      slidesToShow: 2,
        slidesToScroll: 2,
      }
    }
  ]
  });
  
  $('.hits_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2
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
  
  // calc
  
  function number() {
    var number = $(".js-number");
    number.each(function () {
      var max_number = +($(this).attr("data-max-number"));
      var input = $(this).find("input");
      var plus = $(this).find(".js-plus-number");
      var minus = $(this).find(".js-minus-number");
      plus.on("click", function () {
        var val = +(input.val());
        if (val >= max_number) {
          return false
        }
        else {
          val += 1;
          input.val(val);
        }
      });
      minus.on("click", function () {
        var val = +(input.val());
        if (val > 1) {
          val -= 1;
          input.val(val);
        }
        return false;
      });
      input.on("change", function () {
        var val = +$(this).val();
        if (val > max_number) {
          val = max_number;
          $(this).val(val);
        }
        if (val == '') {
          val = 1;
          $(this).val(val);
        }
      });
    });
  }
  number();
  
  // product slider with thumbs

  $('.show_image').click(function (e) {
    e.preventDefault();
    var mainImage = $(this).index();
    $('.show_image').removeClass('active');
    $(this).addClass('active');
    $('.main_image li').removeClass('active').eq(mainImage).addClass('active');
  });
  
  // popup
  
  $('.js-popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
        	$('#'+DataId).fadeIn(100);
        	$('body').css('overflow', 'hidden');  
        }
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
            $(this).fadeOut(100);
            $('body').css('overflow', 'auto'); 
        }
    });
	$('.popup_close').click(function (e) {
         e.preventDefault();
           $(this).parents('.popup').fadeOut(100);
           $('body').css('overflow', 'auto'); 
    });
    $('.popup_content').click(function(e) {
		e.stopPropagation();
	});
  
  $('a.anchor').click(function (e) {
    e.preventDefault(); 
	var elementClick = $(this).data('href')
	var destination = $(elementClick).offset().top;
	$('html:not(:animated),body:not(:animated)').animate({scrollTop: destination}, 1100);
  });
  
  $('.js-field').on('click', '.subtitle', function(){
    var field = $(this);
    if( $(field).hasClass('active')){
      $(field).toggleClass('active').next().slideUp(100);
    }else{
      $('.js-field .subtitle').removeClass('active').next().slideUp(100);
      $(field).toggleClass('active').next().slideDown(300);
    }
  });
  
    // popup menu
  
  $('.burger_menu').click(function(e) {
    e.preventDefault();    
  if($('.burger_menu').hasClass('opened')){
    
    $('.main_nav').removeClass('opened');
//    $('.main_nav .wrap .left_nav').fadeOut(100);
    $('body').css('overflow', 'auto').find('svg').removeClass('orange'); 
    $('.burger_menu').removeClass('opened');
  }else{
    $(this).toggleClass('opened');
    $('.main_nav').addClass('opened');
//    $('.main_nav .wrap .left_nav').fadeIn(300);
    $('body').css('overflow', 'hidden').find('svg').addClass('orange');   
    }
  }); 
  	$('.nav_close, .main_nav .wrap').click(function (e) {
      e.preventDefault();
      $('.main_nav').removeClass('opened');
//      $('.main_nav .wrap .left_nav').fadeOut(100);
      $('body').css('overflow', 'auto').find('svg').removeClass('orange'); 
      $('.burger_menu').removeClass('opened');
    });
    $('.main_nav nav').click(function (e) {
      e.stopPropagation();
    });
  
  if($(window).width() < 993) {
    
    $('.burger_menu').click(function(e) {
      var dropdownHeight = $('.main_nav li.active .dropdown').height();
      $('.main_nav.opened .wrap .left_nav').css({'padding-bottom': dropdownHeight});
      console.log(dropdownHeight);
    });
    
  }
  
//  if($('.main_nav').hasClass('opened')){
//    $('.main_nav .wrap .left_nav > li').on('click',  function(){
//        $('.main_nav .wrap .left_nav > li').removeClass('active');
//        $(this).parent('li').addClass('active');
//    });
//  }
  
  if($(window).width() < 481) {
    
    $('.brands_wrap').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    // slider on product page

    $('.photo_frame .main_image').slick({
      dots: true,
      arrows: false
    }); 
    
  }
  
  
  
  
})