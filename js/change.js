		//完美运动框架，任意属性同时运动
		function getstyle(obj,name){//用来判断支持的浏览器
			if(obj.currentStyle)
			{
				return obj.currentStyle[name];//ie支持
			}
			else
			{
				return getComputedStyle(obj,false)[name];//谷歌火狐支持
			}
		}
		function change(obj,josn,fun){
			var cur=null;
			clearInterval(obj.timer);
			//var obj.timer=null;不能这样定义
			obj.timer=setInterval(function(){//有关定时器取值的都应该放在定时器里面
				for(var attr in josn)
				{
					var stop=false;
					if(attr=='opacity')
					{
						cur=Math.round(parseFloat(getstyle(obj,attr))*100);
					}
					else
					{
						cur=parseInt(getstyle(obj,attr));
					}
					var speed=(josn[attr]-cur)/3;
					speed=speed>0?Math.ceil(speed):Math.floor(speed);
					if(cur==josn[attr])
					{
						stop=true;
					}
					if(attr=='opacity')
					{
						obj.style[attr]=(cur+speed)/100;
					}
					else
					{
						obj.style[attr]=cur+speed+'px';
					}
				}
				if(stop==true){
					clearInterval(obj.timer);
					if(fun) fun();
				}
			},30);
			
		}
		function ajax(url,fnSucc,fnFaild){
			var str=objstr(obj)
			var xmlhttp;
			if(window.XMLHttpRequest)
			{//IE7+,Firefox，chrome，opera，Safair
				xmlhttp=new XMLHttpRequest();
			}
			else
			{//IE6,IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			if(type.toLowerCase()=='get'){
				xmlhttp.open("GET",url+"?"+str,true);
				xmlhttp.send();
			}
			else{
				xmlhttp.open('POST',url+'?'+str,true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded")
				xmlhttp.send(str);
			}
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4){
					if(xmlhttp.status>=200&&xmlhttp.status<300||
					xmlhttp.status==304){
						fnSuc(xmlhttp);
					}
					else{
						fnFail(xmlhttp);
					}
				}
			}
		}