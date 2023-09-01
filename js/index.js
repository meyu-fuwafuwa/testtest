// JavaScript Document



//slick(mainvisual)
var $slide_mainvisual = $(".slide")
  .slick({
    fade: true,    // fedeオン
    speed: 1500,   // 画像切り替えにかかる時間（ミリ秒）
    autoplaySpeed: 3000,   // 自動スライド切り替え速度
    arrows: false,         // 矢印表示・非表示
    autoplay: true,        // 自動再生
    slidesToShow: 1,       // スライド表示数
    slidesToScroll: 1,     // スライドする数
    infinite: true         // 無限リピート オン・オフ
  });

//slick(pickup)
var $slide_pickup = $(".slide-pickup")
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
var $slide_recruit = $("#js-slider-8")
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
