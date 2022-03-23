(function($) {
  "use strict";
  
  /*------------------------------------------------------------------
  [Table of contents]
  -------------------------------------------------------------------*/
  
  /*--------------------------------------------------------------
  CUSTOM PRE DEFINE FUNCTION
  ------------------------------------------------------------*/
  /* is_exist() */
  jQuery.fn.is_exist = function(){
    return this.length;
  }
  
  $(function () {
    
    $("select").niceSelect();
  
    AOS.init({
      once: true,
    });
    window.addEventListener("load", AOS.refresh);
  
  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
  $("#myModal").modal("show");
  
  /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Slick Slider Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
  $(".slick-slider").slick();
  
  var product_slider_01 = $('.product-slider-01');
  if (product_slider_01.is_exist()) {
      product_slider_01.not(".slick-initialized").slick({
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    });
  }
  
  var product_slider_02 = $('.product-slider-02');
  if (product_slider_02.is_exist()) {
      product_slider_02.not(".slick-initialized")
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
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 379,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
  }
  
  var product_slider_03 = $('.product-slider--03');
  if (product_slider_03.is_exist()) {
      product_slider_03.not(".slick-initialized").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
      drag: false,
      dots: false,
      fade: true,
      asNavFor: ".product-slider--03__nav",
    });
  }
  $('.modal').on('shown.bs.modal', function (e) {
    $('.product-slider--03').slick('setPosition');
  })

  $('.modal').on('shown.bs.modal', function (e) {
    $('.product-slider--03__nav').slick('setPosition');
  })
  
  var product_slider_03__nav = $('.product-slider--03__nav');
  if ( product_slider_03__nav.is_exist()) {
      product_slider_03__nav.slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: ".product-slider--03",
      dots: false,
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      arrows: true,
      prevArrow: $(".product-slider--03__control-buttons .button--prev"),
      nextArrow: $(".product-slider--03__control-buttons .button--next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
  
  var product_slider_04 = $('.product-slider--04');
  if (product_slider_04.is_exist()) {
      product_slider_04.not(".slick-initialized")
      .slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        prevArrow: $(".product-slider--04__control-buttons .button--prev"),
        nextArrow: $(".product-slider--04__control-buttons .button--next"),
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
              arrows: false,
            },
          },
          {
            breakpoint: 575,
            settings: {
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 379,
            settings: {
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
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
  
  // Bottom Nav
  $(".mainnav div").click(function () {
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
    $(".mainnav .on").toggleClass("on");
  });
  // $(".hasDD").click(function (e) {
  //   $(this).find("> ul").slideToggle();
  //   $(this).find("> ul ul").css("display", "none");
  //   $(this).find("> ul li").removeClass("on");
  //   $(this).toggleClass("on");
  //   e.stopPropagation();
  // });
  
  // ShowHidenMenu Home Page
    $("#showHiddenMenuOne").click(function () {
      $("#hiddenWidgetOne").slideToggle("slow");
    });
  
  // ShowHidenMenu Home Page
    $("#showHiddenMenuTwo").click(function () {
      $("#hiddenWidgetTwo").slideToggle("slow");
    });
  
  // Catagory all Slectall Shope Page
  $(".selectall").click(function () {
    $(".individual").prop("checked", $(this).prop("checked"));
  });
  
  // Porduct Countdown Home Page
  var countdown_01 = $('#countdown-01');
  if (countdown_01.is_exist()) {
      countdown_01.countdown({
      year: 2022, // YYYY Format
      month: 5, // 1-12
      d: 28, // 1-31
      h: 0, // 24 hour format 0-23
      m: 0, // 0-59
      s: 0, // 0-59
      });
  }
  
  });/*End document ready*/
  
  $(window).on("resize", function(){
  
  }); // end window resize
  
  $(window).on("load" ,function(){
  
  }); // End window LODE
  
  
  })(jQuery);
  
  
  
  
  
  
  

