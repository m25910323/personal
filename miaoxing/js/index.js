window.onload=function(){	
	var h1=document.getElementsByTagName('h1')[0];
	var hdiv=h1.getElementsByTagName('div');
	var timer3=null;
	var hspan=h1.getElementsByTagName('span');
	
	for(i=0;i<5;i++){
		for(j=0;j<18;j++){
			var ap=hdiv[i].getElementsByTagName('span')[j];
			ap.style.backgroundPositionX=-15*j+'px';
			ap.style.backgroundPositionY=-15*i+'px';
			ap.style.transition=".5s";
			ap.onmouseover=function(){
				var tx=Math.random()*300-150;
				var ty=Math.random()*80-40;
				var tz=Math.random()*80-40;
				this.style.transform="translateX("+tx+"px) translateY("+ty+"px) translateZ("+tz+"px) rotateX("+tx+"deg) rotateY("+ty+"deg) rotate("+tz+"deg)";
			}
			ap.addEventListener('transitionend',function(){
				this.style.transform="translate3d(0px,0px,0px)";
			})
		}
		
	}
	timer3=setInterval(function(){
		for(i=0;i<hspan.length;i++){
			var tx=Math.random()*300-150;
			var ty=Math.random()*80-40;
			var tz=Math.random()*80-40;
			hspan[i].style.transform="translateX("+tx+"px) translateY("+ty+"px) translateZ("+tz+"px) rotateX("+tx+"deg) rotateY("+ty+"deg) rotate("+tz+"deg)";
			hspan[i].addEventListener('transitionend',function(){
				this.style.transform="translate3d(0px,0px,0px)";
			});
		}
	},3000)
	
	var txt=document.getElementsByClassName('txt')[0];
	var contact=document.getElementById('contact');
	var div=contact.getElementsByTagName('div');
	var timer=null;
	//折纸下拉菜单
	txt.onmouseover=function(){
		var i=0;
		clearInterval(timer);
		timer=setInterval(function(){
			div[i].className="open";
			i++;
			if(i==div.length){
				clearInterval(timer);
			}
		},100);
	}
	txt.onmouseout=function(){
		var i=div.length-1;
		clearInterval(timer);
		timer=setInterval(function(){
			div[i].className="";
			i--;
			if(i<0){
				clearInterval(timer);
			}
		},100);
	}
	
	
	
//	var div1=document.getElementById('div1');								//时光轴
//	var div2=document.getElementById('div2');
//	var div3=document.getElementById('div3');
//	var div4=document.getElementById('div4');
//	var timer=null;
//	var point_num=0;
//	var points=document.getElementsByClassName('points');
//	div1.addEventListener('webkitAnimationEnd',function(){
//		div2.className="div2";
//	})
//	div2.addEventListener('webkitAnimationEnd',function(){
//		div3.className="div3";
//	})
//	div3.addEventListener('webkitAnimationEnd',function(){
//		div4.className="div4";
//	})
//	div4.addEventListener('webkitAnimationEnd',function(){
//	})
//	points[0].style.opacity=1;
	
	
	var nav=document.getElementById('nav');
	
	var items=document.getElementById('items');
	var items_ul=items.getElementsByTagName('ul')[0];
	var items_scroll=document.getElementById('scroll');
	for(i=0;i<data.length;i++){
//		console.log(i)
		var items_li=document.createElement('li');
		var div_left=document.createElement('div');
		div_left.setAttribute('class','item_left');
		var div_right=document.createElement('div');
		div_right.setAttribute('class','item_right');
		var right_bg=document.createElement('div');
		var right_a=document.createElement('a');
		right_bg.className="right_bg";
		right_bg.style.background="url('"+data[i].src+"') no-repeat";
		right_bg.style.backgroundSize="cover";
		for(var attr in data[i]){
//			console.log(attr)
			if(attr!="src"&&attr!="link"){
				var left_p=document.createElement('p');
				left_p.innerHTML=data[i][attr];
				div_left.appendChild(left_p);
			}
		}
		right_a.href=data[i].link;
		right_a.target="_blank";
		right_a.innerHTML="进入Github";
		div_right.appendChild(right_bg);
		div_right.appendChild(right_a);
		items_li.appendChild(div_left);
		items_li.appendChild(div_right);
		items_ul.appendChild(items_li);
		items_li.onmouseover=function(){
			this.style.boxShadow="0px 0px 5px 3px #fff";
			this.style.transform="translate(8px)";
		}
		items_li.onmouseout=function(){
			this.style.boxShadow="0px 0px 5px #fff";
			this.style.transform="translate(0px)";
		}
	}
	var items_ul_height=parseFloat(getComputedStyle(items_ul).height);
	var items_height=parseFloat(getComputedStyle(items).height);
	var items_scroll_max=items_height-20;
	var scroll_height=items_height*items_scroll_max/items_ul_height;
	var flag;
	var T;
	items_scroll.style.height=scroll_height+'px';
	items.onmousewheel=function(e){
		if(e.wheelDelta<0){
			flag=-1;
		}else{
			flag=1;
		}
		T=items_ul.offsetTop-300*(-flag);
		if(T>0){
			T=0;
		}
		if(T<items_height-items_ul.offsetHeight){
			T=items_height-items_ul.offsetHeight;
		}
		items_ul.style.top=T+'px';
		items_scroll.style.top =- T*items_scroll_max/items_ul_height +10+ 'px';
	}
	var timer4=null;
	var show_hid=document.getElementById('show_hid');
	show_hid.onmouseover=function(){
		items.style.transform="translate(350px)";
		this.style.transform="rotate(540deg)";
		this.style.opacity=0;
		items_scroll.style.opacity=1;
	}
	items.onmouseleave=function(){
		items.style.transform="translate(0px)";
		show_hid.style.transform="rotate(0deg)";
		show_hid.style.opacity=1;
		items_scroll.style.opacity=0;
	}
	items_scroll.onmousedown=function(e){
//		console.log(this.offsetTop);
		var disy=e.clientY-this.offsetTop;
		this.style.transition="0s";
		document.onmousemove=function(e){
			var T=e.clientY-disy;
//			console.log(T);
			if(T<10){
				T=10;
			}
			if(T>items_height-items_scroll.offsetHeight-10){
				T=items_height-items_scroll.offsetHeight-10;
			}
			items_ul.style.transition="0s";
			items_ul.style.top=-T*items_ul_height/items_scroll_max+'px';
			items_scroll.style.top=T+'px';
		}
		document.onmouseup=function(e){
			items_ul.style.transition="1s";
			items_scroll.style.transition="1s";
			document.onmousemove=null;
		}
	}
	var small_item=document.getElementById('items_small');
	var small_ul=small_item.getElementsByTagName('ul')[0];
	var select=document.getElementById('select');
	var small_span=select.getElementsByTagName('span');
	for(i=0;i<data1.length;i++){
		small_ul.style.width=230*i+'px';
		var small_li=document.createElement('li');
		var small_div=document.createElement('div');
		var small_p=document.createElement('p');
		small_div.style.background="url("+data1[i].src+")";
		small_div.style.backgroundSize="cover";
		small_p.innerHTML=data1[i].name;
		small_li.appendChild(small_div);
		small_li.appendChild(small_p);
		small_ul.appendChild(small_li);
	}
	small_ul.onmousedown=function(e){
		var ulx=e.clientX-this.offsetLeft;
		document.onmousemove=function(e){
			var l=e.clientX-ulx;
			if(l>0){
				l=0;
			}
			if(l<small_item.offsetWidth-small_ul.offsetWidth){
				l=small_item.offsetWidth-small_ul.offsetWidth;
			}
			small_ul.style.left=l+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
		}
	}
	small_span[0].onclick=function(){
		var ulx=small_ul.offsetLeft;
		var l=ulx+window.innerWidth;
		if(l>0){
			l=0;
		}
		small_ul.style.left=l+'px';
	}
	small_span[2].onclick=function(){
		var ulx=small_ul.offsetLeft;
		var l=ulx-window.innerWidth;
		if(l<small_item.offsetWidth-small_ul.offsetWidth){
			l=small_item.offsetWidth-small_ul.offsetWidth;
		}
		small_ul.style.left=l+'px';
	}
	small_span[1].onclick=function(){
		
	}
	
	
	var card=document.getElementById('card');
	var personal=document.getElementById('personal');
	personal.index=0;
	var tips=document.getElementById('tips');
	var shadow1=document.getElementsByClassName('shadow1')[0];
	var shadow2=document.getElementsByClassName('shadow2')[0];
	var timer5=null;
	var touxiang=document.getElementById('touxiang');
	var nav_arr=['个人名片','案例笔记','技能掌握','联系方式'];
	card.onoff=false;
	card.onmouseover=function(){
		touxiang.className="touxiang_move";
		if(!this.onoff){
			this.onoff=true;
			timer5=setTimeout(function(){
				for(i=0;i<4;i++){
					var nav_li=document.createElement('li');
					var nav_div=document.createElement('div');
					var span1=document.createElement('span');
					var span2=document.createElement('span');
					span1.innerHTML=nav_arr[i];
					span2.innerHTML=nav_arr[i];
					nav_div.appendChild(span1);
					nav_div.appendChild(span2);
					nav_li.appendChild(nav_div);
					nav.appendChild(nav_li);
					nav_div.onmouseover=function(){
						this.style.transform="rotateX(-90deg)";
					}
					nav_div.onmouseout=function(){
						this.style.transform="rotateX(0deg)";
					}
				}
				nav=document.getElementById('nav');
//				console.log(nav.children)
				nav.children[1].onclick=function(e){
					items_small.style.transform="translateY(-280px)";
					e.cancelBubble=true;
				}
				nav.children[0].onclick=function(e){
					personal.index=1;
					personal.className='rotate';
					e.cancelBubble=true;
					var card_left=card.offsetLeft-225;
					var card_top=card.offsetTop;
					var personal_left=personal.offsetLeft;
					var personal_top=personal.offsetTop;
					touxiang.style.width="150px";
					touxiang.style.height="150px";
					touxiang.style.backgroundSize="50%";
					touxiang.style.transform="translate("+(personal_left-card_left)+"px,"+(personal_top-card_top)+"px)";
				}
				nav.children[2].onclick=function(e){
					wrap.style.transform="translateY(0px)";
					nav.style.display="none";
					card.style.transform='translateX(0px)';
					e.cancelBubble=true;
				}
				nav.children[3].onclick=function(e){
					contact.style.display="block";
					e.cancelBubble=true;
				}
			},3000);
		}
		
	}
	personal.addEventListener('animationend',function(){
		
		if(this.className=="rotate"){
			tips.style.opacity=1;
			shadow1.style.display='block';
			shadow2.style.display='block';
		}else{
			tips.style.opacity=0;
			shadow1.style.display='none';
			shadow2.style.display='none';
		}
		
	})
	touxiang.addEventListener('webkitAnimationEnd',function(){
		card.style.transform="translate(-225px)";
	})
	card.addEventListener("webkitAnimationEnd",function(){
		nav.style.opacity=1;
	})
	card.onmousedown=function(e){
		var disx=e.clientX;
		var disy=e.clientY;
		var tem;
		card.className="";
//		console.log(this.offsetLeft)
		document.onmousemove=function(e){
			var L=e.clientX-disx-225;
			var T=e.clientY-disy;
			card.style.transform="translate("+L+"px,"+T+"px)";
			card.style.transition="none";
			tem=L;
		}
		document.onmouseup=function(e){
//			card.className="card_move";
			card.style.transition="1s";
			card.style.transform="translate(-225px,0px)";
			document.onmousemove=null;
			var disx2=e.clientX;
			var disy2=e.clientY;
			if(disx2==disx&&disy==disy2){
				if(audio.onoff){
					audio.play();
					audio.onoff=false;
				}else{
					audio.pause();
					audio.onoff=true;
				}
			}
		}
	}
	
	
	document.onclick=function(){
		console.log(1);
		items_small.style.transform="translateY(0px)";
		contact.style.display="none";
		tips.style.opacity=0;
		if(personal.index==1){
			personal.className='rotate2';
		}
		shadow1.style.display='none';
		shadow2.style.display='none';
		touxiang.style.transform="translate(0px,0px)";
		touxiang.style.width="100px";
		touxiang.style.height="100px";
		touxiang.style.backgroundSize="";
		nav.style.display="block";
		wrap.style.transform="translateY(-900px)";
		card.style.transform="translateX(-225px)";
	}
	
	var sel=document.getElementById('select');
	var sel_span=sel.getElementsByTagName('span');
	var items_small=document.getElementById('items_small');
	items_small.onclick=function(e){
		e.cancelBubble=true;
	}
	
	
	document.onmousedown=function(e){
		return false;
	}
	
	
	var audio=document.getElementsByTagName('audio')[0];
	audio.onoff=false;
	console.dir(audio);
	var cv=document.getElementById('cv');
	var ctx=cv.getContext('2d');
	var gradient=ctx.createLinearGradient(0,0,100,0);
	gradient.addColorStop("0","rgba(255,255,255,0.5)");
	gradient.addColorStop("0.5","#f76e5e");
	gradient.addColorStop("1.0","rgba(255,255,255,0.5)");
	ctx.fillStyle='rgba(255,255,255,0)';
	ctx.strokeStyle=gradient;
	ctx.lineWidth=5;
	ctx.shadowColor="#F76E5E";
	ctx.shadowBlur=5;
	var t=0;
	var timer6=null;
	timer6=setInterval(function(){
		ctx.clearRect(0,0,100,100);
		ctx.beginPath();
		ctx.arc(50,50,47,-Math.PI/2,Math.PI*2/audio.duration*audio.currentTime-Math.PI/2);
		ctx.stroke();
	},1000);
	
	
	var rows=Math.ceil(info.length/25);
	var personal_ul=personal.getElementsByTagName('ul')[0];
	var arr_font=[];
	for(i=0;i<rows;i++){
		var li=document.createElement('li');
		var chai=info.slice(i*25,(i+1)*25);
		arr_font.push(chai);
		for(j=0;j<25;j++){
			var span=document.createElement('span');
			span.innerHTML=arr_font[i][j]||"";
			li.appendChild(span);
		}
		personal_ul.appendChild(li);
	}
	
	for(i=0;i<rows;i++){
		var info_li=personal_ul.getElementsByTagName('li')[i];
		var info_span=info_li.getElementsByTagName('span');
		for(var j=0;j<info_span.length;j++){
			(function(info_span,num2){
				info_span[num2].onmouseover=function(e){
					oY=e.clientY;
				}
				info_span[num2].onmousemove=function(e){
					var t=e.clientY-oY;
					var flag=t>0?1:-1;
					console.log(t)
					if(t<15&&t>-15){
//						this.style.top=t+'px';
						for(var j=0;j<info_span.length;j++){
							var st=t-flag*Math.abs(num2-j);
							if(flag==1&&st<0){
								st=0;
							}
							if(flag==-1&&st>0){
								st=0;
							}
							info_span[j].style.top=st+"px";
							
						}
					}
				}
				info_span[num2].onmouseout=function(){
					for(var j=0;j<info_span.length;j++)
					{
						mTween(info_span[j], "top", 0, 500, "elasticOut")
					}
				}
			})(info_span,j);
		}
	}
	
	
	var dot=document.getElementById('dot');
	var line=document.getElementById('line');
	var wrap=document.getElementById('wrap');
	var skill=document.getElementById('skill');
	var svg=document.getElementById('svg');
	var WW=wrap.offsetWidth;
	var WH=wrap.offsetHeight;
	var l = skill.getBoundingClientRect().left +skill.offsetWidth/2 - main.offsetParent.offsetLeft;
	var t = skill.getBoundingClientRect().top +skill.offsetHeight/2 - main.offsetParent.offsetTop;
	var iStartX =main.offsetParent.offsetLeft;
	var iStartY =main.offsetParent.offsetTop;
	var R=270;
	var per=Math.PI*2/180;
	for(i=0;i<180;i++){
		var span_dot=document.createElement('span');
		var cx=R*Math.sin(per*i);
		var cy=R*Math.cos(per*i);
		span_dot.style.top=cy+WH/2+'px';
		span_dot.style.left=cx+WW/2+"px";
		dot.appendChild(span_dot);
	}
	for(i=0;i<12;i++){
		for(var j=0;j<50;j++){
			var span_line=document.createElement('span');
			var lx=j*6*Math.cos(30*i*Math.PI/180);
			var ly=j*6*Math.sin(30*i*Math.PI/180);
			span_line.style.top=ly+WH/2+'px';
			span_line.style.left=lx+WW/2+"px";
			line.appendChild(span_line);
		}
	}
	
	wrap.onmouseenter = function (){
		document.onmousemove = function (e){
			var y = (t - (e.clientY-iStartY))*0.1+80;
			var x = (l - (e.clientX-iStartX))*0.1;
			console.log(x,y);
			if( y>20 ){
				y=20;	
			}else if( y<-20 ){
				y=-20;	
			}
			if( x>20 ){
				x=20;	
			}else if( x<-20 ){
				x=-20;	
			}
			main.style.transform = 'rotateX('+y+'deg) rotateY('+x+'deg)';
		}
	}
	wrap.onmouseleave = function (){
		main.style.transform = 'rotateX(0deg) rotateY(0deg)';
		document.onmousemove = null;
	}
	create_data(child_data);
	create_data(child_data1);
	create_data(child_data2);
	create_data(child_data3);
	create_data(child_data4);
	create_data(child_data5);
	create_data(child_data6);
	create_data(child_data7);
	function create_data( data ){
		for(var i=0;i<data.length;i++ ){
			var oG = createTag('g',{style:'cursor:pointer'});
			if(data[i].text){
				var oText = createTag('text',{x:data[i].text.x,y:data[i].text.y,fill:'rgba(255,255,255,0.6)','font-size':14,transform:'rotate('+data[i].text.rotate+','+data[i].text.x+','+data[i].text.y+')'});
				oText.innerHTML = data[i].text.cont;
				oG.appendChild(oText);
			}
			if(data[i+1]&&data[i+1].circle.line!='none' ){
				oG.appendChild( createTag('line',{x1:data[i].circle.x,y1:data[i].circle.y,x2:data[i+1].circle.x,y2:data[i+1].circle.y,'stroke':'rgba(205,228,232,0.6)','stroke-width':'2'}) );	
			}
			if(data[i].circle&&data[i].circle.dot!=='none' ){
				oG.appendChild( createTag('circle',{cx:data[i].circle.x,cy:data[i].circle.y,r:data[i].circle.size,'fill':'rgba(205,228,232,1)','stroke':'rgba(227,158,158,1)','stroke-width':'3'}) );	
			}
			svg.appendChild(oG);
		}
	}
	function createTag( tag,objAttr ){
		var oTag = document.createElementNS('http://www.w3.org/2000/svg',tag);
		for( var attr in objAttr ){
			oTag.setAttribute( attr,objAttr[attr] );	
		}
		return oTag;
	}
}

