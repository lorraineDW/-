/**
 * Created by Administrator on 2017-2-12.
 */
window.onload = function(){
    var olInstr = document.getElementById("Instruction");
    var olInstrlis = olInstr.getElementsByTagName("li");
    var ul = document.getElementsByTagName("ul")[1];
    var ullis =ul.getElementsByTagName("li");
    var olTxt = document.getElementById("Explaintxt");
    var olTxtlis = olTxt.getElementsByTagName("li");
    var fixbox = document.getElementById("fixbox");
    var timer01 = null; //点击 olli 使得ulli 到一个位置；
    var timer02 = null;//点击 文字的某一列 页面移动到一个位置；
    //第一个逻辑 ：给他们占位置 后来需要取消；
    //给每个页面 不同的盒子 先给他们 占位置；


    //2 ，鼠标点击 文字解释栏的  圆点 触发滚动事件；
    for(var i=0;i<olInstrlis.length;i++){
        olInstrlis[i].index  = i;
        //1：鼠标 经过 Instruction ol[i] 时 对应的 ul 显示相应的 ul[i];
        olInstrlis[i].onclick = function(){
            clearInterval(timer01);
            var target = ullis[this.index].offsetTop;
            timer01 = setInterval(function () {
                var leader = window.pageYOffset;//当前页面被卷去的头部；
                var step = (target - leader) / 10;//每一次执行动画移动的步数；
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === target) {
                    clearInterval(timer01);
                }
            }, 15);
        }
        olInstrlis[i].onmouseenter = function(){
            olTxt.style.display = "block";
            animateattr(olTxt,{"opacity":"1"});
        }
    }
    ////鼠标经过 instruction 时候 解释文本显示；离开 fixbox 盒子时消失；
    //？？？？？

    //切换s

    // window.onscroll = function(){
    //    console.log(window.pageYOffset);
    // }
    // follow.onclick = function(){
    //    window.scrollTo(0,key.offsetTop);
    //    console.log(window.pageYOffset);
    //    console.log(key.offsetTop);
    // }
    // /*key.offsetTop
    // window.scrollTo()
    // window.pageYOffset > 0 && window.pageYOffset < 0*/
    // for(var j=0;j<ullis.length;j++){
    
    // }
    // 切换e





    //怎么因为 两个盒子分离了所以 一离开
    //鼠标经过 instruction explain 文档显示 离开 fix盒子 oltxt 不显示；




    //点击 文字的某一列 页面移动到一个位置；
    for(var i=0;i<olTxtlis.length;i++){
        olTxtlis[i].index  = i;
        //1：鼠标 经过 Instruction ol[i] 时 对应的 ul 显示相应的 ul[i];
        olTxtlis[i].onclick = function(){
            clearInterval(timer01);
            var target = ullis[this.index].offsetTop;
            console.log(target);
            timer01 = setInterval(function () {
                var leader = window.pageYOffset;//当前页面被卷去的头部；
                var step = (target - leader) / 10;//每一次执行动画移动的步数；
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === target) {
                    clearInterval(timer01);
                }
            }, 15);
        }
    }
    fixbox.onmouseover = function(){
        animateattr(olTxt,{"opacity":"1"},function(){
            olTxt.style.display = "block";
        });
    }
    fixbox.onmouseleave = function(){
        animateattr(olTxt,{"opacity":"0"},function(){
            olTxt.style.display = "none";
        });
    }
    //当 pageY = ul页面属于的值  的时候 盒子慢慢显示；
    //ID= follow 的页面的时候 ullis[this.index].offsetTop  的时候
    //滚动事件发生时

    var before2 = document.getElementById("before2");
    var before3 = document.getElementById("before3");
    var before4 = document.getElementById("before4");
    var before5 = document.getElementById("before5");
    var before6 = document.getElementById("before6");
    var before7 = document.getElementById("before7");
    var hei = window.innerHeight;
    //当 滚动事件发生  盒子慢慢显示
    var l_section0 = document.getElementById("l_section0");
    var l_section1 = document.getElementById("l_section1");
    var l_section2 = document.getElementById("l_section2");
    var l_section3 = document.getElementById("l_section3");
    var l_section4 = document.getElementById("l_section4");
    var l_section5 = document.getElementById("l_section5");
    var l_section6 = document.getElementById("l_section6");
    var l_section7 = document.getElementById("l_section7");
    var l_section8 = document.getElementById("l_section8");
    var dangqian = window.pageYOffset;
    var time = null;
    var aLi = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
    var tz = l_section2.offsetHeight;
    var lso = tz * aLi.length;
    console.log('lso'+lso);
    var flag = true;
    if(hei === hei){
                animateslow(before2,{
                    "width":676
                })
            }
    document.onmousewheel = function (e) {
        if(flag){
            flag = false;
            var e = e || window.event;
            var we = e.wheelDelta;
            if (we > 0) {//向上
                var targets = dangqian - tz;
                if (targets <= 0) {
                    targets = 0;
                }
                slither(targets, 0, function () {
                    flag = true;
                });
                dangqian = targets;
            }
            if (we < 0) {//向下
                var targets = dangqian + tz;
                if (targets >= l_section2.offsetHeight * aLi.length) {
                    targets = l_section2.offsetHeight * aLi.length;
                    flag = true;
                }
                slither(targets, 0, function () {
                    flag = true;
                });

                dangqian = targets;
            }
            console.log(window.pageYOffset);
            console.log(hei);
            if(window.pageYOffset === 0){
                animateslow(before3,{
                    "width":676
                })
            }
            if(window.pageYOffset === hei*1){
               animateslow(before4,{
                    "width":676
                }) 
            }
            if(window.pageYOffset === hei*2){
               animateslow(before5,{
                    "width":676
                }) 
            }
            if(window.pageYOffset === hei*3){
               animateslow(before6,{
                    "width":676
                }) 
            }
            if(window.pageYOffset === hei*4){
               animateslow(before7,{
                    "width":676
                }) 
            }

        }
        //封装滑动事件
        //封装滑动事件
        
    }
    function slither(target, X, fn) {//target=目标位置   X=X轴的值
            clearInterval(time);
            time = setInterval(function () {
                var leader = window.pageYOffset;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(X, leader);
                if (leader === target) {
                    clearInterval(time);
                    fn();
                }
            }, 15)
        }
    /*window.onscroll = function(){
        if((window.pageYOffset - dangqian) > 0){//判断向下滑动
            if(window.pageYOffset > l_section0.offsetTop + 20 && window.pageYOffset < l_section1.offsetTop - 20){
                slither(l_section1.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section1.offsetTop + 20 && window.pageYOffset < l_section2.offsetTop - 20){
                slither(l_section2.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section2.offsetTop + 20 && window.pageYOffset < l_section3.offsetTop - 20){
                slither(l_section3.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section3.offsetTop + 20 && window.pageYOffset < l_section4.offsetTop - 20){
                slither(l_section4.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section4.offsetTop + 20 && window.pageYOffset < l_section5.offsetTop - 20){
                slither(l_section5.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section5.offsetTop + 20 && window.pageYOffset < l_section6.offsetTop - 20){
                slither(l_section6.offsetTop,0);
                dangqian = window.pageYOffset;
            }
            else if(window.pageYOffset > l_section6.offsetTop + 20 && window.pageYOffset < l_section7.offsetTop - 20){
                slither(l_section7.offsetTop,0);
                dangqian = window.pageYOffset;
            }
            else if(window.pageYOffset > l_section7.offsetTop + 20 && window.pageYOffset < l_section8.offsetTop - 20){
                slither(l_section8.offsetTop,0);
                dangqian = window.pageYOffset;
            }
        }else{//判断向上滑动
            if(window.pageYOffset > l_section0.offsetTop + 20 && window.pageYOffset < l_section1.offsetTop - 20){
                slither(l_section0.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section1.offsetTop + 20 && window.pageYOffset < l_section2.offsetTop - 20){
                slither(l_section1.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section2.offsetTop + 20 && window.pageYOffset < l_section3.offsetTop - 20){
                slither(l_section2.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section3.offsetTop + 20 && window.pageYOffset < l_section4.offsetTop - 20){
                slither(l_section3.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section4.offsetTop + 20 && window.pageYOffset < l_section5.offsetTop - 20){
                slither(l_section4.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section5.offsetTop + 20 && window.pageYOffset < l_section6.offsetTop - 20){
                slither(l_section5.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section6.offsetTop + 20 && window.pageYOffset < l_section7.offsetTop - 20){
                slither(l_section6.offsetTop,0);
                dangqian = window.pageYOffset;
            }else if(window.pageYOffset > l_section7.offsetTop + 20 && window.pageYOffset < l_section8.offsetTop - 20){
                slither(l_section7.offsetTop,0);
                dangqian = window.pageYOffset;
            }
        }
    }
    //封装滑动事件
    function slither(target,X){//target=目标位置   X=X轴的值
        clearInterval(time);
        time = setInterval(function(){
            var leader = window.pageYOffset;
            var step = (target - leader)/10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            window.scrollTo(X,leader);
            if(leader === target){
                clearInterval(time);
            }
        },15)
    }*/
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
}//window.onload


        //3,鼠标经过 Instruction ol[i] 时 文本框慢慢的显示；透明度 渐渐 变到 1；
        //鼠标经过 Instruction ol[i] 时 文本框 模块  渐渐显示；
//           ollis[i].onmouseover = function
        //4，鼠标离开 Instruction ol[i] 时 文本框 模块  渐渐不显示；

