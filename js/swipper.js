// Slider Section 

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamic: true,
    clicKable: true,
  },
  autoplay: {
    delay: 2000,
  },

  loop: true,
});


// Sale Section 

var swiper = new Swiper(".slider-swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamic: true,
    clicKable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  slidesPerView: 5,
  autoplay: {
    delay: 3000,
  },
  loop: true,

  breakpoints: {
    1600: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

  }
});

//custom sale section
var swiper = new Swiper(".custom-swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamic: true,
    clicKable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 20,
  slidesPerView: 4,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 15,
    },

    0: {
      slidesPerView: 2,
      spaceBetween: 15,
    },




  }
});
