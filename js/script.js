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



  $('#phone').inputmask('+7-(999)-999-99-99',{ showMaskOnHover: false });

});