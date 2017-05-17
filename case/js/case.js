/**
 * Created by d on 2017/2/10.
 */
window.onload = function () {
	var flag = true;
	var config = [
		{
			"width" : 200 ,
			"top" : 20 ,
			"left" : 200 ,
			"opacity" : 0.2 ,
			"zIndex" : 2
		} ,//0
		{
			"width" : 250 ,
			"top" : 70 ,
			"left" : 50 ,
			"opacity" : 0.7 ,
			"zIndex" : 3
		} ,//1
		{
			"width" : 300 ,
			"top" : 100 ,
			"left" : 400 ,
			"opacity" : 1 ,
			"zIndex" : 4
		} ,//2
		{
			"width" : 250 ,
			"top" : 70 ,
			"left" : 800 ,
			"opacity" : 0.7 ,
			"zIndex" : 3
		} ,//3
		{
			"width" : 200 ,
			"top" : 20 ,
			"left" : 700,
			"opacity" : 0.2 ,
			"zIndex" : 2
		}
	];
	var wrap = document.getElementById ( "navdw" );
	var slide = document.getElementById ( "slidedw" );
	var slideul = slide.children[ 0 ];
	var ullis = slideul.getElementsByTagName ( "img" );
	var arrow = document.getElementById ( "arrowdw" );
	var arrLeft = document.getElementById ( "prevdw" );
	var arrRight = document.getElementById ( "nextdw" );
	var anli_navdw = document.getElementById ( "anli_navdw" );
	var navdwul = anli_navdw.children[ 0 ];
	var navdwullis = navdwul.children;
	var contentdw = document.getElementById ( "anli_content" );
	var condivs = contentdw.children;
	var anli_video = document.getElementsByClassName ( "anli_video" );
	var financedw = document.getElementById ( "financedw" );
	var securitydw = document.getElementById ( "securitydw" );
	var internetdw = document.getElementById ( "internetdw" );
	var businessdw = document.getElementById ( "businessdw" );
	var othersdw = document.getElementById ( "othersdw" );
	var anli_img = document.getElementsByClassName ( "anli_img" );
	var anli_Bigimg = document.getElementsByClassName ( "anli_Bigimg" );
	var pic = 0;
	var square = 0;
	//箭头出现和隐藏
	wrap.onmouseover = function () {
		animate ( arrow , { "opacity" : 1 } );
	};
	wrap.onmouseout = function () {
		animate ( arrow , { "opacity" : 0 } );
	};
	//图片各就各位封装函数
	function assign () {
		for ( var i = 0 ; i < ullis.length ; i++ ) {
			animate ( ullis[ i ] , config[ i ] , function () {
				flag = true;
			} );
		}
	}
	assign ();
	//点击右箭头
	arrRight.onclick = function () {
		zhuanRt ();
	};
	//点击左箭头
	arrLeft.onclick = function () {
		zhuanLt ();
	};

	//导航控制内容
	var that = 0;
	for ( var i = 0 ; i < navdwullis.length ; i++ ) {
		navdwullis[ i ].index = i;
		navdwullis[ i ].onclick = function () {
			if ( this.index > that ) {
				var item = this.index - that;
				for ( var i = 0 ; i < item ; i++ ) {
					zhuanRt ();
				}
			} else if ( this.index < that ) {
				var item = that - this.index;
				for ( var i = 0 ; i < item ; i++ ) {
					zhuanLt ();
				}
			}
			that = this.index;
			console.log ( that );
		};
	};
	//页面刷新缓慢加载事件
	window.onscroll = function () {
		load ( financedw.children );
	}
	//小图片onmouseenter事件
	for ( var i = 0 ; i < anli_img.length ; i++ ) {
		anli_img[ i ].index = i;
		anli_img[ i ].onmouseenter = function () {
			var index = this.index;
			animate ( anli_img[ index ] , { "width" : 114 , "height" : 114 } );
		};
		anli_img[ i ].onmouseleave = function () {
			var index = this.index;
			animate ( anli_img[ index ] , { "width" : 94 , "height" : 94 } );
		};
	}
	//点击出现视频
	for ( var i = 0 ; i < anli_video.length ; i++ ) {
		anli_video[ i ].index = i;
		anli_video[ i ].onclick = function () {
			var index = this.index;
			var div = document.createElement ( "div" );
			div.className = "anli_dis";
			this.parentNode.appendChild ( div );
			var video = document.createElement ( "video" );
			video.controls = "controls";
			video.autoplay = "autoplay";
			video.width = "200";
			video.height = "200";
			div.appendChild ( video );
			var source = document.createElement ( "source" );
			source.src = "video/" + index + ".mp4";
			source.type = "video/mp4";
			video.appendChild ( source );
			var b = document.createElement ( "b" );
			b.className = "expb";
			b.innerHTML = "X";
			b.id = "expb";
			b.style.cursor = "pointer";
			div.appendChild ( b );
			//点击X关闭视频
			var closdw = document.getElementById ( "expb" );
			closdw.onclick = function () {
				this.parentNode.parentNode.removeChild ( this.parentNode );
			};
			document.onkeyup = function ( e ) {
				var e = e || window.event;
				if ( e.keyCode === 27 ) {
					closdw.parentNode.parentNode.removeChild ( closdw.parentNode );
				}
			}
		};
	}
	function load ( obj ){
		var clientHeight = window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth || 0;
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		var des = clientHeight + scrollTop;
		for ( var i = 0 ; i < obj.length ; i++ ) {
			var scrHeight = obj[ i ].offsetTop;
			if ( scrHeight < des ) {
				cartoon ( obj[ i ] , { "marginTop" : 0 , "opacity" : 1 });
			}
		}
	}
	function zhuanRt () {
		config.push ( config.shift () );
		if ( pic = ullis.length - 1 ) {
			animate ( ullis[ pic ] , config[ pic ] , function () {} );
			pic = 0;
		}
		pic++;
		assign ();
		if ( square < navdwullis.length - 1 ) {
			square++;
		}
		else {
			square = 0;
		}
		for ( var i = 0 ; i < navdwullis.length ; i++ ) {
			navdwullis[ i ].className = "fl";
			replaceClassName ( condivs[ i ] , "current" , "contdw" );
		}
		navdwullis[ square ].className = "navdwcurrent fl";
		replaceClassName ( condivs[ square ] , "contdw" , "current" );
		that = pic = square;
		var alevdw = condivs[ that ].children;
		window.onscroll = function () {
			load ( alevdw );
		}
	}
	function zhuanLt () {
		config.unshift ( config.pop () );
		if ( pic = 0 ) {
			animate ( ullis[ pic ] , config[ pic ] , function () {} );
			pic = ullis.length - 1;
		}
		pic--;
		assign ();
		if ( square > 0 ) {
			square--;
		}
		else {
			square = navdwullis.length - 1;
		}
		for ( var i = 0 ; i < navdwullis.length ; i++ ) {
			navdwullis[ i ].className = "fl";
			replaceClassName ( condivs[ i ] , "current" , "contdw" );
		}
		navdwullis[ square ].className = "navdwcurrent fl";
		replaceClassName ( condivs[ square ] , "contdw" , "current" );
		that = pic = square;
		var alevdw = condivs[ that ].children;
		window.onscroll = function () {
			load ( alevdw );
		}
	}
	function animate ( obj , json , fn ) {
		clearInterval ( obj.timer );
		obj.timer = setInterval ( function () {
			var flag = true;
			for ( var k in json ) {
				if ( k === "opacity" ) {
					var leader = getStyle ( obj , k ) * 100;
					var target = json[ k ] * 100;
					var step = (target - leader) / 10;
					step = step > 0 ? Math.ceil ( step ) : Math.floor ( step );
					leader = leader + step;
					obj.style[ k ] = leader / 100;
				} else if ( k === "zIndex" ) {
					obj.style.zIndex = json[ k ];
				} else if ( k === "transform" ) {
					obj.style.transform = "rotateY(" + json[ k ] + "deg)";
				} else {
					var leader = parseInt ( getStyle ( obj , k ) ) || 0;
					var target = json[ k ];
					var step = (target - leader) / 10;
					step = step > 0 ? Math.ceil ( step ) : Math.floor ( step );
					leader = leader + step;
					obj.style[ k ] = leader + "px";
				}
				if ( leader != target ) {
					flag = false;
				}
			}
			if ( flag ) {
				clearInterval ( obj.timer );
				if ( fn ) {
					fn ();
				}
			}
		} , 15 );
	}
	function cartoon ( obj , json , fn ) {
		clearInterval ( obj.timer );
		obj.timer = setInterval ( function () {
			var flag = true;
			for ( var k in json ) {
				if ( k === "opacity" ) {
					var leader = getStyle ( obj , k ) * 100;
					var target = json[ k ] * 100;
					var step = (target - leader) / 5;
					step = step > 0 ? Math.ceil ( step ) : Math.floor ( step );
					leader = leader + step;
					obj.style[ k ] = leader / 100;
				} else if ( k === "zIndex" ) {
					obj.style.zIndex = json[ k ];
				} else {
					var leader = parseInt ( getStyle ( obj , k ) ) || 0;
					var target = json[ k ];
					var step = (target - leader) / 10;
					step = step > 0 ? Math.ceil ( step ) : Math.floor ( step );
					leader = leader + step;
					obj.style[ k ] = leader + "px";
				}
				if ( leader != target ) {
					flag = false;
				}
			}
			if ( flag ) {
				clearInterval ( obj.timer );
				if ( fn ) {
					fn ();
				}
			}
		} , 60 );
	}
	function getStyle ( obj , attr ) {
		if ( window.getComputedStyle ) {
			return window.getComputedStyle ( obj , null )[ attr ];
		} else {
			return obj.currentStyle[ attr ];
		}
	}
	function replaceClassName ( element , oldStr , newStr ) {
		var classNa = element.className;
		var arr = classNa.split ( " " );
		for ( var i = 0 ; i < arr.length ; i++ ) {
			if ( arr[ i ] == oldStr ) {
				arr[ i ] = newStr;
			}
		}
		var newArr = arr.join ( " " );
		return element.className = newArr;
	}
}