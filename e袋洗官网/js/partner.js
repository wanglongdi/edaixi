$(function(){
	//获取浏览器高度
	var $w_h=$(window).height()>620 ? $(window).height() : 620;
	$('.container,#main').css('height',$w_h);
	$(window).resize(function(){
		var wh=$(window).height();
		$w_h=wh>620 ? wh: $w_h;
		$('.container,#main').css('height',$w_h);
		posTop();
	})

	posTop();
	$('.partner_join_pic').addClass('run_up');
	$('.partner_join_btn').addClass('run_up0');

	//滚屏
	function screenMove(obj,num){
		$(obj).animate({top: -$w_h*num},1000);
		$('#roll0 span').eq(num).addClass('cur').siblings().removeClass('cur');
		if(num==0 || num==3 || num==6){
			$('#roll0 span').css('background','#bfbfbf');
			$('#roll0 span.cur').css('background','#434343');
		}else{
			$('#roll0 span').css('background','#909090');
			$('#roll0 span.cur').css('background','#fff');
		}
		if(num==0){
			$('.partner_join_pic').addClass('run_up');
			$('.partner_join_btn').addClass('run_up0');
		}else{
			$('.partner_join_pic').removeClass('run_up');
			$('.partner_join_btn').removeClass('run_up0');
		}
		if(num==1){
			$('.partner_bg02 h2').addClass('run_left');
			$('.partner_bg02 h3').addClass('run_right');
			$('.partner_num').addClass('run_show');
		}else{
			$('.partner_bg02 h2').removeClass('run_left');
			$('.partner_bg02 h3').removeClass('run_right');
			$('.partner_num').removeClass('run_show');
		}
		if(num==2){
			$('.partner_pk h2').addClass('run_up');
			addRun();
		}else{
			$('.partner_bg02 h2').removeClass('run_up');
			removeRun();
		}
		if(num==3){
			$('.partner_plan h2').addClass('run_left');
			$('.partner_plan0').addClass('run_right');
			$('.partner_plan_bg').addClass('run_show');
		}else{
			$('.partner_plan h2').removeClass('run_left');
			$('.partner_plan0').removeClass('run_right');
			$('.partner_plan_bg').removeClass('run_show');
		}
		if(num==4){
			$('.partner_bg05 h2,.partner_bg05 h3').addClass('run_up');
			$('.partner_hz').addClass('run_up0');
		}else{
			$('.partner_bg05 h2,.partner_bg05 h3').removeClass('run_up');
			$('.partner_hz').removeClass('run_up0');
		}
		if(num==5){
			$('.partner_bg06 h2').addClass('run_left');
			$('.partner_bg06 h3').addClass('run_right');
			$('.partner_tj').addClass('run_up0');
		}else{
			$('.partner_bg06 h2').removeClass('run_left');
			$('.partner_bg06 h3').removeClass('run_right');
			$('.partner_tj').removeClass('run_up0');
		}
		if(num==6){
			$('.partner_zc h2').addClass('run_up');
			$('.partner_zc ul').addClass('run_up0');
		}else{
			$('.partner_zc h2').removeClass('run_up');
			$('.partner_zc ul').removeClass('run_up0');
		}
		if(num==7){
			$('.partner_wl h2,.partner_wl h3').addClass('run_left');
			$('.partner_wl ul').addClass('run_right');
			$('.partner_wl_btn').addClass('run_up0');
		}else{
			$('.partner_wl h2,.partner_wl h3').removeClass('run_left');
			$('.partner_wl ul').removeClass('run_right');
			$('.partner_wl_btn').removeClass('run_up0');
		}
	}
	function addRun(){
		
		$('.partner_pk p').each(function(){
			var num=$(this).index();
			$(this).addClass('run_show0');
			$(this).css('animation-delay',num+'s')
		})
		
	}
	function removeRun(){
		$('.partner_pk p').each(function(){
			$(this).removeClass('run_show0');
		})
	}
	//第一屏下一页
	var pos_item=0;
	$('#partner_btn').click(function(){
		screenMove($('#main_con'),1);
		pos_item=1;

	})

	//小圆圈滚屏
	$('#roll0 span').click(function(){
		var item=$(this).index();			
		screenMove($('#main_con'),item);
		pos_item=item;	
	})


	/*响应鼠标*/
	$('#main_con').one('mousewheel',mouse_);
	function mouse_(event){
		var e=event || window.event;
		var num=$('#main_con').find('.container').length-1; 
		if(event.deltaY>0){
			if(pos_item>0){
				pos_item--;	
			}

		}else{
			if(pos_item<num){
				pos_item++;	
			}
		}
		screenMove($('#main_con'),pos_item);
		setTimeout(function(){
			$('#main_con').one('mousewheel',mouse_);
		},1000)
	}

	//伙伴支持
	$('.partner_zc ul li').hover(function(){
		var num=$(this).index();
		var obj=$(this).parent().find('.line');
		obj.css('left',400*num);
		obj.show();

	},function(){
		$(this).parent().find('.line').hide();
	})

   //位置
   function posTop(){
   		if($w_h>700){
   			$('.partner_wl ul').css('bottom','30%');
   			$('h2').css('margin-top','10%');
   			$('.partner_zc ul').css('margin-top','14%');
   			$('.partner_tj').css('margin-top','13%');
   			$('.partner_pk0 h2').css({'margin':'20% 0 7%'});
   			$('.partner_hz').css('margin-top','10%');


   		}else{
   			$('.partner_wl ul').css('bottom','25%');
   			$('h2').css('margin-top','8%');
   			$('.partner_zc ul').css('margin-top','5%');
   			$('.partner_tj').css('margin-top','4%');
   			$('.partner_pk0 h2').css({'margin':'8% 0 5%'});	
   			$('.partner_hz').css('margin-top','2%');
   			$('.partner_bg05 h2').css('margin-top','6%');
   		}

   		if($w_h>850){
   			$('.partner_plan_bg').css({'width':'880px','height':'538px'});
   			$('.partner_num img').css({'width':'80%','height':'80%'});
   		}else if($w_h<850 && $w_h>700){
   			$('.partner_plan_bg').css({'width':'880px','height':'538px'});
   			$('.partner_num img').css({'width':'60%','height':'60%'});
   		}else{
   			$('.partner_num img').css({'width':'50%','height':'50%'});
   			$('.partner_plan_bg').css({'width':'616px','height':'377px'});
   		}
   }
   
	
})