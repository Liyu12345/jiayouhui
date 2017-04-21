


$(function(){
	$('.contert-left-two-top-right-1').click(function(){
//					console.log('aa')
		$(this).hide();
		$('.contert-left-two-top').css({
			'height':116
		})
		$('.contert-left-two-top-right-2').show();
	})
	$('.contert-left-two-top-right-2').click(function(){
//					console.log('bb')
		$(this).hide();
		$('.contert-left-two-top').css({
			'height':58
		})
		$('.contert-left-two-top-right-1').show();
	})
	
	$('.contert-left-two-top-right-3').click(function(){
//					console.log('cc')
		$(this).hide();
		$('.contert-left-two-bottom').css({
			'height':116
		})
		$('.contert-left-two-top-right-4').show();
	})
	$('.contert-left-two-top-right-4').click(function(){
//					console.log('dd')
		$(this).hide();
		$('.contert-left-two-bottom').css({
			'height':58
		})
		$('.contert-left-two-top-right-3').show();
	})
})