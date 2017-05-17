//视频切换显示
window.onload = function () {
    var videos = document.getElementsByTagName("video")
    var video = document.getElementsByClassName("videos")
    var spot = document.getElementById("spot");
    var lis = spot.children;
    var bgs = document.getElementById("bg");
    bgs.style.height = video[0].offsetHeight + "px";
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            for (var j = 0; j < lis.length; j++) {
                var num = this.index;
                videos[j].style.display = "none";
                lis[j].style.backgroundColor = "";
            }
            videos[num].style.display = "block";
            this.style.backgroundColor = "white";
        }
    }
//解决方案 鼠标经过事件
    var prog = document.getElementById("g_prog");
    var li = prog.children;
    var arrB = [];
    var arrImg = [];
    for (var i = 0; i < li.length; i++) {
        arrB[arrB.length] = li[i].children[0];
        arrImg[arrImg.length] = li[i].children[1];
    }

    for (var a = 0; a < li.length; a++) {
        li[a].index = a;
        var timer1 = null;
        var leader = 0;
        li[a].onmouseenter = function () {
            var num = this.index;
            clearInterval(timer1);
            timer1 = setInterval(function () {
                //var leader = arrImg[num].transform;
                var step = Math.ceil((720 - leader) / 10);
                leader = leader + step;
                // arrImg[num].style.transform = "rotateY(" + leader + "deg)";
                if (leader === 720) {
                    clearTimeout(timer1);
                    leader = 0;
                }
            }, 15);
            animate(arrB[num], {
                "width": 500,
                "height": 500,
                "top": -100,
                "left": -100,
                "opacity": 0,
                "borderRadius": 250
            });
        }
        li[a].onmouseleave = function () {
            var num = this.index;
            arrB[num].style.opacity = 1;
            arrB[num].style.width = 98 + "px";
            arrB[num].style.height = 98 + "px";
            arrB[num].style.top = 66 + "px";
            arrB[num].style.left = 90 + "px";
            arrB[num].style.borderRadius = 50 + "px";
            arrImg[num].style.transform = "rotateY(" + 0 + "deg)"
            //animate(arrB[num], {"width": 98, "height": 98, "top": 66, "left": 90, "borderRadius": 50});
        }
    }

//开始固定页面
    var images = document.getElementById("images");
    var body = document.getElementById("bodys");
    setTimeout(function () {
        images.style.display = "none";
        body.className = "";
        //window.scrollTo(0, 100);
    }, 3000);

//循环添加背景图
    var ser = document.getElementById("g_ser");
    var liss = ser.children;
    for (var i = 0; i < liss.length; i++) {
        var img = document.createElement("img");
        liss[i].appendChild(img);
        img.src = "image/service/" + (i + 1) + ".png";
    }

//服务区 图标出现效果
    var imgs = [];
    for (var i = 0; i < liss.length; i++) {
        imgs[imgs.length] = liss[i].children[0];
    }
    var progUl = document.getElementById("g_prog")
    var serUl = document.getElementById("g_ser")
    var progs = document.getElementById("g_progs")
    window.onscroll = function () {
        var clientY = window.innerHeight + window.pageYOffset;
        var progTop = progUl.offsetTop + 100;
        var imgTop = serUl.offsetTop + 100;
        if (clientY > progTop) {
            animates(progs, {"paddingTop": 0, "opacity": 1});
        }
        if (clientY > imgTop) {
            for (var i = 0; i < imgs.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        animate(imgs[i], {"width": 188, "height": 103, "opacity": 1});
                    }, 100 * i);
                })(i);
            }
        }
    }
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
        imgs[i].onmouseover = function () {
            var num = this.index;
            //imgs[num].style.cursor = "pointer"; //鼠标经过变手
            animate(imgs[num], {"width": 230, "height": 126, "top": -12, "left": -18});
        }
    }
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].index = i;
        imgs[i].onmouseout = function () {
            var num = this.index;
            animate(imgs[num], {"width": 188, "height": 103, "top": 0, "left": 0});
        }
    }

//224*122
    /**获取 任意对象 的 任意属性
     * getStyle(demo,"margin")*/
    function getStyle(obj, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(obj, null)[attr];
        } else {
            return obj.currentStyle[attr];
        }
    }

    /**把 任意对象 的 任意数值属性 改变为 任意的目标值
     * animate(demo, {"height": 400, "width": 400, "left": 400, "top": 400});*/
    function animate(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//opacity要特殊处理
                    //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                    //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 15);
    }

    function animates(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;
            for (var k in json) {
                if (k === "opacity") {//opacity要特殊处理
                    //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                    //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                    var leader = getStyle(obj, k) * 100;
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader / 100;//opacity没有单位
                } else if (k === "zIndex") {
                    obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
                } else {
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    leader = leader + step;
                    obj.style[k] = leader + "px";
                }
                if (leader != target) {
                    flag = false;
                }
            }
            if (flag) {
                clearInterval(obj.timer);
                if (fn) {
                    fn();
                }
            }
        }, 50);
    }


    /**把 任意对象 的 任意数值属性 改变为 任意的目标值
     * animate1(demo, "borderRadius", 40);*/
    function animate1(obj, attr, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            //var leader = obj.offsetLeft;
            //获取任意数值属性的当前值
            var leader = parseInt(getStyle(obj, attr)) || 0;//如果是NaN 给个默认值0
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[attr] = leader + "px";
            if (leader === target) {
                clearInterval(obj.timer);
            }
        }, 15);
    }
}