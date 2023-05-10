$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header-menu,.home__opasity").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".arrow-4").click(function () {
    $(".arrow-4,.menu-modul__menu").toggleClass("open");
  });
  $(".slides__list").slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.05,
        },
      },
    ],
  });
  $(".experts__list").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.6,
        },
      },
    ],
  });
  $(".experts__list").slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  $(".experts__list").slick({
    dots: false,
    // другие опции и настройки
  });
});

// $(document).ready(function(){
//   $(".dropdown-btn").click(function(){
//     $(this).next(".dropdown-content").toggleClass("show");
//   });
// });

// .up {
//   transform: rotate(-135deg);
//   -webkit-transform: rotate(-135deg);
// }

// .down {
//   transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);
// }
// $(document).ready(function () {
//   $(".dropdown-btn").click(function () {
//     $(this).next(".dropdown-content").toggle();
//   });
// });
