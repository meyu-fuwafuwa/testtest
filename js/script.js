// JavaScript Document

// loading
$(function () {
	var webStorage = function () {
		if (sessionStorage.getItem('access')) {
			/*
			2回目以降アクセス時の処理
			*/
			$(".loading").addClass('is-active');
		} else {
			/*
			初回アクセス時の処理
			*/
			sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
			$(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
			setTimeout(function () {
			// ローディングを数秒後に非表示にする
			$(".loading").addClass('is-active');
			$(".loading-animation").removeClass('is-active');
			}, 2000); // ローディングを表示する時間
		}
	}
	webStorage();
});

//humberger
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});

// #で始まるアンカーをクリックした場合に処理
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 500; // ミリ秒
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

function dummy(){
	alert("この先のページは制作しておりません。");
}