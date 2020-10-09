$(function(){
	$(".header_top ul li").click(function(){
		$(this).siblings().removeClass("active");
		$(this).addClass("active");
	})
	$(".header_bottom li a").click(function(){
		$(this).parent().siblings().find("a").removeClass("font_color");
		$(this).addClass("font_color");
	})
	$("#content>ul>li a").click(function(){
		$(this).parent().siblings().find("a").removeClass("font_color");
		$(this).addClass("font_color");
	})
	//移入移出图片时显示隐藏播放图标
	$(".img").mouseenter(function(){
		$(this).find("img").first().stop().animate({
			width:"226px"
		},500);
		$(this).find(".mask").stop().fadeIn(600);
	})
	$(".img").mouseleave(function(){
		$(this).find("img").first().stop().animate({
			width:"216px"
		},500);
		$(this).find(".mask").stop().fadeOut(600);
	})
	//移入显示prev和next按钮
	$(".content_in,.wonder_in").hover(function(){
		$(this).find(".prev").stop().animate({
			left:0
		},800)
		$(this).find(".next").stop().animate({
			right:0
		},800)
	},function(){
		$(this).find(".prev").stop().animate({
			left:"-72px"
		},800)
		$(this).find(".next").stop().animate({
			right:"-72px"
		},800)
	})
	//移入显示prev和next改变透明度
	$(".prev,.next").mouseover(function(){
		$(this).animate({
			opacity:1.0
		},800)
	})
	$(".prev,.next").mouseout(function(){
		$(this).animate({
			opacity:0.5
		},800)
	})
	
	//点击prev，next切换图片
	var $class
	var $index=0;
	$(".prev").click(function(){
		$class=$(this).parent().attr('class');
		if($class=='wonder_in'){
			if($index!=0){
				$(".wonder_con>ul").animate({
					left:"+=1180px"
				},800)
				$index--;
				$(".circle>ul>li").eq($index).css('background','#c1c1c1');
				$(".circle>ul>li").eq($index).siblings().css('background','#EBEEF5')
				$(".circle>ul>li").eq($index).attr('class',"active");
			}
			else{
				$(".wonder_con>ul").animate({
					left:"-2360px"
				},800)
				$index=2;
				$(".circle>ul>li").eq($index).css('background','#c1c1c1');
				$(".circle>ul>li").eq($index).siblings().css('background','#EBEEF5')
				$(".circle>ul>li").eq($index).attr('class',"active");
			}
		}
		else{
			$(".nav>ul").animate({
				left:0
			},800)
		}
		
	})
	$(".next").click(function(){
		$class=$(this).parent().attr('class');
		if($class=='wonder_in'){
			if($index!=2){
				$(".wonder_con>ul").animate({
					left:"-=1180px"
				},800)
				$index++;
				$(".circle>ul>li").eq($index).css('background','#c1c1c1');
				$(".circle>ul>li").eq($index).siblings().css('background','#EBEEF5')
				$(".circle>ul>li").eq($index).attr('class',"active");
			}
			else{
				$(".wonder_con>ul").animate({
					left:"0"
				},800)
				$index=0;
				$(".circle>ul>li").eq($index).css('background','#c1c1c1');
				$(".circle>ul>li").eq($index).siblings().css('background','#EBEEF5')
				$(".circle>ul>li").eq($index).attr('class',"active");
			}
		}
		else{
			$(".nav>ul").animate({
				left:"-1180px"
			},800)
		}
	})
	//切换图层
	
	$("#content>ul>li").click(function(){
		var $index=$(this).index();
		$(".nav>ul").css("display","none");
		$(".nav>ul").eq($index).css("display","block");
	})
	
	
	//排行榜 移入div播放图标的切换
	$(".paihang_in>li").mouseenter(function(){
		$(this).find('.line').stop().fadeOut(500);
		$(this).find('.bofang').stop().fadeIn(500)
	})
	$(".paihang_in>li").mouseleave(function(){
		$(this).find('.transfer>.bofang').stop().fadeOut(200)
		$(this).find('.transfer>.line').stop().fadeIn(500);
	})
	
	//小圆点触发变色
	var $color;
	$(".circle>ul>li").mouseenter(function(){
		$color=$(this).css('background')
		$(this).css('background','#c1c1c1')
	})
	$(".circle>ul>li").mouseleave(function(){
		if($(this).attr('class')=='active') return;
		$(this).css('background','#EBEEF5')
	})
	
	
	//小圆点点击事件
	$(".circle>ul>li").click(function(){
		$(this).siblings().removeAttr("class");
		$(this).siblings().css('background','#EBEEF5')
		$(this).attr('class',"active");
	})
})



