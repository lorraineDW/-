/**
 * Created by Administrator on 2017-2-12.
 */
//获取 对象的 计算后的样式
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//getPageY()



//延时定时器；
function moveFDmoveMT(){
    moveFaceDown();
    setTimeout(function() {
        moveMakeTop();
    },700);
}
//make 下去 face上来
function moveMDmoveFT(){
    moveMakeTurnDown();
    setTimeout(function() {
        moveFaceTurnTop();
    },700);
}
function moveFaceTurnTop(){
    setTimeout(function(){
        animateattr(ulfacedivs[0],{"top":0});
    },200);
    setTimeout(function(){
        animateattr(ulfacedivs[1],{"top":0});
    },300);
    setTimeout(function(){
        animateattr(ulfacedivs[2],{"top":0});
    },400);
    setTimeout(function(){
        animateattr(ulfacedivs[3],{"top":0});
    },500);
    setTimeout(function() {
        animateattr(ulfacedivs[4], {"top": 0});
    },600);
}
function moveFaceDown(){
    setTimeout(function(){
        animateattr(ulfacedivs[0],{"top":480});
    },200);
    setTimeout(function(){
        animateattr(ulfacedivs[1],{"top":480});
    },300);
    setTimeout(function(){
        animateattr(ulfacedivs[2],{"top":480});
    },400);
    setTimeout(function(){
        animateattr(ulfacedivs[3],{"top":480});
    },500);
    setTimeout(function() {
        animateattr(ulfacedivs[4], {"top": 480});
    },600);
}
function moveMakeTurnDown(){
    setTimeout(function(){
        animateattr(ulmakedivs[0],{"top":0});
    },200);
    setTimeout(function(){
        animateattr(ulmakedivs[1],{"top":0});
    },300);
    setTimeout(function(){
        animateattr(ulmakedivs[2],{"top":0});
    },400);
    setTimeout(function(){
        animateattr(ulmakedivs[3],{"top":0});
    },500);
    setTimeout(function(){
        animateattr(ulmakedivs[4],{"top":0});
    },600);
}
function moveMakeTop(){
    setTimeout(function(){
        animateattr(ulmakedivs[0],{"top":-480});
    },200);
    setTimeout(function(){
        animateattr(ulmakedivs[1],{"top":-480});
    },300);
    setTimeout(function(){
        animateattr(ulmakedivs[2],{"top":-480});
    },400);
    setTimeout(function(){
        animateattr(ulmakedivs[3],{"top":-480});
    },500);
    setTimeout(function(){
        animateattr(ulmakedivs[4],{"top":-480});
    },600);
}
//把 任意对象 的 任意数值属性 改变为 任意的目标值
function animateattr(obj, json, fn) {
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
    },15);
}


//执行时间 比较慢的动画函数
function animateslow(obj, json, fn) {
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
                var step = (target - leader) / 9;
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
    },65);
}
//样式选择器的样式循环；
function styleloop(){
    for(var i=0;i<Explaintxtlis.length;i++){
        Explaintxtlis[i].className = "li0"+ a +"other";
        Instructionlis[i].className = "li0"+ a +"other";
    }
    Explaintxtlis[a].className = "li0" + a;
    Instructionlis[a].className = "li0" + a;
}

//  在obj上绑定事件    当前页面  渐渐  去目标页面高  的 功能；
//function Totarget(obj1,target){
//    clearInterval(obj1.timer);
//    obj1.timer = setInterval(function () {
//        var leader = window.pageYOffset;//当前页面被卷去的头部；
//        var step = (target - leader) / 10;//每一次执行动画移动的步数；
//        step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        leader = leader + step;
//        window.scrollTo(0, leader);
//        if (leader === target) {
//            clearInterval(obj1.timer);
//        }
//    }, 15);
//}



