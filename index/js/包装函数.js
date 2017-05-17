/**scroll函数
 * scroll().top*/
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}

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
 * animate(demo, "borderRadius", 40);*/
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
//全部属性都到达目标值才能清空
