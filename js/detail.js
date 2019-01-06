var slider = document.getElementById("slider");
var sp0 = document.getElementById("sp0");
var sp1 = document.getElementById("sp1");
var img = document.getElementById("img");
var img0 = document.createElement("img");
img0.src="../image/pp0.jpeg";
var img1 = document.createElement("img");
img1.src="../image/pp1.jpeg";
var index=0;
var big_img = document.createElement('div');
var detail = document.getElementById("detail");
var big_img0 = document.createElement('img');
big_img0.src="../image/pp0.jpeg";
big_img0.style['width']="800px";
big_img0.style['position']="absolute";
big_img0.style['top']="0";
big_img0.style['left']="0";

var big_img1 = document.createElement('img');
big_img1.src="../image/pp1.jpeg";
big_img1.style['width']="800px";
big_img1.style['position']="absolute";
big_img1.style['top']="0";
big_img1.style['left']="0";


big_img.style['position']="absolute";
big_img.style['top']="20px";
big_img.style['left']="428px";
big_img.style['width']="408px";
big_img.style['height']="408px";
big_img.style['border']="1px solid #d0cdc7";
big_img.style['background-color']="white";
big_img.style['overflow']="hidden";


img.appendChild(img0);
sp0.style['border']="2px solid #ff9003";

sp0.onmouseover = function(){
	sp1.style['border']="0";
	var images=img.childNodes;
	for(var i=0;i<images.length;i++)
		img.removeChild(images[i]);
	for(var i=0;i<images.length;i++)
		img.removeChild(images[i]);
	img.appendChild(img0);
	sp0.style['border']="2px solid #ff9003";
	index=0;
}

sp1.onmouseover = function(){
	sp0.style['border']="0";
	var images=img.childNodes;
	for(var i=0;i<images.length;i++)
		img.removeChild(images[i]);
	for(var i=0;i<images.length;i++)
		img.removeChild(images[i]);
	img.appendChild(img1);
	sp1.style['border']="2px solid #ff9003";
	index=1;
}

var main = document.getElementById("main");
img.onmouseover = function(){
	slider.style['display'] = 'block';
	detail.appendChild(big_img);
	if(index==0){
		big_img.appendChild(big_img0);
		img0.onmousemove = function(ev){
 			var oL = ev.clientX - img.offsetLeft -main.offsetLeft - slider.offsetWidth/2;
 			var oT = ev.clientY - img.offsetTop -main.offsetTop -38 - slider.offsetHeight/2;
 			var oMaxw = img0.offsetWidth - slider.offsetWidth;
 			var oMaxh = img0.offsetHeight - slider.offsetHeight;

 			oL = oL>oMaxw?oMaxw:(oL<0?0:oL);
 			oT = oT>oMaxh?oMaxh:(oT<0?0:oT);

 			var scale = big_img0.offsetHeight/img0.offsetHeight;

 			slider.style.left = oL + 'px';
 			slider.style.top = oT + 'px';
 			big_img0.style.left = -oL*scale + 'px';
 			big_img0.style.top = -oT*scale + 'px';
 		}
	}else{
		big_img.appendChild(big_img1);
		img1.onmousemove = function(ev2){
 			var oL = ev2.clientX - img.offsetLeft -main.offsetLeft - slider.offsetWidth/2;
 			var oT = ev2.clientY - img.offsetTop -main.offsetTop -38 - slider.offsetHeight/2;
 			var oMaxw = img1.offsetWidth - slider.offsetWidth;
 			var oMaxh = img1.offsetHeight - slider.offsetHeight;

 			oL = oL>oMaxw?oMaxw:(oL<0?0:oL);
 			oT = oT>oMaxh?oMaxh:(oT<0?0:oT);

 			var scale = big_img1.offsetHeight/img1.offsetHeight;

 			slider.style.left = oL + 'px';
 			slider.style.top = oT + 'px';
 			big_img1.style.left = -oL*scale + 'px';
 			big_img1.style.top = -oT*scale + 'px';
 		}
	}
}

img.onmouseout = function(){
	slider.style.display = 'none';
	detail.removeChild(big_img);
	var big_images=big_img.childNodes;
	for(var i=0;i<big_images.length;i++)
		big_img.removeChild(big_images[i]);
	for(var i=0;i<big_images.length;i++)
		big_img.removeChild(big_images[i]);
 }

var ml150 = document.getElementById("ml150");
var ml200 = document.getElementById("ml200");
var duigou1 = document.getElementById("duigou1");
var duigou2 = document.getElementById("duigou2");
var what = document.getElementById("what");

ml150.onclick = function(){
	duigou2.style['display'] = 'none';
	ml200.style['border'] = '0';
	duigou1.style['display'] = 'block';
	ml150.style['border'] = '1px solid #fe0d4a';
	what.innerHTML = '"150ml"';
}

ml200.onclick = function(){
	duigou1.style['display'] = 'none';
	ml150.style['border'] = '0';
	duigou2.style['display'] = 'block';
	ml200.style['border'] = '1px solid #fe0d4a';
	what.innerHTML = '"200ml"';
}


var overlay = document.getElementById("overlay");
var car = document.getElementById("car");
var bought = document.getElementById("bought");
var back = document.getElementById("back");
var back2 = document.getElementById("back2");
var backX = document.getElementById("backX");

car.onclick = function(){
	overlay.style['display']='block';
	bought.style['display']='block';
}

back.onclick = function(){
	overlay.style['display']='none';
	bought.style['display']='none';
}

back2.onclick = function(){
	overlay.style['display']='none';
	bought.style['display']='none';
}

backX.onclick = function(){
	overlay.style['display']='none';
	bought.style['display']='none';
}

var write = document.getElementById("write");
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");
var num=1;

minus.onmouseover = function(){
	if(num==1)
		minus.style['cursor'] = 'not-allowed';
	else
		minus.style['cursor'] = 'pointer';
}

plus.onmouseover = function(){
	if(num==5)
		plus.style['cursor'] = 'not-allowed';
	else
		plus.style['cursor'] = 'pointer';
}

minus.onclick = function(){
	num = write.value;
	if(num!=1){
		num--;
	}
	else{
		minus.style['cursor'] = 'not-allowed';
	}
	write.value =num;
}

plus.onclick = function(){
	num = write.value;
	if(num!=5)
		num++;
	else{
		plus.style['cursor'] = 'not-allowed';
	}
	write.value =num;
}