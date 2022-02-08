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
  if (jQuery(".product-slider-01").length > 0) {
    $(".product-slider-01")
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
  if (jQuery(".product-slider-02").length > 0) {
    $(".product-slider-02")
      .not(".slick-initialized")
      .slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: $(".product-slider-02__control-buttons .button--prev"),
        nextArrow: $(".product-slider-02__control-buttons .button--next"),
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 575,
            settings: {
              dots:true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 379,
            settings: {
              dots:true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }

if (jQuery(".product-slider--01").length > 0) {
  $(".product-slider--01").not(".slick-initialized").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    drag: false,
    dots: false,
    fade: true,
    asNavFor: ".product-slider--01__nav",
  });
}
if (jQuery(".product-slider--01__nav").length > 0) {
  $(".product-slider--01__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".product-slider--01",
    dots: false,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    arrows: true,
    prevArrow: $(".product-slider--01__control-buttons .button--prev"),
    nextArrow: $(".product-slider--01__control-buttons .button--next"),
  });
}
// /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//       Preloader Activation
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

// $(window).load(function () {
//   setTimeout(function () {
//     $("#loader").fadeOut(500);
//   }, 1000);
//   setTimeout(function () {
//     $("#loader").remove();
//   }, 2000);
// });
function passowrdVisibility(passwrodField, button) {
  let passField = document.querySelector(passwrodField);
  let icon = document.querySelector(button);
  if (icon !== null && passField !== null) {
    icon.addEventListener("click", () => {
      if (passField.type === "password") {
        passField.type = "text";
        icon.classList.add("fa-eye");
        icon.classList.remove("fa-eye-slash");
      } else {
        passField.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  }
}

passowrdVisibility("#passField", "#eye");


$(".mainnav div").click(function() {
  $("ul").slideToggle();
  $("ul ul").css("display", "none");
  $(".mainnav .on").toggleClass("on");
});
$(".hasDD").click(function(e) {
  $(this)
    .find("> ul")
    .slideToggle();
  $(this)
    .find("> ul ul")
    .css("display", "none");
  $(this)
    .find("> ul li")
    .removeClass("on");
  $(this).toggleClass("on");
  e.stopPropagation();
});
$('#countdown-01').countdown({
  year: 2022, // YYYY Format
  month: 3, // 1-12
  d: 28, // 1-31
  h: 0, // 24 hour format 0-23
  m: 0, // 0-59
  s: 0, // 0-59
});
$(document).ready(function(){
  $("#myModal").modal('show');
});
$(document).ready(function() {
  $('#showHiddenMenuOne').click(function() {
    $('#hiddenWidgetOne').slideToggle("slow");
  });
});
$(document).ready(function() {
  $('#showHiddenMenuTwo').click(function() {
    $('#hiddenWidgetTwo').slideToggle("slow");
  });
});


$(".selectall").click(function(){
  $(".individual").prop("checked",$(this).prop("checked"));
  });
