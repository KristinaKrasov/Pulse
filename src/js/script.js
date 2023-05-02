$(document).ready(function(){
    $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/arrowLeft.svg"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/arrowRight.svg"></img></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false,
          }
        }
      ]
    });
  });