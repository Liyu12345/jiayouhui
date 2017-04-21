	$(function(){
		$('#main_head').load('common/head.html .com_head',function(){
			
			$('.fuc').click(function(){
		
				$('body,html').animate({scrollTop:0},1000); 
					return false; 
				})
				
				$('.packet').hover(function(){
				$('.ewm2new').show()
				},function(){
					$('.ewm2new').hide()
				})
				
				$('.wechat').hover(function(){
				$('.ewm').show()
				},function(){
					$('.ewm').hide()
			})
				
			//显示登录名	
			var str  =	$.cookie('login')
			console.log(str);
			var obj=JSON.parse(str);
			console.log(obj);
			if(obj.type==true){
				$('.load').html(obj.name)
			}
			//退出登录
			$('.load1').click(function(){
//				obj.type == false;
				$.cookie('login',JSON.stringify({type:false}),{expires:7 , path:"/"})
			})
			
			
			//购物车里的商品数量
			var all_num = 0;
			var strCookie =  $.cookie("good3"); 
			console.log( strCookie );
			var oCookie = JSON.parse(strCookie);
			console.log( oCookie );
			
			$.each(oCookie,function(){
				
				all_num += this.num;
				
				$('.ul_2').find('span').html(all_num);
			})
			
		})
		
		
		$('#fooder').load('common/fooder.html .com_fooder',function(){})
	})