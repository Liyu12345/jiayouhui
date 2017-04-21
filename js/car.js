$(function(){
				
	//判断购物车有无商品而显示的状态
	refresh('li');
	function refresh(li){
		if($('.centert_ul2').children(li).length == 0){
			$('.centert-hide').show();
			$('.centert-show').hide();
		}else{
			$('.centert-hide').hide();
			$('.centert-show').show();
		}
	}
	
	
	
	var strCookie = $.cookie("good3");
	console.log(strCookie)
	if(strCookie==undefined || strCookie==""){
		//判断购物车有无商品而显示的状态
		refresh('li');
		console.log("没有购买产品")
	}else{
		//刷新产品列表
		var oCookie = JSON.parse(strCookie);
		
		console.log(oCookie)
		$.each(oCookie, function() {

			//this  //{title:title,data:{},num:num}
			
			var $li = $('<li/>');
			$li.append('<input type="checkbox"' +this.data.img +'/>');
			//添加img
			$li.append('<img src='+this.data.img +'/>');
			$li.append('<span class="tit">'+this.data.title+'</span>');
			$li.append('<span class="pri">'+'￥'+this.data.price+'元'+'</span>');
			$li.append('<span class="deletePrice">'+this.data.deletePrice+'</span>');
			$li.append('<span class="num">'+this.num+'</span>');
			$li.append('<span class="pri1">'+'￥'+this.data.price*this.num+'元'+'</span>');
			$li.append('<a href="#">删除</a>');
//			$('<a href="#">删除</a>').appendTo($li);
			
			$('.centert_ul2').append($li);
		});
		
		//判断购物车有无商品而显示的状态
		refresh('li');
	}
	
	//删除购物车某商品的点击事件
	$('.centert_ul2').children('li').find('a').click(function(){
		//获取 li的下标
		var oIndex = $(this).parent().index()
//		console.log($(this).parent().index())
		
		//删除 li
		$(this).parent().remove(); 
//		console.log(oCookie,oCookie.length)
//		delete oCookie[oIndex]
//		console.log(oCookie[oIndex])
		//删除oCookie 里的li
		oCookie.splice(oIndex,1)     
//		console.log(oCookie,oCookie.length)
		
		//购物车里的商品数量
		oCookie.all_num = 0;
		$.each(oCookie,function(){
			
			oCookie.all_num += this.num;
			
			$('.ul_2').find('span').html(oCookie.all_num);
		})
		//重新获取oCookie
		$.cookie('good3',JSON.stringify(oCookie),{expires:7 , path:"/"})
		//判断购物车有无商品而显示的状态
		refresh('li');
		
	})
	
})


