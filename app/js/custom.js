(function ($) {
  "use strict";

  /*------------------------------------------------------------------
  [Table of contents]
  -------------------------------------------------------------------*/

  jQuery.fn.is_exist = function () {
    return this.length;
  }

  $("select").niceSelect();

  AOS.init({
    once: true,
  });
  window.addEventListener("load", AOS.refresh);

  // Counter Up Activation
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // Newsletter Modal
  // console.log($("#myModal"));

  // $("#myModal").modal("show");
  
  
  // Slick Slider Activation
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
      responsive: [{
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
  if (product_slider_03__nav.is_exist()) {
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
      responsive: [{
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
      responsive: [{
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

  // Password Visibility
  // function passowrdVisibility(passwrodField, button) {
  //   let passField = document.querySelector(passwrodField);
  //   let icon = document.querySelector(button);
  //   if (icon !== null && passField !== null) {
  //     icon.addEventListener("click", () => {
  //       if (passField.type === "password") {
  //         passField.type = "text";
  //         icon.classList.add("fa-eye");
  //         icon.classList.remove("fa-eye-slash");
  //       } else {
  //         passField.type = "password";
  //         icon.classList.remove("fa-eye");
  //         icon.classList.add("fa-eye-slash");
  //       }
  //     });
  //   }
  // }
  // passowrdVisibility("#passField", "#eye");

  // Bottom Nav
  $(".mainnav div").click(function () {
    $("ul").slideToggle();
    $("ul ul").css("display", "none");
    $(".mainnav .on").toggleClass("on");
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
})(jQuery);

// Example
const toggle = (event, element, selector) => {
  event.stopPropagation();

  if (!event.target.closest(selector)) {
    element.style.display = element.style.display == 'block' ? 'none' : 'block'
    element.style.display == 'block' ?
      document.addEventListener('click', function (event) {
        toggle(event, element, selector)
      }) :
      document.removeEventListener('click', function (event) {
        toggle(event, element, selector)
      });
  }
}

// ShowHidenMenu Home Page
// const selector = '#hiddenWidgetTwo';
// const box = document.querySelector(selector);
// const button = document.querySelector('#showHiddenMenuTwo')

// if(button){
//   button.addEventListener('click', function (event) {
//     toggle(event, box, selector)
//   });
// }

// show & hide cart Home Page
const $cart = $('.cart-hide_show');
$(document).mouseup(e => {
   if (!$cart.is(e.target) // if the target of the click isn't the container...
   && $cart.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $cart.removeClass('is-active');
  }
 });
$('#showHiddenMenuOne').on('click', () => {
  $cart.toggleClass('is-active');
});

// show & hide user Home Page
const $user = $('.user-hide_show');
$(document).mouseup(e => {
   if (!$user.is(e.target) // if the target of the click isn't the container...
   && $user.has(e.target).length === 0) // ... nor a descendant of the container
   {
     $user.removeClass('is-active');
  }
 });
$('#showHiddenMenuTwo').on('click', () => {
  $user.toggleClass('is-active');
});


// Product Quantity
// const input = document.querySelector('.product-quantity');
// const increaseQty = document.querySelector('.quantity-increase');
// const decreaseQty = document.querySelector('.quantity-decrease');

// if(input){
//   const inputVal = parseInt(input.value);
//   increaseQty.addEventListener('click', function(){
//     input.value =inputVal + 1;
//   });
  
//   decreaseQty.addEventListener('click', function(){
//     if(inputVal > 1){
//       input.value =inputVal - 1;
//     }
//   });
// }

// visa card

  const copyNumber = document.getElementById('copynumber')
  if(copyNumber){
    copyNumber.addEventListener("click", () => {
      navigator.clipboard.writeText('*** *** ***  3814')
      alert('Successfully Copy')
    })
  }
  
  const copyNumber2 = document.getElementById('copynumber2')
  if(copyNumber2){
    copyNumber2.addEventListener("click", () => {
      navigator.clipboard.writeText('*** *** ***  1767')
      alert('Successfully Copy')
    })
  }

 
// // Product Quantity of product details page
  const minus = document.querySelector(".quantity-decrease");
  const plus = document.querySelector(".quantity-increase");
  const quantityOne = document.querySelector(".quantity-one");

  if(quantityOne){
    var quantity = 1;
    quantityOne.value = quantity;
  }

  if(minus){
    minus.addEventListener('click', () => {
      if (quantity > 1) {
          quantity --;
        quantityOne.value = quantity;
      }
    });
  }

  if(plus){
    plus.addEventListener('click', () => {
      quantity ++;
      quantityOne.value = quantity;
    });
  }


// // Product Quantity of shopping card page
  const minusTwo = document.querySelector(".quantity-decrease-two");
  const plusTwo = document.querySelector(".quantity-increase-two");
  const quantityTwo = document.querySelector(".quantity-two");

  if(quantityTwo){
    var quantity2 = 1;
    quantityTwo.value = quantity2;
  }
  
  if(minusTwo){
    minusTwo.addEventListener('click', () => {
      if (quantity2 > 1) {
          quantity2 --;
        quantityTwo.value = quantity2;
      }
    });
  }
  
  if(plusTwo){
    plusTwo.addEventListener('click', () => {
      quantity2 ++;
      quantityTwo.value = quantity2;
    });
  }


//  password hide & show function
function showPassword(input, icon) {
  icon.addEventListener("click", (e) => {
    // todo 1:  toggle eye show / hide
    icon.classList.toggle("fa-eye-slash");

    // todo 2: input type
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
  });
}

  // password hide & show
  const finputOne = document.querySelector("#password-hide_show1");
  const ficonOne = document.querySelector(".select-icon__one i");

  const finputTwo = document.querySelector("#password-hide_show2");
  const ficonTwo = document.querySelector(".select-icon__two i");

  const finputThree = document.querySelector("#password-hide_show3");
  const ficonThree = document.querySelector(".select-icon__three i");

  const finputFour = document.querySelector("#password-hide_show4");
  const ficonFour = document.querySelector(".select-icon__four i");

  const finputFive = document.querySelector("#password-hide_show5");
  const ficonFive = document.querySelector(".select-icon__five i");

  const finputSix = document.querySelector("#password-hide_show6");
  const ficonSix = document.querySelector(".select-icon__six i");

  const finputSeven = document.querySelector("#password-hide_show7");
  const ficonSeven = document.querySelector(".select-icon__seven i");

  const finputEight = document.querySelector("#password-hide_show8");
  const ficonEight = document.querySelector(".select-icon__eight i");

  if (finputOne || ficonOne) {
    showPassword(finputOne, ficonOne );
  }

  if (finputTwo || ficonTwo) {
    showPassword(finputTwo, ficonTwo);
  }

  if (finputThree || ficonThree) {
    showPassword(finputThree, ficonThree);
  }

  if (finputFour || ficonFour) {
    showPassword(finputFour, ficonFour);
  }
  
  if (finputFive || ficonFive) {
    showPassword(finputFive, ficonFive);
  }

  if (finputSix || ficonSix) {
    showPassword(finputSix, ficonSix);
  }

  if (finputSeven || ficonSeven) {
    showPassword(finputSeven, ficonSeven);
  }

  if (finputEight || ficonEight) {
    showPassword(finputEight, ficonEight);
  }
  
  



