jQuery(document).ready(function ($) {
  // hamburger
  $(".hamburger").click(function () {
    $(".menu-mobile").addClass("active");
  });
  $(".close-button").click(function () {
    $(".menu-mobile").removeClass("active");
  });
  // serv__slider
  $(".serv__slider").slick({
    prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807615 12.0208 0.807615 12.6066 1.3934C13.1924 1.97919 13.1924 2.92894 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM52 13.5L2 13.5L2 10.5L52 10.5L52 13.5Z" fill="#636363"/>
            </svg>
            </button >`,
    nextArrow: `<button type='button' class='slick-next pull-right'><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#636363"/>
            </svg>
            </button>`,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    speed: 500,
    infinity: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
          <circle cx="15" cy="23" r="15" fill="#FEFEFE"/>
          <circle cx="15" cy="23" r="14" stroke="#7C2E6E" stroke-width="2"/>
          </g>
          <path d="M9.29289 22.2929C8.90237 22.6834 8.90237 23.3166 9.29289 23.7071L15.6569 30.0711C16.0474 30.4616 16.6805 30.4616 17.0711 30.0711C17.4616 29.6805 17.4616 29.0474 17.0711 28.6569L11.4142 23L17.0711 17.3431C17.4616 16.9526 17.4616 16.3195 17.0711 15.9289C16.6805 15.5384 16.0474 15.5384 15.6569 15.9289L9.29289 22.2929ZM11 22L10 22L10 24L11 24L11 22Z" fill="#7C2E6E"/>
          <defs>
          <filter id="filter0_d" x="-8" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.180392 0 0 0 0 0.431373 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
          </svg>
          
          </button >`,
          nextArrow: `<button type='button' class='slick-next pull-right'><svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <circle r="15" transform="matrix(-1 0 0 1 23 23)" fill="#FEFEFE"/>
  <circle r="14" transform="matrix(-1 0 0 1 23 23)" stroke="#7C2E6E" stroke-width="2"/>
  </g>
  <path d="M28.7071 22.2929C29.0976 22.6834 29.0976 23.3166 28.7071 23.7071L22.3431 30.0711C21.9526 30.4616 21.3195 30.4616 20.9289 30.0711C20.5384 29.6805 20.5384 29.0474 20.9289 28.6569L26.5858 23L20.9289 17.3431C20.5384 16.9526 20.5384 16.3195 20.9289 15.9289C21.3195 15.5384 21.9526 15.5384 22.3431 15.9289L28.7071 22.2929ZM27 22L28 22L28 24L27 24L27 22Z" fill="#7C2E6E"/>
  <defs>
  <filter id="filter0_d" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dx="2" dy="2"/>
  <feGaussianBlur stdDeviation="5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.180392 0 0 0 0 0.431373 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
          </button>`,
        },
      },
    ],
  });
  // target__wrapper
  $(".target__wrapper").slick({
    prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807615 12.0208 0.807615 12.6066 1.3934C13.1924 1.97919 13.1924 2.92894 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM52 13.5L2 13.5L2 10.5L52 10.5L52 13.5Z" fill="#636363"/>
            </svg>
            </button >`,
    nextArrow: `<button type='button' class='slick-next pull-right'><svg width="52" height="24" viewBox="0 0 52 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M51.0607 13.0607C51.6464 12.4749 51.6464 11.5251 51.0607 10.9393L41.5147 1.3934C40.9289 0.807615 39.9792 0.807615 39.3934 1.3934C38.8076 1.97919 38.8076 2.92894 39.3934 3.51472L47.8787 12L39.3934 20.4853C38.8076 21.0711 38.8076 22.0208 39.3934 22.6066C39.9792 23.1924 40.9289 23.1924 41.5147 22.6066L51.0607 13.0607ZM-1.31134e-07 13.5L50 13.5L50 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#636363"/>
            </svg>
            </button>`,
    infinite: false,
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          prevArrow: `<button type='button' class='slick-prev pull-left'><svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
          <circle cx="15" cy="23" r="15" fill="#FEFEFE"/>
          <circle cx="15" cy="23" r="14" stroke="#7C2E6E" stroke-width="2"/>
          </g>
          <path d="M9.29289 22.2929C8.90237 22.6834 8.90237 23.3166 9.29289 23.7071L15.6569 30.0711C16.0474 30.4616 16.6805 30.4616 17.0711 30.0711C17.4616 29.6805 17.4616 29.0474 17.0711 28.6569L11.4142 23L17.0711 17.3431C17.4616 16.9526 17.4616 16.3195 17.0711 15.9289C16.6805 15.5384 16.0474 15.5384 15.6569 15.9289L9.29289 22.2929ZM11 22L10 22L10 24L11 24L11 22Z" fill="#7C2E6E"/>
          <defs>
          <filter id="filter0_d" x="-8" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
          <feOffset dx="2" dy="2"/>
          <feGaussianBlur stdDeviation="5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.180392 0 0 0 0 0.431373 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
          </filter>
          </defs>
          </svg>
          
          </button >`,
          nextArrow: `<button type='button' class='slick-next pull-right'><svg width="38" height="50" viewBox="0 0 38 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <circle r="15" transform="matrix(-1 0 0 1 23 23)" fill="#FEFEFE"/>
  <circle r="14" transform="matrix(-1 0 0 1 23 23)" stroke="#7C2E6E" stroke-width="2"/>
  </g>
  <path d="M28.7071 22.2929C29.0976 22.6834 29.0976 23.3166 28.7071 23.7071L22.3431 30.0711C21.9526 30.4616 21.3195 30.4616 20.9289 30.0711C20.5384 29.6805 20.5384 29.0474 20.9289 28.6569L26.5858 23L20.9289 17.3431C20.5384 16.9526 20.5384 16.3195 20.9289 15.9289C21.3195 15.5384 21.9526 15.5384 22.3431 15.9289L28.7071 22.2929ZM27 22L28 22L28 24L27 24L27 22Z" fill="#7C2E6E"/>
  <defs>
  <filter id="filter0_d" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dx="2" dy="2"/>
  <feGaussianBlur stdDeviation="5"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.486275 0 0 0 0 0.180392 0 0 0 0 0.431373 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>
          </button>`,
        },
      },
    ],
  });

  if ($(window).width() < 1600) {
    $(".client__wrapper").slick({
      variableWidth: true,
      centerMode: true,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
  if ($(window).width() < 1750) {
    $(".certificates-wrapper").slick({
      variableWidth: true,
      slidesToShow: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
});
