$(function(){
	//获取浏览器高度
	var $w_h=$(window).height()>620 ? $(window).height() : 620;
	$('.container,#main').css('height',$w_h);
	console.log($w_h);


	$(window).resize(function(){
		var wh=$(window).height();
		$w_h=wh>620 ? wh: $w_h;
		$('.container,#main').css('height',$w_h);
		mtH();
	})
	
	mtH();
	function mtH(){
		if($w_h>700){
			$('.service h1,.join h2').css('margin-top','10%');	
			$('#serviceUl li').css('padding-top','3%');
			$('#serviceUl li h3').css('margin','6% 0 4%');
			$('#serviceUl li').height($w_h*0.5);
			$('.index_bg07 h2').css('margin-top','8%');		
		}else{
			$('.service h1,.join h2,.index_bg07 h2').css('margin-top','4%');
			$('#serviceUl li').css('padding-top','2%');
			$('#serviceUl li h3').css('margin','1% 0');
			$('#serviceUl li').height($w_h*0.6);			
		}
		if($w_h>800){
			$('.join_con1,.together h2').css('bottom','10%');
			$('.work,.index_bg06 h2').css('margin-top','12%');
		}else if($w_h<800 && $w_h>700){
			$('.join_con1,.together h2').css('bottom','6%');
			$('.work').css('margin-top','8%');
			$('.index_bg06 h2').css('margin-top','9%');
		}else{
			$('.join_con1,.work').css('bottom','5%');
			$('.together h2').css('margin-top','4%');
			$('.index_bg06 h2').css('margin-top','6%');
		}
	}

	//滚屏
	function screenMove(obj,num){
		$(obj).animate({top: -$w_h*num},1000);
		$('#roll span').eq(num).addClass('cur').siblings().removeClass('cur');
		var $ser_p=$('.service_con').find('p');
		if(num==0){
			$('#nav').fadeIn(500);
			$('#nav0').fadeOut(3000);
		}else{
			$('#nav').fadeOut(500);
			$('#nav0').fadeIn(3000);
		}
		if(num==1){
			$('h1').addClass('run_h');
			$ser_p.eq(0).addClass('run_txt');
			$ser_p.eq(1).addClass('run_txt0');
			$('#serviceUl').addClass('app_dh0');
		}else{
			$('h1').removeClass('run_h');
			$ser_p.eq(0).removeClass('run_txt');
			$ser_p.eq(1).removeClass('run_txt0');
			$('#serviceUl').removeClass('app_dh0');
		}
		if(num==2){
			$('.app_pic').addClass('app_dh');
			$('.app_text').addClass('app_dh0');
		}else{
			$('.app_pic').removeClass('app_dh');
			$('.app_text').removeClass('app_dh0');
		}
		if(num==3){
			$('.join h2,.join h3').addClass('app_dh0');
			$('.join_con0').addClass('run_work');
			$('.join_bg01').addClass('run_join');
			$('.join_bg02').addClass('run_join0');
			$('.join_bg03').addClass('run_join1');
			$('.join_bg04').addClass('run_join2');
			$('.join_bg05').addClass('run_join3');
			$('.join_bg06').addClass('run_join4');
		}else{
			$('.join h2,.join h3').removeClass('app_dh0');
			$('.join_con0').removeClass('run_work');
			$('.join_bg01').removeClass('run_join');
			$('.join_bg02').removeClass('run_join0');
			$('.join_bg03').removeClass('run_join1');
			$('.join_bg04').removeClass('run_join2');
			$('.join_bg05').removeClass('run_join3');
			$('.join_bg06').removeClass('run_join4');
		}
		if(num==4){
			$('#roll span').css('background','#434343');
			$('#nav0 a').addClass('nav_icon0');
			$('.together h2').addClass('run_h');
			$('.together_con').addClass('app_dh0');
		}else{
			$('#roll span').css('background','#fff');
			$('#nav0 a').removeClass('nav_icon0');
			$('.together h2').removeClass('run_h');
			$('.together_con').removeClass('app_dh0');
		}
		
		if(num==5){
			$('.work').siblings('h2').addClass('app_dh0');
			$('.work').addClass('run_work');
			
		}else{
			$('.work').siblings('h2').removeClass('app_dh0');
			$('.work').removeClass('run_work');
		}

		if(num==6){
			$('.contact').siblings('h2').addClass('run_h');
			$('.contact').addClass('run_txt');
			$('.contact_pic').addClass('run_txt0');
			$('.contact_text').addClass('app_dh0');
		}else{
			$('.contact').siblings('h2').removeClass('run_h');
			$('.contact').removeClass('run_txt');
			$('.contact_pic').removeClass('run_txt0');
			$('.contact_text').removeClass('app_dh0');
		}
	}
	//第一屏下一页
	var pos_item=0;
	$('#next_btn').click(function(){
		var $ser_p=$('.service_con').find('p');
		screenMove($('#main_con'),1);
		pos_item=1;

		$('h1').css('animation','runTit 2s');
		$('.service_con').css('animation','runTxt 2s');
		$ser_p.eq(0).css('animation','runTxt 2s');
		$ser_p.eq(1).css('animation','runTxt0 2s');
	})

	//小圆圈滚屏
	$('#roll span').click(function(){
		var item=$(this).index();			
		screenMove($('#main_con'),item);
		pos_item=item;	
	})


	/*响应鼠标*/
	$('#main_con').one('mousewheel',mouse_);
	function mouse_(event){
		var e=event || window.event; 
		if(event.deltaY>0){
			if(pos_item>0){
				pos_item--;	
			}

		}else{
			if(pos_item<6){
				pos_item++;	
			}
		}
		screenMove($('#main_con'),pos_item);
		setTimeout(function(){
			$('#main_con').one('mousewheel',mouse_);
		},1000);
	}

	//服务流程
	$('#serviceUl li').each(function(){
		$(this).hover(function(){
			var item=$(this).index();
			$(this).find('.pic').show();
			if(item == 0){
				$(this).addClass('bg01');
			}else if(item == 1){
				$(this).addClass('bg02');
			}else if(item == 2){
				$(this).addClass('bg03');
			}else if(item == 3){
				$(this).addClass('bg04');
			}
		},function(){
			$(this).attr('class','');
			$(this).find('.pic').hide();
		})

	})
	

		
	
	//合作企业
	$('.together_con ul li').each(function(){
		var pic=$(this).find('img').attr('src');
		$(this).hover(function(){
			var pic0=pic.split('_');
			var pic01=pic0[0].toString()+'_0'+pic0[1].toString();
			$(this).find('img').attr('src',pic01);
		},function(){
			$(this).find('img').attr('src',pic);
		})
	})
	$('#together_btn').click(function(){
		if($(this).text()=='下一页'){
			$(this).html('上一页<b></b>');
			$('.together_con ul').animate({'margin-left': '-1200px'},1000);
		}else{
			$(this).html('下一页<b></b>');
			$('.together_con ul').animate({'margin-left': 0},1000);
		}
	})
	
})