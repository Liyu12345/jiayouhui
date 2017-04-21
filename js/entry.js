

$(function(){
	
	
//	setInterval(function(){
		$('.register-left').animate({
			"top":50,
		},3000).animate({
			"top":92,
		},3000)
//	},100)
	

	$('.register-right-list2 a').click(function(){
		$('.register-right-form2').show()
		$('.register-right-form1').hide()
		
		$('.register-right-list1 a').css({
			color: '#666695',
			borderBottom: 0,
		})
		
		$('.register-right-list2 a').css({
			color: '#dc0f50',
			borderBottom: '2px solid #dc0f50',
		})
		
	})
	
	$('.register-right-list1 a').click(function(){
		$('.register-right-form1').show()
		$('.register-right-form2').hide()
		
		$('.register-right-list2 a').css({
			color: '#666695',
			borderBottom: 0,
		})
		
		$('.register-right-list1 a').css({
			color: '#dc0f50',
			borderBottom: '2px solid #dc0f50',
		})
	
	})
	
	
	
	//登录界面输入判断
	$('#phone1').change(function(){
    	var value = this.value;
    	var reg = /^\d{11}$/;
		if(reg.test(value)){
			$('.register_form-one p').css({
				'background' : 'green'
			});
		}else{
			$('.register_form-one p').css({
				'background' : 'red'
			});
//		reutrn false;
//		console.log("请输入11位有效手机号")
		}
    })
	
	$('#password1').change(function(){
    	var value = this.value;
    	var reg = /^[^A-Za-z]\w{5,16}$/;
    	
		if(reg.test(value)){
			$('.register_form-two p').css({
				'background' : 'green'
			});
		}else{
			$('.register_form-two p').css({
				'background' : 'red'
			});
		}
    })
	
//	var str = $.cookie('user');
//  	console.log(str);
//  	
//  	if(str.pws){
//  		
//  	}
	
	//登录界面
	$('#entry1').click(function(){
		
		var sName = $('.re_input').val();
		var sPsw = $('#password1').val();
		
		if(sName!="" && sPsw!=""){
			//校验成功
			var sCookie = $.cookie('user');
			console.log(sCookie)
			//判断字符串是否为空
			if(sCookie=='' || sCookie==undefined){
				var obj = {type:false};
//				console.log('用户未注册');
//				alert("用户未注册")
				//跳转到注册界面
				if(confirm("用户未注册,是否进入注册页面")){
					window.open('register.html');
				}
				
			}else{
				
				var aCookie = JSON.parse(sCookie); //acookie是arr
				var bRig = true  ; //用户未注册
				console.log(aCookie)
				$.each(aCookie,function(){
				//、this// 遍历到的对象
				console.log(this.name==sName);
				console.log(this['pws']==sPsw);
					if(this['name'] == sName && this['pws'] == sPsw){
						//登录成功
						bRig = false ;//登录成功
						//用户信息是正确的
//						var obj = {type:true,name:sName}
//						console.log(name);
//						//alert("登录成功");
						if(confirm('登陆成功，是否进入主页面')){
							window.open('index.html');
						}
					}else if(this['name'] == sName && this['pws'] != sPsw){
						alert("密码错误");
					}
				})
				
				if(bRig){
					//console.log('用户未注册');
					alert("用户未注册")
					var obj = {type:false};
				}else{
					//用户信息是正确的
					//{type：true，name：name}
					var obj = {type:true,name:sName}
					console.log(name);
				}
				
			}
			
			$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});//path属性
			console.log( $.cookie('login'));
			
		}else{
//						console.log("输入错误");
			alert('输入错误')
		}
	})
				



	//快捷登录
	$('#phone2').change(function(){
    	var value = this.value;
    	var reg = /^\d{11}$/;
		if(reg.test(value)){
			$('.remind1').hide();
			return true;
		}else{
			$('.remind1').show().html("请输入11位有效手机号");
		}
    })

	
})