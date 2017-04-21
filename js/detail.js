
//轮播图
$(function(){
	var index = 0;
	show();
	function show(){
		if(index == $('.bigpic').find('li').length || index == $('.posBigpic').find('li').length){
			index = 0
		}else if(index < 0){
//						index = 5;
			index = $('.bigpic').find('li').length - 1;
			index = $('.posBigpic').find('li').length - 1;
		}
		
		$('.bigpic').find('li').eq(index).animate({'opacity':1},200).siblings().animate({'opacity':0},500);
		$('.posBigpic').find('li').eq(index).animate({'opacity':1},200).siblings().animate({'opacity':0},500);
		
		$('.smallpic').find('li').eq(index).animate({'opacity':1},200).siblings().animate({'opacity':0.5},200);
	}
	//设置计时器
//	var timer = setInterval(fAnimate,3000);
//	//fAnimate 执行动画的函数
//	function fAnimate(){
//		index++;
//		show();
//	}
	
	//添加上一页和下一页
	$('.prev').click(function(){
		index--;
		show();	
	})
	$('.next').click(function(){
		index++;
		show();
	})

	
	//给小图片添加点击事件
	$('.smallpic').find('li').click(function(){
		index = $(this).index();
		show();
	})
	//停止计时器
	$('.content-two-conter,.smallpic').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(fAnimate,3000);
	})

})


$(function(){	
	//放大镜
	var $bigpic = $('.bigpic');
	var $pos = $('.pos');
	var $posBigpic = $('.posBigpic li img');
	
	$(document).mousemove(function(e){
		//console.log(e.pageX);
		//console.log(e.pageY);
		var bigOffset = $bigpic.offset();
		if(e.pageY >= bigOffset.top && e.pageX >= bigOffset.left && e.pageX <= bigOffset.left + $bigpic.outerWidth() && e.pageY <= bigOffset.top + $bigpic.outerHeight()){
			$pos.show();
			$posBigpic.show().css({
				zIndex: 20,
			});
			//console.log(e.pageX - (parseInt($pos.outerWidth()/2)) - $bigpic.offset().left);
			$pos.css({
				left : e.pageX - (parseInt($pos.outerWidth()/2)) - $bigpic.offset().left,
				top : e.pageY - (parseInt($pos.outerHeight()/2)) - $bigpic.offset().top,
			})
			//防止移出左边
			if(e.pageX <= bigOffset.left + $pos.outerWidth()/2){
				$pos.css({
					left : 0 
				})
			}
			//防止移出上边框
			if(e.pageY <= parseInt(bigOffset.top + $pos.outerHeight()/2) ){
				$pos.css({
					top : 0,
				})
			}
			
			//防止小灰块移出右边
			if(e.pageX >= bigOffset.left + $bigpic.outerWidth() - $pos.outerWidth()/2){
				$pos.css({
					left : $bigpic.outerWidth()- $pos.outerWidth()
				})
			}
			//防止小灰块移出下边
			if(e.pageY >= bigOffset.top + $bigpic.outerHeight() - $pos.outerHeight()/2){
				$pos.css({
					top : $bigpic.outerHeight() - $pos.outerHeight()
				})
			}
						
			//改变大框的偏移量
			$posBigpic.css({
				left : - $pos.position().left*4,
				top : - $pos.position().top*4
			})
					
		}else{
			$pos.hide();
			$posBigpic.hide();
		}
		
	
	})
	
	
})





//***********商品详情介绍点击事件**********
$(function(){
	
	$('.content-three-top').find('li').click(function(){
		$(this).css({
			color: '#dc0f50',
			background: '#fff',
			borderTop: '2px solid #dc0f50',
			borderRight: '1px solid #d6d6d6',
		}).siblings().css({
			color: 'black',
			background: '#f5f5f5',
			borderTop: 0,
			borderRight: 0,
		})
	})
	
	$('.content-three-top-one').click(function(){
		$('.content-three-bottom').show();
		$('.content-three-bottom-1').hide();
	})
	$('.content-three-top-two').click(function(){
		$('.content-three-bottom').hide();
		$('.content-three-bottom-1').show();
	})
	
	//选择款式颜色 和 尺寸
	$('.content-two-right-bottom-table-ul li').find('a').click(function(){
		$(this).css({
			border: '1px solid red',
		}).sibings().css({
			border: 0,
		})
	})
	
})

//********************good2.json***********************
$(function(){
	
	$.ajax({
		type:"get",
		url:"../json/good2.json",
		success:function(res){
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
//			console.log(this.img)
			$li.appendTo($('#list'));
		})
	}
})

