$(function(){
	//大品类
	$('.wash').first().show();
	$('.wash_tit ul li').click(function(){
		var num=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.wash').eq(num).show().siblings('.wash').hide();
	})

	//小品类
	//
	$('.wash').each(function(){
		$(this).find('.wash_con').eq(0).show();
	})
	$('.wash_tab li').click(function(){
		var num=$(this).index();
		$(this).addClass('cur').siblings().removeClass('cur');
		$(this).parents('.wash').find('.wash_con').eq(num).show().siblings('.wash_con').hide();
	})
})