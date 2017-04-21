
$(function(){
	
	//左边的商品列表
	$.ajax({
		type:"get",
		url:"../json/good.json",
		success:function(res){
			console.log(res.data[0].title);
//						console.log(typeof res);
//						console.log(res.data[0].img);
			update(res.data);
			
		}
	})
	//刷新界面
	function update(data){
		//console.log(data);
		
		$.each(data,function(index,obj){
			console.log(index)
//						console.log(this);
			var $li = $('<li/>');
			$('<img src="'+ this.img+'" alt="" />').appendTo($li)
//						console.log(this.img)
			$('<a href="detail.html?'+index+'"></a>').appendTo($li);
			$('<span class="tit">'+ this.title+'</span>').appendTo($li);
			$('<span class="pri">'+this.price+'</span>').appendTo($li);
			
			$li.appendTo($('#list ul'));
		})
		
	}
	
	
})	



$(function(){
	//右边的商品列表
	$.ajax({
		type:"get",
		url:"../json/good1.json",
		success:function(res){
			console.log(res.data[0].title);
//						console.log(typeof res);
//						console.log(res.data[0].img);
			update(res.data);
			
		}
	})
	//刷新界面
	function update(data){
		//console.log(data);
		
		$.each(data,function(){
//						console.log(this);
			var $li = $('<li/>');
			$('<img src="'+ this.img+'" alt="" />').appendTo($li)
			console.log(this.img)
			$('<a href="detail.html"></a>').appendTo($li);
			$('<span class="tit">'+ this.title+'</span>').appendTo($li);
			$('<span class="pri">'+this.price+'</span>').appendTo($li);
			
			$li.appendTo($('#list2 ul'));
		})
		
	}
})


//小轮播图
$(function(){
	
	
	$.ajax({
		type:"get",
		url:"../json/good4.json",
		success:function(res){
			console.log(res.data[0].title);
//						console.log(typeof res);
//						console.log(res.data[0].img);
			update(res.data);
			
		}
	})
	//刷新界面
	function update(data){
		//console.log(data);
		
		$.each(data,function(){
//						console.log(this);
			var $li = $('<li/>');
			$('<img src="'+ this.img+'" alt="" />').appendTo($li)
			console.log(this.img)
			$('<a href="#"></a>').appendTo($li);
			$('<span class="tit">'+ this.title+'</span>').appendTo($li);
			$('<span class="pri">'+this.price+'</span>').appendTo($li);
			
			$li.appendTo($('.contert-four-list'));
		})
		
	}
	
	
	
	var  index = 0;  //当前显示的图片的小标
	show();  //动画显示当前的图片
	
	function show(){
		if(index == $('.contert-four-list').find('li').length){
			index =0;//显示第一张图片
		}else if(index<0){
			
			index = $('.contert-four-list').find('li').length - 1;	
		}
		$('.contert-four-list').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0.5},500);
		
	}
	
	
	//设置计时器
	var timer = setInterval(fAnimate,4000)
	
	//fAnimate 执行动画的函数
	function fAnimate(){
		index++;
		show();	
	}
	
	//3添加上一页和下一页
	//				
	$('.contert-four-page').click(function(){
	//减小序号
		index--;
		show();
	})
	
	$('.contert-four-next').click(function(){
		index++;
		show();
	})
	
	//4 停止计时器
	//当鼠标移入  contert-four 的时候 停止计时器
	//离开的时候重启计时器
	$('.contert-four').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(fAnimate,3000);
	})
})	

			
		