$(document).ready(function () {
  $(".partners .list").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    rows: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
    ],
  });
  // SINGLE
  // $('.w-productDetail .content .count .minus').click(function () {
  //   var $input = $(this).parent().find('input');
  //   var count = parseInt($input.val()) - 1;
  //   count = count < 1 ? 1 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });
  // $('.w-productDetail .content .count .plus').click(function () {
  //   var $input = $(this).parent().find('input');
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });

  // headerHeight = $("header").outerHeight(true);
  // $(window).resize(function () {
  //   if (window.matchMedia("(max-width: 991px)").matches) {
  //     $("main").css("margin-top", `${headerHeight}px`);
  //   }
  // });

  $(document).ready(function () {
    $('#open').on('click', function () {
        $('header .mobile .list').addClass('active');
        $(this).addClass('d-none');
        $('#close').removeClass('d-none');
    })
    $('#close').on('click', function () {
        $(this).addClass('d-none');
        $('#open').removeClass('d-none');
        $('header .mobile .list').removeClass('active');
    })
    
});

  //  $(window).resize(function() {
  //   var width = $(window).width();
  //   if (width < 991){
  //     $('main').css("margin-top",`${headerHeight}px`);
  //   }
  // });
});
