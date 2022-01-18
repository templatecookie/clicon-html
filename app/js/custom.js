"use strict";
$(document).ready(function () {
  $("select").niceSelect();

  AOS.init({
    once: true,
  });
});
window.addEventListener("load", AOS.refresh);

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Counter Up Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$(".counter").counterUp({
  delay: 10,
  time: 1000,
});


/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Slick Slider Activation
  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  $(".slick-slider").slick();
  if (jQuery(".testimonial-slider--01").length > 0) {
    $(".testimonial-slider--01")
      .not(".slick-initialized")
      .slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: $(".testimonial-slider--01__control-buttons .button--prev"),
        nextArrow: $(".testimonial-slider--01__control-buttons .button--next"),
      });
  }
  if (jQuery(".testimonial-slider--02").length > 0) {
    $(".testimonial-slider--02")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: $(".testimonial-slider--02__control-buttons .button--prev"),
        nextArrow: $(".testimonial-slider--02__control-buttons .button--next"),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
  if (jQuery(".testimonial-slider--03").length > 0) {
    $(".testimonial-slider--03").not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
      drag: false,
      fade: true,
      asNavFor: ".testimonial-slider--03__nav",
    });
  }
  if (jQuery(".testimonial-slider--03__nav").length > 0) {
    $(".testimonial-slider--03__nav").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slider--03",
      dots: false,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      arrows: true,
      prevArrow: $(".testimonial-slider--03__control-buttons .button--prev"),
      nextArrow: $(".testimonial-slider--03__control-buttons .button--next"),
    });
  }
  if (jQuery(".software-slider").length > 0) {
    $(".software-slider")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: $(".software-slider__control-buttons .button--prev"),
        nextArrow: $(".software-slider__control-buttons .button--next"),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
  if (jQuery(".testimonial-slider--05").length > 0) {
    $(".testimonial-slider--05")
      .not(".slick-initialized")
      .slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      });
  }
  if (jQuery(".testimonial-slider--06").length > 0) {
    $(".testimonial-slider--06")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: $(".testimonial-slider--06__control-buttons .button--prev"),
        nextArrow: $(".testimonial-slider--06__control-buttons .button--next"),
      });
  }
  if (jQuery(".screenshot-slider").length > 0) {
    $(".screenshot-slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        centerPadding: "130px",
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        easing: "linear",
        speed: 800,
        appendDots: ".screenshots-dots",
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 5,
              centerPadding: "100px",
            },
          },
          {
            breakpoint: 1750,
            settings: {
              slidesToShow: 5,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 1670,
            settings: {
              slidesToShow: 5,
              centerPadding: "60px",
            },
          },
          {
            breakpoint: 1640,
            settings: {
              slidesToShow: 5,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 1450,
            settings: {
              slidesToShow: 5,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 1350,
            settings: {
              slidesToShow: 3,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 3,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 3,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              centerPadding: "0",
            },
          },
          {
            breakpoint: 830,
            settings: {
              fade: true,
              slidesToShow: 1,
              centerPadding: "20px",
            },
          },
          {
            breakpoint: 650,
            settings: {
              fade: true,
              slidesToShow: 1,
              centerPadding: "10px",
            },
          },
          {
            breakpoint: 515,
            settings: {
              fade: true,
              slidesToShow: 1,
              autoplay: true,
              centerPadding: "0px",
            },
          },
          {
            breakpoint: 480,
            settings: {
              fade: true,
              slidesToShow: 1,
              autoplay: true,
              centerPadding: "0px",
              arrows: false,
            },
          },
        ],
      });
  }
  if (jQuery(".testimonial-slider--07").length > 0) {
    $(".testimonial-slider--07")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        prevArrow: $(".testimonial-slider--07__control-buttons .button--prev"),
        nextArrow: $(".testimonial-slider--07__control-buttons .button--next"),
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              dots: true,
            },
          },
        ],
      });
  }
// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Price Deck Trigger
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
$("#js-contcheckbox").change(function() {
  if(this.checked) {
    $('.js-montlypricing').css('display', 'none');
$('.js-yearlypricing').css('display', 'flex');
    $('.afterinput').addClass('text-primary');
    $('.beforeinput').removeClass('text-primary');
  } else {
    $('.js-montlypricing').css('display', 'flex');
    $('.js-yearlypricing').css('display', 'none');
    $('.afterinput').removeClass('text-primary');
    $('.beforeinput').addClass('text-primary');
}
});
// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Preloader Activation
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(window).load(function () {
  setTimeout(function () {
    $("#loader").fadeOut(500);
  }, 1000);
  setTimeout(function () {
    $("#loader").remove();
  }, 2000);
});

//***ISOTOPE***
// Portfolio-01
$(window).load(function () {
  $(".portfolio-active").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });
});

// filter items on button click
$(".portfolio-filter-menu").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $(".portfolio-active").isotope({ filter: filterValue });
});

$(".slider-arrow-click-active .slick-arrow").on("click", function (e) {
  if (!$(this).hasClass("active")) {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  }
});

$('.portfolio-filter-menu').on('click', 'button', function() {
  $('.portfolio-filter-menu button.active').removeClass('active');
  $(this).addClass('active');
});
$('.service-category').on('click', 'li', function() {
  $('.service-category li.active').removeClass('active');
  $(this).addClass('active');
});
