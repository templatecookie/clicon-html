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
