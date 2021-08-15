$(function(){
  
  //メインビジュアルのパララックス
  let imagepc = document.getElementsByClassName('kv__img--parallax');
  new simpleParallax(imagepc, {
    delay: .2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  let imagesp = document.getElementsByClassName('kv__img-sp--parallax');
  new simpleParallax(imagesp, {
    delay: .2,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  
  //ナビメニュー

  //メニューボタンをクリックしたら
  $('.header-nav').on('click', function(){
    //全画面メニューを表示する
    $('.button-nav').fadeToggle(300);
    //メニューバーをクロスさせる
    $('.header-nav__border').toggleClass('on');
    //メニュータイトルの色を変更する
    $('.header-nav__title').toggleClass('on');
    //メニューが開いたらウィンドウをスクロールしないようにする
    $("body").toggleClass('noscroll');
  });

  //メニューの各項目をクリックしたら
  $('.button-nav__item').on('click', function(){
    $('.button-nav').fadeToggle(300);
    $('.header-nav__border').toggleClass('on');
    $('.header-nav__title').toggleClass('on');
    $("body").toggleClass('noscroll');
  });

  //スライダー
  let swiper = new Swiper('.swiper-container',{
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 15000,
    breakpoints: {
      600: {
        spaceBetween: -300,
      }
    }
  });

  //アコーディオン

  //各項目をクリックしたら
  $('.accordion__list').on('click', function(){
    //答えを表示させる
    $(this).children('.accordion__answers').slideToggle();
    //開く・閉じるアイコンの表示を変える
    $(this).children('.accordion__term').toggleClass('on');
  });
  
  //スクロールトップ
  $('.scroll-top').on('click', function(){
    $('body, html').animate(
      {
        scrollTop: 0,
      }, 300);
  });
  
});