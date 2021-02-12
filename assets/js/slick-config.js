$(document).on('ready', function() {
    $(".vertical-center-4").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 2
    });
    $(".vertical-center-3").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".vertical-center-2").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });
    $(".vertical-center").slick({
      dots: true,
      vertical: true,
      centerMode: true,
    });
    $(".vertical").slick({
      dots: true,
      vertical: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
    $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 3
    });
    $(".variable").slick({
      dots: true,
      infinite: true,
      variableWidth: true
    });
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true
    });
    $('.responsible').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
      $('.responsible2').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 12,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 11,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 9,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplay: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true
            }
          },
          {
            breakpoint: 370,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true
            }
          },
          {
            breakpoint: 340,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });