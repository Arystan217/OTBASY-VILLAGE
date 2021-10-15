$(document).ready(function(){

  $('.burger-icon').click(function(){
    $(this).toggleClass('burger-icon--active');
    $('.burger').toggleClass('burger--active')
    $("header").toggleClass("header-burger-open");
  });

  if (window.scrollY > 0){
    $("header").addClass("header--scroll");
  }
  else {
    $("header").removeClass("header--scroll");
  }
  // шапка при скролле
  $(window).scroll(function(){
    if (this.scrollY > 0){
      $("header").addClass("header--scroll");
    }
    else {
      $("header").removeClass("header--scroll");
    }
  });

  // плавная прокрутка
  $('.nav__link').on('click', function(){
    scrollTo = $(this).attr('data-scroll-path');
    $('html,body').stop().animate({ scrollTop: $('#' + scrollTo).offset().top - 95}, 880);
    if ($(this).attr('data-scroll-path') == 'hero') {
      scrollTo = $(this).attr('data-scroll-path');
      $('html,body').stop().animate({ scrollTop: $('#' + scrollTo).offset().top - 180}, 880);
    }
  });
  $('.burger__link').on('click', function(){
    $('.burger-icon').removeClass('burger-icon--active');
    $('.burger').removeClass('burger--active');
    $('header').removeClass('header-burger-open');
  });


  // спойлер
  $('.benefits__content-block-title').click(function(){
     $(this).toggleClass('benefits__content-block-title--active').next().slideToggle(300);
  });

  // слайдер
  $('.slider').slick({
    dots: false,
    slidesToShow: 1,
    speed: 400,
    easing: 'ease-in-out',
    touchThreshold: 8,
    waitForAnimate: false
  });
  
  // калькулятор цен
  $('.queue').click(function(){
    $('.calculator__content-button').removeClass('room--active');
    $('.calculator__content-button').removeClass('square--active');
    $('.calculator__content-button').removeClass('floor--active');
    $room = 0;
    $square = 0;
    $floor = 0;
    $('.queue').removeClass('queue--active');
    $(this).addClass('queue--active')
    $queue = $(this).attr('data-queue') + "-";
  });
  $('.room').click(function(){
    $('.room').removeClass('room--active');
    $('.calculator__content-button').removeClass('square--active');
    $('.calculator__content-button').removeClass('floor--active');
    $square = 0;
    $floor = 0;
    $(this).addClass('room--active')
    $room = $(this).text() + "-";
  });
  $('.square').click(function(){
    $('.square').removeClass('square--active');
    $('.calculator__content-button').removeClass('floor--active');
    $floor = 0;
    $(this).addClass('square--active')
    $square = $(this).text() + "-";
  });
  $('.floor').click(function(){
    $('.floor').removeClass('floor--active');
    $(this).addClass('floor--active')
    $floor = $(this).text();
    
    $imgPath = "images/layout/" + $queue + $room + $square + $floor + ".jpg";
    console.log($imgPath);
    
    $('.calculator__content-img').attr('src', $imgPath);
    if ($queue == 0 || $square == 0 || $room == 0 || $floor == 0) {
      $('.calculator__content-img').attr('src', "images/layout/error.jpg");
    }
  });

});