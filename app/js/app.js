//= jquery-1.11.0.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/bootstrap/js/dist/util.js
//= ../../node_modules/bootstrap/js/dist/tab.js

$(".slider").slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  prevArrow: '<button class="btn-prev"><img class="arrow arrow-prev" src="img/prev-arrow.svg" alt="Prev slide"></button>',
  nextArrow: '<button class="btn-next"><img class="arrow arrow-next" src="img/next-arrow.svg" alt="Next slide"></button>',
});


$(function () {
  $('#pills-tab li a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
})

