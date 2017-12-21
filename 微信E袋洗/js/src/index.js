$(function(){
	//轮播图
	var mySwiper = new Swiper('.swiper-container',{
		autoplay: 2000,
		loop: true,
		pagination: '.swiper-pagination',
		paginationClickable: true,
		autoplayDisableOnInteraction: false
	})
	var $win_h=$(window).height();
	var $dow_h=$(document).height();
	if($win_h >= $dow_h){
		$('.swiper_bg').height($win_h);
	}else{
		$('.swiper_bg').height($dow_h);
	}
	
	$('.swiper-slide img').on('load',function(){
		var $pic_h=$(this).height();
		$('.swiper-slide,.swiper-container').height($pic_h);
	})
})