//*********************good3.json******************************
$(function(){
	
	$.ajax({
		type:"get",
		url:"../json/good3.json",
		success:function(res){
//			console.log(res);
//			console.log(typeof res);
//			console.log(res.data[0].img);
			update(res.data);
			
		}
	})
	
	//刷新界面
	function update(data){
		//console.log(data);
		var index = location.search.replace("?","");//添加   获取下标
		console.log(index);
		
		$.each(data,function(){
//						console.log(this);
			var $li = $('<li/>');
			$('<img src="'+ this.img+'" alt="" />').appendTo($li);
			$('<button class="btn">加入购物车</button>').appendTo($li);
			$('<span class="tit">'+ this.title+'</span>').appendTo($li);
			$('<span class="pri">'+this.price+'</span>').appendTo($li);
			$('<span class="deletePrice">'+this.deletePrice+'</span>').appendTo($li);
			
			$li.appendTo($('.bigpic'));
		})
		
		//产品数量添加
		var sun = 1;
		$('.add').click(function(){
			sun++;
			$('.result').val(sun);
		})
		$('.lessen').click(function(){
			sun>1?sun--:sun;
			$('.result').val(sun);
		})
		
/******************************************加入购物车**************************************************/					
		$('.bigpic').on('click','button',function(e){
			
			//e.target    //点击的a 标签；
			//console.log(e.target);
			//console.log("购买商品");
			//把产品信息存在cookie里面
			
			 //获取title
			 var title = $(e.target).parent().find('.tit').html();
			 console.log($(e.target));
			 
			 //price
			 var price = $(e.target).parent().find('.pri').html();
			 
			 //img
			 var img = $(e.target).parent().find('img').attr('src');
			 
			 //deletePrice
			 var deletePrice = $(e.target).parent().find('.deletePrice').html();
			 
			 //新的产品信息
			 var obj = {"title":title,"price":price,"deletePrice":deletePrice,"img":img};
						 
			 var strCookie =  $.cookie("good3");    //strCookie 是存在cookie里面的产品信息
			 
			 console.log(strCookie);
			
						
			//将cookie字符串转换成对象；
			//oCookie保存了所有的产品信息
			//对返回的cookie 进行判断 如果为空 
			
			var  bGood = false;  //代表没有信息
			if(strCookie == undefined || strCookie =="" ){

				//如果完成没有产品信息
				var oCookie = [];
				var newGood = {"title":title,data:obj,num:1}//新的完整的产品信息
				oCookie.push(newGood);

			}else{
				var oCookie = JSON.parse(strCookie);
				console.log(oCookie)
				//[{title:商品名称,data:{title:title,price:price,img:url},num:购买的数量},{}]
				//目的 查找商品是否已经有购买信息
				//如果有购买信息 num+1
				//没有 生成一个新的产品信息
				
				var all_num = 0;  //购物车里的商品总数量
				$.each(oCookie,function(){
					//如果在cookie里面能够找到产品信息  
					//对数量+1 num+1
					if(this.title ==title){
						var num = parseInt(this.num)+1;   //为了防止num是字符串   将字符串转换成int
						this.num = num;
						bGood =true  ;  //表示产品有信息
					}
					
					all_num += this.num;
					
					$('.ul_2').find('span').html(all_num);
					
				})
				
				//cookie存在产品信息 但是没有当前购买的产品的信息
				if(bGood==false){
					//生成新的商品信息
					var newGood = {"title":title,data:obj,num:1}//新的完整的产品信息
					oCookie.push(newGood);
				}
			}

//			//$.cookie('good',"将要保存的产品信息");
//			//表示没有商品信息
//			if(bGood==false){
//			//生成新的商品信息
//			var newGood = {"title":title,data:obj,num:0}//新的完整的产品信息
//				oCookie.push(newGood);
//							
//			}
			
			/*
			//点击购买商品飞入购物车效果
			var cloneImg = img.clone();
			//当前img的位置
			var current = img.offset();
			//宽度 高度
			var cWidth = img.outerWidth();
			var cHeight = img.outerWidth();
			var self = this; //保存的是点击的button
			//设置cloneimg的样式 等于原img的样式
			$cloneImg.css({
        		'position':'absolute',
        		'left' :current.left,
        		'top'	:current.top,
        		'width'	:cWidth,
        		'height':cHeight
        	});
			//添加clone的img在body上
    		$('body').append($cloneImg);
    		//1 查找购物车的位置
        	var currentCar = $('.ul_2').offset();
        	//2设置动画
        	currentCar.animate({
        		'width': 0,
        		'height': 0,
        		'opacity': 0,
        		'left': currentCar.left,
        		'top': currentCar.top + $('.ul_2').outerHeight()
        	},2000,function(){
        		//1移除cloneimg
        		$cloneImg.remove();
        	});
        	*/
        	
        	
			
			
			
			
//			//重新设置cookie
			$.cookie("good3",JSON.stringify(oCookie),{expires:7 , path:"/"});
//						
			console.log($.cookie("good3") );
			
			//json
			
			//[{title:商品名称,data:{title:title,price:price,img:url},num:购买的数量},{}]					
		})
	}
//			console.log(JSON.parse($.cookie("good")));
})


