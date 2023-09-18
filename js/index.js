// JavaScript Document

//slick(news)
var $slide_news = $(".slide-news")
  .slick({
    autoplay:true,
    arrows: false,
    centerMode: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 3,
    speed: 500,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 5000,   // 自動スライド切り替え速度
	responsive: [
      {
        breakpoint: 1280, // 480〜767px以下のサイズに適用
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });


//slick(recruit)
var $slide_recruit = $("#js-slider-recruit")
  .slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: false, // ドットナビゲーションを表示しない
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000, // スライドさせるスピード（ミリ秒）
    cssEase: 'linear',
    slidesToShow: 1, // 表示させるスライド数
    variableWidth: true, // スライド幅の自動計算を無効化
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        swipe: false,
        swipeToSlide: false,
        touchMove: false,
  });
