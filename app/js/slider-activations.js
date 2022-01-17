jQuery(document).ready(function () {
  function threeRowSlider() {
    $(".three-row-mobile-slider.mobile-slider")
      .not(".slick-initialized")
      .slick({
        dots: true,
        adaptiveHeight: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1199,
            settings: "unslick",
          },
        ],
      });
  }
  threeRowSlider();
  function fourRowSlider() {
    $(".four-row-mobile-slider.mobile-slider")
      .not(".slick-initialized")
      .slick({
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        mobileFirst: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1400,
            settings: "unslick",
          },
        ],
      });
  }
  threeRowSlider();
  fourRowSlider();
  $(window).on("resize", threeRowSlider);
  $(window).on("resize", fourRowSlider);
});

