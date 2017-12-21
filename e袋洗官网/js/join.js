$(function(){
	//获取浏览器高度
	var $w_h=$(window).height()>620 ? $(window).height() : 620;
	$('.container,#main').css('height',$w_h);
	$(window).resize(function(){
		var wh=$(window).height();
		$w_h=wh>620 ? wh: $w_h;
		$('.container,#main').css('height',$w_h);
		$('.join_member ul li').height($w_h);
		posTop();
	})

	posTop();
	$('.join_member ul li').height($w_h);
	$('.join_find h2').addClass('run_big');
	$('.join_find h3').addClass('run_left');
	$('.join_find0').addClass('run_right');
	//滚屏
	function screenMove(obj,num){
		$(obj).animate({top: -$w_h*num},1000);
		$('#roll01 span').eq(num).addClass('cur').siblings().removeClass('cur');
		var $li=$('.join_member ul li');
		if(num==1 || num==3){
			$('#roll01 span').css('background','#bfbfbf');
			$('#roll01 span.cur').css('background','#434343');
		}else{
			$('#roll01 span').css('background','#909090');
			$('#roll01 span.cur').css('background','#fff');
		}
		if(num==0){
			$('.join_find h2').addClass('run_big');
			$('.join_find h3').addClass('run_left');
			$('.join_find0').addClass('run_right');
		}else{
			$('.join_find h2').removeClass('run_big');
			$('.join_find h3').removeClass('run_left');
			$('.join_find0').removeClass('run_right');
		}
		if(num==1){
			$('.join_e .pic').addClass('run_show');
			$('.join_e .con').addClass('run_up');
		}else{
			$('.join_e .pic').removeClass('run_show')
			$('.join_e .con').removeClass('run_up');
		}
		if(num==2){
			$li.eq(0).addClass('run_left0');
			$li.eq(1).addClass('run_left0');
			$li.eq(2).addClass('run_right0');
			$li.eq(3).addClass('run_right0');
		}else{
			$li.eq(0).removeClass('run_left0');
			$li.eq(1).removeClass('run_left0');
			$li.eq(2).removeClass('run_right0');
			$li.eq(3).removeClass('run_right0');
		}
		if(num==3){
			$('.join_report h2.t,.join_report_pic').addClass('run_down');
			$('.join_report_con,.join_report h2.m').addClass('run_up');
		}else{
			$('.join_report h2.t,.join_report_pic').removeClass('run_down');
			$('.join_report_con,.join_report h2.m').removeClass('run_up');

		}

		if(num==4){
			$('.join_enter h2').addClass('run_big');
			$('.join_enter_btn,.join_enter p').addClass('run_up');
		}else{
			$('.join_enter h2').removeClass('run_big');
			$('.join_enter_btn,.join_enter p').removeClass('run_up');

		}
	}

	//第一屏下一页
	var pos_item=0;
	$('#join_btn').click(function(){
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
   			$('.join_find h2').css('margin-top','28%');
   			$('.join_report h2.t').css('margin-top','10%');
   			$('.join_report_pic').css('margin','30px auto');
   			$('.join_report_con').css('padding','30px 36px 0');
   			$('.join_enter').css('margin-top','15%');

   		}else{
   			$('.join_find h2').css('margin-top','15%');
   			$('.join_report h2.t').css('margin-top','5%');
   			$('.join_report_pic').css('margin','20px auto 0');
   			$('.join_report_con').css('padding','10px 36px 0');
   			$('.join_enter').css('margin-top','10%');
   		}
    }
    $('.join_e ul li').hover(function(){
   		$(this).addClass('cur');
    },function(){
   		$(this).removeClass('cur');
    })

    $('.join_member ul li').hover(function(){
   		$(this).find('.bg').animate({'height':$w_h,'top': 0 , 'margin-top':0},1000);
    },function(){
   		$(this).find('.bg').animate({'height':'400px','top': '50%' , 'margin-top':'-130px'});
    })

    $('.join_report_con ul li').hover(function(){
   		$(this).addClass('cur');
    },function(){
   		$(this).removeClass('cur');
    })
})