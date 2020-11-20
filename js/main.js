$(function(){
  $( window ).on( 'scroll', function() {
    if ( 70 < $( this ).scrollTop() ) { 
      $( '#global-nav' ).addClass( 'm-fixed' );
    } else {
      $( '#global-nav' ).removeClass( 'm-fixed' );
    }
  });
  // top画像切り替え
  $('.bg-slider').bgSwitcher({
    images: ['images/inside1.jpg','images/plant4.jpg','images/plant1.jpg','images/plant7.jpg','images/pot9.jpg','images/plant2.jpg'], 
    interval: 2500, 
    loop: true, 
    shuffle: false, 
    effect: "fade", 
    duration: 500, 
    easing: "linear" 
  });

  // スクロールフェードイン
  $(window).scroll(function (){
    $('.fadein').each(function(){
        var targetElement = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
    });
  });

  // news-head-img 画像切り替え
  $('.news-head-img').bgSwitcher({
    images: ['images/plant5.jpg','images/botanic1.jpg','images/botanic3.jpg'], 
    interval: 2000, 
    loop: true, 
    shuffle: false, 
    effect: "fade", 
    duration: 500, 
    easing: "linear" 
  });

  // firstfadein
  $('.firstfadein').fadeIn(1000);

  // secondfadein
  $('.secondfadein').fadeIn(2000);
  
  // link-btnホバー
  $( '.btn-hover' ).hover(function(){
    $(this).css({
      'background-color' : '#6e6e6e',
      'color' : '#fff'
    });
    $(this).find('.txt').css('color', '#fff');
  },function(){
    $(this).css({
      'background-color' : '#fff',
      'color' : '#343434'
    });
    $(this).find('.txt').css('color', '#343434');
  });

  // モーダル非表示
  $('.close-icon').click(function(){
    $('.modal-wrapper').fadeOut();
  });
  $('.modal-back').click(function(){
    $('.modal-wrapper').fadeOut();
  });

  // 各モーダル表示
  $('#o-item-img1').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal1').fadeIn();
    $('.modal-box').not('#modal1').hide();
  });
  $('#o-item-img2').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal2').fadeIn();
    $('.modal-box').not('#modal2').hide();
  });
  $('#o-item-img3').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal3').fadeIn();
    $('.modal-box').not('#modal3').hide();
  });
  $('#o-item-img4').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal4').fadeIn();
    $('.modal-box').not('#modal4').hide();
  });
  $('#o-item-img5').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal5').fadeIn();
    $('.modal-box').not('#modal5').hide();
  });
  $('#o-item-img6').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal6').fadeIn();
    $('.modal-box').not('#modal6').hide();
  });
  $('#o-item-img7').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal7').fadeIn();
    $('.modal-box').not('#modal7').hide();
  });
  $('#o-item-img8').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal8').fadeIn();
    $('.modal-box').not('#modal8').hide();
  });
  $('#o-item-img9').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal9').fadeIn();
    $('.modal-box').not('#modal9').hide();
  });
  $('#o-item-img10').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal10').fadeIn();
    $('.modal-box').not('#modal10').hide();
  });
  $('#o-item-img11').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal11').fadeIn();
    $('.modal-box').not('#modal11').hide();
  });
  $('#o-item-img12').click(function(){
    $('.modal-wrapper').fadeIn();
    $('#modal12').fadeIn();
    $('.modal-box').not('#modal12').hide();
  });




});
