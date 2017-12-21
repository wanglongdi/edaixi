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
	$('.about_e h2').addClass('run_big');
	//滚屏
	function screenMove(obj,num){
		$(obj).animate({top: -$w_h*num},1000);
		$('#roll01 span').eq(num).addClass('cur').siblings().removeClass('cur');
		if(num==1 || num==3){
			$('#roll01 span').css('background','#bfbfbf');
			$('#roll01 span.cur').css('background','#434343');
		}else{
			$('#roll01 span').css('background','#909090');
			$('#roll01 span.cur').css('background','#fff');
		}
		if(num==0){
			$('.about_e h2').addClass('run_big');
		}else{
			$('.about_e h2').removeClass('run_big');
		}
		if(num==1){
			$('.about_us h2').addClass('run_left');
			$('.about_us ul').addClass('run_right');
		}else{
			$('.about_us h2').removeClass('run_left');
			$('.about_us ul').removeClass('run_right');
		}
		if(num==2){
			$('.about_bg3 h2').addClass('run_left');
			$('.about_big_tit').addClass('run_right');
			$('.about_big').addClass('run_show');
		}else{
			$('.about_bg3 h2').removeClass('run_left');
			$('.about_big_tit').removeClass('run_right');
			$('.about_big').removeClass('run_show');
		}
		if(num==3){
			$('.about_map').addClass('run_big');
		}else{
			$('.about_map').removeClass('run_big');
		}
		if(num==4){
			$('.about_help h2').addClass('run_down');
			$('.about_help ul').addClass('run_up');
		}else{
			$('.about_help h2').removeClass('run_down');
			$('.about_help ul').removeClass('run_up');
		}
		
	}

	//第一屏下一页
	var pos_item=0;
	$('#about_btn').click(function(){
		screenMove($('#main_con'),1);
		pos_item=1;

	})

	//小圆圈滚屏
	$('#roll01 span').click(function(){
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



   //位置
   function posTop(){
   		if($w_h>700){
   			$('.about_us h2,.about_bg3 h2,.about_help h2').css('margin-top','10%');
   			$('.about_e').css('margin-top','18%');
   			$('.about_us ul').css('margin-top','12%');
   			$('.about_help ul').css('margin-top','10%');
   			$('.about_help ul li').css('margin','30px 10px');
   			$('.about_map').css('margin','30% 0 0 10%');
   			$('.about_big').css('height',$w_h*0.6);
   			$('.about_line').css('height',$w_h*0.6-13);
   			$('.about_big_con').css('margin-bottom','40px');

   		}else{
   			$('.about_us h2,.about_bg3 h2,.about_help h2').css('margin-top','8%');
   			$('.about_e').css('margin-top','15%');
   			$('.about_us ul').css('margin-top','3%');
   			$('.about_help ul').css('margin-top','0%');
   			$('.about_help ul li').css('margin','20px 10px');
   			$('.about_map').css('margin','20% 0 0 10%');
   			$('.about_big').css('height',$w_h*0.53);
   			$('.about_line').css('height',$w_h*0.53-13);
   			$('.about_big_con').css('margin-bottom','20px');
   		}
   }
   //关于我们
   $('.about_us ul li').hover(function(){
   		$(this).addClass('cur');
   		$(this).siblings().removeClass('cur')
   })
   //e袋大事件
   $('.about_big_tit li').click(function(){
   		var item=$(this).index();
   		$(this).addClass('cur').siblings().removeClass('cur');
   		$('.about_big').eq(item).removeClass('hide').siblings('.about_big').addClass('hide');
   })
   //e袋帮助
   $('.about_help ul li').hover(function(){
   		$(this).find('.text').fadeIn();
   },function(){
   		$(this).find('.text').fadeOut();
   })
	
})