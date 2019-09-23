$(function(){
  'use strict';

  $('.slick-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,   //прокручивает по 1 картинке
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
  });

  $('.slider-slick_2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 2000,
  });

   //Плавный переход по ссылкам меню.
  $('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate(
      {
        scrollTop:$(target).offset().top
      },
      800
    );
  });

  // Адаптивное меню   в css нужно добавить .showitems {display:block !important;}, в HTML ничего добавлять не нужно
  $(function() {
    $('.menu-mobale_icon').click(function() {
      if($('.menu-mobale_nav').is(':visible')) {
        $('.menu-mobale_nav').removeClass('showitems');
      } else {
        $('.menu-mobale_nav').addClass('showitems');
      }
    });
  });

  //Добавление других картинок в Галерее при нажатии на кнопку "Показать все"

    $('#viewAll').click(function(){
      var x = document.getElementById('viewAll');
      var y = document.getElementById('hide');
      x.style.display = "none";
      y.style.display = "block";

    });

    //Сворачивание картинок Галлереи при нажатии на кнопку "Свернуть"

    $('#hide').click(function(){
      var x = document.getElementById('viewAll');
      var y = document.getElementById('hide');
      x.style.display = "block";
      y.style.display = "none";

    });


})
