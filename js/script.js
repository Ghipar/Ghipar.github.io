// parallax
// about
$(window).on('load', function () {
  $('.pkiri').addClass('pMuncul');
  $('.pkanan').addClass('pMuncul');
});

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // jumbotron
  $('.jumbotron img').css({
    transform: 'translate(0px,' + wScroll / 4 + '% )',
  });

  $('.jumbotron h1').css({
    transform: 'translate(0px,' + wScroll / 2 + '% )',
  });

  $('.jumbotron p').css({
    transform: 'translate(0px,' + wScroll / 1.2 + '% )',
  });
});
