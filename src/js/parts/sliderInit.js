export default function sliderInit () {
  var tariffSlider = new Swiper('.tariff__slider ', {
     spaceBetween: 15,
     slidesPerView: 'auto', 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          spaceBetween: 15,
          slidesPerView: 'auto',
          centeredSlides: true,
          autoHeight: true,
         },
        474: {
          centeredSlides: false,
          autoHeight: false,
         },
        769: {
         spaceBetween: 30,
        },
        1080: {
        spaceBetween: 40,
        },

        }
    });
  
  var galleryThumbs = new Swiper('.gallery-thumbs', {
      slidesPerView: 2,
      spaceBetween: 10,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,    
      freeMode: true,
      navigation: {
        nextEl: document.querySelector('.swiper-button-next_th'),
        prevEl: document.querySelector('.swiper-button-prev_th'),
      },
      breakpoints: {
      320: {
       direction: 'horizontal',
      },
      474: {
       slidesPerView: 3, 
      },
      769: {
       slidesPerView: 4, 
       spaceBetween: 10,
      },
      1080: {
      spaceBetween: 0,
      slidesPerView: 16,
      direction: 'vertical',
      navigation: false,
      freeMode: false,
      },
      }
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween:0,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });

  let reviewslider = new Swiper('.reviews__slider', {
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    spaceBetween: 30,
    loop:true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: true,
       },
      600: {
       slidesPerView: 1.2,
       autoHeight: false,
       },
      769: {
       slidesPerView: 1.5,
       spaceBetween: 30,
      },
      1080: {
      spaceBetween: 55,
      slidesPerView: 'auto',
      },
      }
  });

}
