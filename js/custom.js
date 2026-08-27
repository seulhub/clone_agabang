// header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// visual
// 자동 슬라이드
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// steady seller

const steadySwiper = new Swiper(".steadySwiper", {
  slidesPerView: 4,
  spaceBetween: 12,

  loop: true,

  // slidePerGroup: 1,

  navigation: {
    nextEl: ".steady-next",
    prevEl: ".steady-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 12,
    },
  },
});

// gift shop
const giftSwiper = new Swiper(".giftSwiper", {
  // slidesPerView: "auto",
  spaceBetween: 20,

  centeredSlides: true,
  loop: true,

  navigation: {
    nextEl: ".gift-next",
    prevEl: ".gift-prev",
  },

  effect: "slide",

  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// new item
// const newSwiper = new Swiper(".newSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 12,

//   loop: true,

//   navigation: {
//     nextEl: ".new-next",
//     prevEl: ".new-prev",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 2,
//       spaceBetween: 8,
//     },

//     768: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 12,
//     },
//   },

// });

const newSwiper = new Swiper(".newSwiper", {
  loop: false,

  // observer: true,
  // observeParents: true,

  navigation: {
    nextEl: ".new-next",
    prevEl: ".new-prev",
  },

  breakpoints: {
    // 모바일
    0: {
      slidesPerView: 1,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 2,
      spaceBetween: 16,
    },

    // 태블릿
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerGroup: 4,
      spaceBetween: 20,
    },

    // PC
    1200: {
      slidesPerView: 4,
      grid: {
        rows: 1,
      },
      slidesPerGroup: 1,
      spaceBetween: 12,
    },
  },
});

// banner
const bannerSwiper = new Swiper(".bannerSwiper", {
  loop: true,

  navigation: {
    nextEl: ".banner-next",
    prevEl: ".banner-prev",
  },
});
