$(function(){
	var  index = 0;  //当前显示的图片的小标
	show();  //动画显示当前的图片
	
	function show(){
		if(index==$('#bigpic').find('li').length){
			index =0;//显示第一张图片
		}else if(index<0){
			
			index=1;	
		}
		$('#bigpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
		//2 对小图进行操作
		$('#smallpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0.5},200);
	}
	
	
	//设置计时器
	var timer = setInterval(fAnimate,4000)
	
	//fAnimate 执行动画的函数
	function fAnimate(){
		index++;
		show();	
	}
	//2 给小图片添加点击事件
//				
//				$('#smallpic').find('li').click(function(){
//					//this.index  表示li的序号 下标 从0
//					index = $(this).index();
//					show();
//				})
	
	//3添加上一页和下一页
//				
	$('.prev').click(function(){
		//减小序号
		index--;
		show();
	})
	
	$('.next').click(function(){
		index++;
		show();
	})
//				$('.prev').hover(function(){
//					index--;
//					show();
//				},function(){
//					hide()
//				})
//				$('.next').hover(function(){
//					index--;
//					show();
//				},function(){
//					hide()
//				})
	
	//4 停止计时器
	//当鼠标移入 id focus 的时候 停止计时器
	//离开的时候重启计时器
//				$('#focus').hover(function(){
//					clearInterval(timer);
//				},function(){
//					timer = setInterval(fAnimate,4000);
//				})
	
})