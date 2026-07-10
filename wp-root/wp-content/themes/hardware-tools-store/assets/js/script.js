jQuery(document).ready(function($) {
    var scroll = $(window).scrollTop();
    var scrollup = $('.scroll-top');
    /*------------------------------------------------
              Scroll Top
    ------------------------------------------------*/
    scrollup.click(function () {
      $('html, body').animate({
        scrollTop: '0px'
      }, 800);
      return false;
    });
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 200) {
        scrollup.fadeIn();
      } else {
        scrollup.fadeOut();
      }
    });

    /*------------------------------------------------
              Homepage slider
    ------------------------------------------------*/
    var hardware_tools_store_Slider = new Swiper(".hardware-tools-store-swiper", {
    slidesPerView: 1,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hardware-tools-store-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hardware-tools-store-swiper-button-next",
      prevEl: ".hardware-tools-store-swiper-button-prev",
    },
  });

    /*------------------------------------------------
              Homepage Testimonial
    ------------------------------------------------*/
    var hardware_tools_store_testimonial_Slider = new Swiper(".hardware-tools-store-testimonial-swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      }
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".hardware-tools-store-testimonial-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".hardware-tools-store-testimonial-swiper-button-next",
      prevEl: ".hardware-tools-store-testimonial-swiper-button-prev",
    },
  });

});
