

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
	var timer = setInterval(fAnimate,3000);
	//fAnimate 执行动画的函数
	function fAnimate(){
		index++;
		show();
	}
	
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
			console.log('ddd');
			$pos.show();
			$posBigpic.show().css({
				zIndex: 20,
			});
			console.log(e.pageX - (parseInt($pos.outerWidth()/2)) - $bigpic.offset().left);
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






$(function(){
	$('.content-three-top').find('li').click(function(){
		$(this).css({
			background: '#fff',
			borderTop: '2px solid #dc0f50',
			borderRight: '1px solid #d6d6d6',
		}).siblings().css({
			background: '#f5f5f5',
			borderTop: 0,
			borderRight: 0,
		})
	})
})


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
			console.log(this.img)
			$li.appendTo($('#list'));
		})
	}
})


$(function(){
	
	$.ajax({
		type:"get",
		url:"../json/good3.json",
		success:function(res){
			console.log(res);
//			console.log(typeof res);
//			console.log(res.data[0].img);
			update(res.data);
			
		}
	})
	//刷新界面
	function update(data){
		//console.log(data);
		var index = location.search.replace("?","")//添加   获取下标
		console.log(index)
		
		$.each(data,function(){
//						console.log(this);
			var $li = $('<li/>');
			$('<img src="'+ this.img+'" alt="" />').appendTo($li)
			$('<a href="#"></a>').appendTo($li);
			$('<span class="tit">'+ this.title+'</span>').appendTo($li);
			$('<span class="pri">'+this.price+'</span>').appendTo($li);
			$('<span class="deletePrice">'+this.deletePrice+'</span>').appendTo($li);
			
			$li.appendTo($('.bigpic'));
		})
/******************************************加入购物车**************************************************/					
		$('.bigpic').on('click','a',function(e){
			//e.target    //点击的a 标签；
			console.log(e.target);
			console.log("购买商品");
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
				//[{title:商品名称,data:{title:title,price:price,img:url},num:购买的数量},{}]
				//目的 查找商品是否已经有购买信息
				//如果有购买信息 num+1
				//没有 生成一个新的产品信息
				
				$.each(oCookie,function(){
					//如果在cookie里面能够找到产品信息  
					//对数量+1 num+1
					if(this.title ==title){
						var num = parseInt(this.num)+1;   //为了防止num是字符串   将字符串转换成int
						this.num = num;
						bGood =true  ;  //表示产品有信息
					}
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
//						
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


