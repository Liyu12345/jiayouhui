$(function(){
	
	
	$('.centert-right').animate({
		"top":50,
	},3000).animate({
		"top":100,
	},3000)
				
	
	
	
	
	 var flag1 = flag2 = flag3 = flag4 = false;
	
    $('#username').change(function(){
    	var value = this.value;
    	var reg = /^\d{11}$/;
//		if(value.length == 11 && !isNaN(value)){
//			$('.username1').hide();
//				return true;
//			}else{
//			$('.username1').show();
////			 reutrn false;
//			}
		if(reg.test(value)){
			$('.username1').hide();
			flag1 = true;
//			return true;
//			console.log("你好")
		}else{
			$('.username1').show();
			flag1 = false;
//			reutrn false;
//			console.log("请输入11位有效手机号")
		}
    })
    
    $('#password1').change(function(){
    	var value = this.value;
    	var reg = /^[^A-Za-z]\w{5,16}$/;
		if(reg.test(value)){
			$('.password3').hide();
//			return true;
			flag2 = true;
		}else{
			$('.password3').show();
//			reutrn false;
			flag2 = false;
		}
    })
	
	$('#password2').change(function(){
    	var value = this.value;
//		var reg = /^[^A-Za-z]\w{6,16}$/;
    	var val1 = $('#password1').val();
    	
		if(value == val1){
			$('.password4').hide();
//			reutrn false;
			flag3 = true;
		}else{
			$('.password4').show();
			flag3 = false;
		}
    })
	
//	$("#butn").focus(function(){
//		if(flag1 && flag2 && flag3){
//			alert("");
//		}else{
//			alert("输入错误");
//		}
//	}
	
	
	//加载生成验证码方法
	 $.idcode.setCode();   //加载生成验证码方法
		    
    $("#butn").click(function(){
		console.log( $.cookie('user') );
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy && flag1 && flag2 && flag3){
//      	flag4 = true;
//			alert("验证码输入正确")

			//注册登录
	        var sUser = $('#username').val();
	        var sPsw1 = $('#password1').val();
	        var sPsw2 = $('#password2').val();
	        
	        
	        
	        var aCookie = [];
	        if(sUser =="" || sPsw1 =="" || sPsw2 == ""){
				//console.log("用户信息输入错误");
				alert("用户信息输入错误")
			}else{
//				console.log('地点');
				//新用户
				var  newUser = {"name":sUser,"pws":sPsw1};
	
				//得到cookie里面原来的用户信息
				var sCookie = $.cookie('user');
				
				//判断字符是否没有定义或者为空
				if(sCookie==undefined  || sCookie==""){
					//没有用户信息
					
					aCookie.push(newUser);
				}else{
					
					//如果cookie里面有用户信息
					aCookie = JSON.parse(sCookie);
					
					//第一种 新的用户信息已经注册了
					//第二种没有注册
					//判断新的用户信息是否已经注册
					
					var  bReg  = false //用户没有被注册
					
					$.each(aCookie,function(){
						//this //数组里面遍历到的对象
						if(this.name==sUser){
							//表示用户已经被注册
							bReg = true;
						}
					})
					
					
					if(bReg){
	//					console.log('您输入的信息已经注册');
						alert('您输入的信息已经注册')
					}else{
						
						aCookie.push(newUser);
//						alert('恭喜您，注册成功')
					}
					
				}
			}
			console.log(aCookie)
			//修改cookie
			$.cookie('user',JSON.stringify(aCookie),{expires:7 , path:"/"});
			
			//判断是否进入登录页面
			if(confirm("是否进入登录页面")){
				window.open('entry.html');
			}
			
			
        }else {
//          alert("验证码输入错误")
			alert("用户信息输入有误，请重新检查")
        }
        
        
        

	})
    
         
})