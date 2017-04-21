
$(function(){
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
	
})
