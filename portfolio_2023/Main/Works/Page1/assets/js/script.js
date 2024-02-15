///////lightbox オプションの設定
// ※　https://lokeshdhakar.com/projects/lightbox2/options参照

lightbox.option( {
  'wrapAround': true,
  'albumLabel': ' %1 / total %2 '
})


////////ふわっと見せるためのJS

function fadeAnime( ) {
  //flipLeft
  $('.gallery li').each(function( ) {
    var elemPos = $(this).offset( ).top;
    var scroll = $(window).scrollTop( );
    var windowHeight = $(window).height( );
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('flipLeft');
    }else {
      $(this).removeClass('flipLeft');
    }
  })
}

/////


$(window).scroll(function () {
  fadeAnime();
});


//////

$(window).on('load' , function () {
  fadeAnime();
})