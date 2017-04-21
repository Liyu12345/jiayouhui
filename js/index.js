

$(function(){
	//1 让图片可以通过透明度进行轮播
	//当前显示的图片的小标
	var  index = 0;  

	show();  //动画显示当前的图片
	//show 的定义
	
	//1当前 大图从0 改变为1  其他兄弟节点 1变成0
	function show(){
		if(index == $('#bigpic').find('li').length){
			index =0;//显示第一张图片
		}else if(index < 0){
			//idnex =0  显示的第一张图片,第一张图片上一张  就是 第四张图片
			//第四张图片的index  =2；
			index = 3;
		}
		
		$('#bigpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0},500);
//		$('#smallpic').find('li').eq(index).stop().animate({'opacity':1},200).siblings().stop().animate({'opacity':0.5},200);
		$('#smallpic').find('li').eq(index).stop().css({'background':'#ff7d01'}).siblings().stop().css({'background':'#fff'});
		
	}
	
	var timer = setInterval(fAnimate,4000)
			
	//fAnimate 执行动画的函数
	function fAnimate(){
		index++;
		show();
		
		//超出li lenght
	}
	//2 给小图片添加点击事件	
	$('#smallpic').find('li').click(function(){
		//this.index  表示li的序号 下标 从0
		index = $(this).index();
		show();
	})
	
//	$(function(){
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
		
//	})

	//这个函数是为了适应格式 比如：01分01秒;
    function p (n){
        return n < 10 ? '0'+ n : n;  
    }

    //倒计时函数
    function newTime (){
        //定义当前时间
        var startTime = new Date(); 
        //定义结束时间
        var endTime = new Date("2018/1/1 00:00:00");
        
        //算出中间差并且已毫秒数返回; 除以1000将毫秒数转化成秒数方便运算；
        var countDown = (endTime.getTime() - startTime.getTime())/1000;
        
        //获取天数 1天 = 24小时  1小时= 60分 1分 = 60秒
        var oDay = parseInt(countDown/(24*60*60));
        
        //获取小时数 
        //特别留意 %24 这是因为需要剔除掉整的天数;
        var oHours = parseInt(countDown/(60*60)%24);
        
        //获取分钟数
        //同理剔除掉分钟数
        var oMinutes = parseInt(countDown/60%60);
        
        //获取秒数
        //因为就是秒数  所以取得余数即可
        var oSeconds = parseInt(countDown%60);
        
        //下面就是插入到页面事先准备容器即可;
        var html =  "<span>" + p(oHours) + "时</span>" + "<span>" + p(oMinutes) + "分</span>" +"<span>" + p(oSeconds) + "秒</span>";
        var oTime = document.getElementsByClassName('time');
        for (var i = 0; i < oTime.length; i++) {
        	oTime[i].innerHTML = html;
        }
        //别忘记当时间为0的，要让其知道结束了;
        if(countDown < 0){
            document.getElementById('time').innerHTML = '元旦到了';
        }
        //当前时间
       
    }
    setInterval(newTime,1000);

})
