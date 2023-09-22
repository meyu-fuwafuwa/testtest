// JavaScript Document

var $slide_recruit = $("#js-slider-mainvisual")
  .slick({
    arrows: false, // 前・次のボタン
    dots: true, // ドットナビゲーション
    autoplay: true,
    autoplaySpeed: 5000, 
    speed: 1000, // スライドさせるスピード（ミリ秒）
    centerMode:true, //センターモード
    slidesToShow: 1,
	centerPadding:'20%', //センターモードの時の両端のスライドのサイズ
	responsive: [
      {
        breakpoint: 767,
        settings: {
		centerPadding:'5%', 
        },
      },
    ],
  });

var $slide_recruit = $("#js-slider-mainvisual-sp")
  .slick({
    arrows: false, // 前・次のボタン
    dots: true, // ドットナビゲーション
    autoplay: true,
    autoplaySpeed: 5000, 
    speed: 1000, // スライドさせるスピード（ミリ秒）
    centerMode:true, //センターモード
    slidesToShow: 1,
	centerPadding:'20%', //センターモードの時の両端のスライドのサイズ
	responsive: [
      {
        breakpoint: 767,
        settings: {
		centerPadding:'5%', 
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
