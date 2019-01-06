window.onload = function(){
	var cover = document.getElementById('cover');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			cover.style.position = "fixed";
		}
		else{
			cover.style.position = 'static';
		}
	}
}

function animate(obj, json, callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for (var attr in json){
			if(attr=='opacity'){
				var now = parseInt(getStyle(obj,attr)*100);
			}
			else{
				var now = parseInt(getStyle(obj,attr));
			}

			var speed = (json[attr]-now)/15;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(attr=='opacity'){
				obj.style[attr] = (now+speed)/100;
			}else{
				obj.style[attr] = now + speed + 'px';
			}

			var current = now + speed;
			if(json[attr]!==current){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	},10)
}

function getStyle(obj,style){
	if(getComputedStyle(obj)){
		return getComputedStyle(obj)[style];
	}else{
		obj.currentStyle[style];
	}
}

var sliderB = document.getElementById('sliderB');
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var oNavlist = document.getElementById('nav').children;
var index = 1;

function next(){
	index++;
	animate(slider, {left:-800*index}, function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
	});
	navChange();
}

function prev(){
	index--;
	animate(slider, {left:-800*index}, function(){
		if(index==0){
			slider.style.left='-4800px';
			index = 6;
		}
	})
	navChange();
}

var timer = setInterval(next,3000);

//鼠标划上时，停止轮播，出现箭头
sliderB.onmouseover = function(){
	clearInterval(timer);
	animate(left,{opacity:90});
	animate(right,{opacity:90});
}

//鼠标划出，箭头消失，继续轮播
sliderB.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,3000);
}

//点击左右箭头
right.onclick = next;
left.onclick = prev;

//点击小按钮，让slider滑动到指定的位置
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		oNavlist.idx = i;
		animate(slider, {left:-800*index});
		navChange();
	}
}

function navChange(){
	for (var i=0;i<oNavlist.length;i++){
		oNavlist[i].className='';
	}
	if(index==7){
		oNavlist[0].className = "active"; 
	}
	else if(index==0){
		oNavlist[5].className = 'active';
	}
	else{
		oNavlist[index-1].className = 'active';
	}
}

		var consult = document.getElementsByClassName('consult')[0];
		var discount = document.getElementsByClassName('discount')[0];
		var code = document.getElementsByClassName('code')[0];
		var kart = document.getElementsByClassName('kart')[0];
		var eight = document.getElementsByClassName('eight')[0];
		consult.style.right = '-80px';
		discount.style.right = '-80px';
		code.style.right = '-80px';
		kart.style.right = '-80px';
		var time1;


consult.onmouseover = function () {
		    var t = parseInt(consult.style.right);
		    clearInterval(time1);
		    time1 = setInterval(function (){
		        t++;
		        consult.style.right = t + 'px';
		        if(t >= 0){
		            consult.style.right = '0px';
		            clearInterval(time1);
		        }
		        },0.1);
		}
		consult.onmouseout = function () {
		    var t = parseInt(consult.style.right);
		    clearInterval(time1);
		    time1 = setInterval(function (){
		        t--;
		        consult.style.right = t + 'px';
		        if(t <= -80){
		            consult.style.right = '-80px';
		            clearInterval(time1);
		        }
		        },0.1);
		}

		var time2;
		discount.onmouseover = function () {
		    var t = parseInt(discount.style.right);
		    clearInterval(time2);
		    time2 = setInterval(function (){
		        t++;
		        discount.style.right = t + 'px';
		        if(t >= 0){
		            discount.style.right = '0px';
		            clearInterval(time2);
		        }
		    },0.1);
		}
		discount.onmouseout = function () {
		    var t = parseInt(discount.style.right);
		    clearInterval(time2);
		    time2 = setInterval(function (){
		        t--;
		        discount.style.right = t + 'px';
		        if(t <= -80){
		            discount.style.right = '-80px';
		            clearInterval(time2);
		        }
		    },0.1);
		}

		var time3;
		code.onmouseover = function () {
		    var t = parseInt(code.style.right);
		    clearInterval(time3);
		    time3 = setInterval(function (){
		        t++;
		        code.style.right = t + 'px';
		        eight.src="image/erwei.png";
		        eight.classList.remove("eight");
		        eight.classList.add("eight");
		        if(t >= 0){
		            code.style.right = '0px';
		            clearInterval(time3);
		        }
		    },0.1);
		}
		code.onmouseout = function () {
		    var t = parseInt(code.style.right);
		    clearInterval(time3);
		    time3 = setInterval(function (){
		        t--;
		        code.style.right = t + 'px';
		        eight.src="image/serwei.png";
		        eight.classList.remove("eight");
		        eight.classList.add("eight");
		        if(t <= -80){
		            code.style.right = '-80px';
		            clearInterval(time3);
		        }
		    },0.1);
		}

		var time4;
		kart.onmouseover = function () {
		    var t = parseInt(kart.style.right);
		    clearInterval(time4);
		    time4 = setInterval(function (){
		        t++;
		        kart.style.right = t + 'px';
		        if(t >= 0){
		            kart.style.right = '0px';
		            clearInterval(time4);
		        }
		    },0.1);
		}
		kart.onmouseout = function () {
		    var t = parseInt(kart.style.right);
		    clearInterval(time4);
		    time4 = setInterval(function (){
		        t--;
		        kart.style.right = t + 'px';
		        if(t <= -80){
		            kart.style.right = '-80px';
		            clearInterval(time4);
		        }
		    },0.1);
		}

// function text_animate(obj, json, callback){
// 	clearInterval(obj.text_timer);
// 	obj.text_timer = setInterval(function(){
// 		var isStop = true;
// 		for (var attr in json){
// 			var now = parseInt(getStyle(obj,attr));
// 			var speed = -5;
// 			obj.style[attr] = now + speed + 'px';
// 			var current = now + speed;
// 			if(json[attr]!==current){
// 				isStop = false;
// 			}
// 		}
// 		if(isStop){
// 			clearInterval(obj.text_timer);
// 			callback&&callback();
// 		}
// 	},20)
// }

// var text_box = document.getElementById('text_box');
// var text_slider = document.getElementById('text_slider');
// var textP = document.getElementById('textP');
// var text_index = 0;

// function text_next(){
// 	text_index++;
// 	text_animate(text_slider, {top:-390*index}, function(){
// 		if(text_slider.style.top=='-390px'){
// 			text_slider.style.top = '0';
// 			text_index = 0;
// 		}
// 	});
// }

// var text_timer = setInterval(text_next,2000);

// text_box.onmouseover = function(){
// 	clearInterval(text_timer);
// }

// text_box.onmouseout = function(){
// 	text_timer = setInterval(text_next,2000);
// }

var money = document.getElementById("money");
var display = document.getElementById("display");
function md(value){
	display.innerHTML = "¥ "+value;
}