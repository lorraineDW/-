/**
 * Created by Administrator on 2017-2-12.
 */
window.onload = function(){
    var nav=document.getElementById("nav");
    var olInstr = document.getElementById("Instruction");
    var olInstrlis = olInstr.getElementsByTagName("li");
    var ul = document.getElementsByTagName("ul")[1];
    var ullis =ul.getElementsByTagName("li");
    var olTxt = document.getElementById("Explaintxt");
    var olTxtlis = olTxt.getElementsByTagName("li");
    var followplay = document.getElementById("followplay");
    var keyplay = document.getElementById("keyplay");
    var identityplay = document.getElementById("identityplay");
    var attributeplay = document.getElementById("attributeplay");
    var checkplay = document.getElementById("checkplay");

    var facel = document.getElementById("facel");
    var facer = document.getElementById("facer");
    var facea = document.getElementById("facea");
    var faceb = document.getElementById("faceb");
    var facec = document.getElementById("facec");
    var facee = document.getElementById("facee");
    var facef = document.getElementById("facef");
    var faceaa = document.getElementById("faceaa");
    var faceaaa = document.getElementById("faceaaa");
    var faced = document.getElementById("faced");
    var facedd = document.getElementById("facedd");
    var spanl1 = document.getElementById("spanl1");
    var spanl2 = document.getElementById("spanl2");
    var spanr1 = document.getElementById("spanr1");
    var spanr2 = document.getElementById("spanr2");

    var timer = null;
    var fixbox = document.getElementById("fixbox");
    var Explaintxt = document.getElementById("Explaintxt");
    var Explaintxtlis = Explaintxt.getElementsByTagName("li");
    var Instruction = document.getElementById("Instruction");
    var Instructionlis = Instruction.getElementsByTagName("li");
    var gather = document.getElementById("gather");
    var changebox = document.getElementById("changebox");
    var imgs = changebox.getElementsByTagName("img");
    var gatherplay = document.getElementById("gatherplay");
    var lastdisplaybox  = document.getElementById("lastdisplaybox");
    var colorAs = changebox.getElementsByClassName("colorA");
    var colorBs = changebox.getElementsByClassName("colorB");
    var colorCs = changebox.getElementsByClassName("colorC");
    var changefemaleflag = true;
    config = [{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3},{"opacity":0.3}]
    configa = [{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0},{"opacity":0}]
    configb = [
        {"top":123,"left":926},  //C
        {"top":0,"left":512},//A
        {"top":0,"left":670},//C
        {"top":246,"left":542},//C
        {"top":123,"left":-414},//B
        {"top":0,"left":158},//C
        {"top":123,"left":-542},//B
        {"top":123,"left":-384},//A
        {"top":123,"left":-226},//C
        //2
        {"top":-123,"left":98},//B
        {"top":123,"left":670},//C
        {"top":123,"left":384},//A
        {"top":123,"left":-286},//B
        {"top":-123,"left":542},//C
        {"top":123,"left":-256},//A
        {"top":123,"left":-542},//B
        {"top":-123,"left":-512},//A
        {"top":-123,"left":-1054},//B
        //3
        {"top":-123,"left":640},//A
        {"top":-246,"left":98},//B
        {"top":-246,"left":256},//A
        {"top":-123,"left":0},//A
        {"top":-123,"left":542},//C
        {"top":0,"left":-670},//B
        {"top":0,"left":-256},//a
        {"top":-123,"left":-926},//b
        {"top":0,"left":30},//c
    ]

    //第七个盒子需要的变量
    //第一个ul 的盒子
    var ulbeautyfaces = document.getElementById("beautyface");
    var ulfacedivs = ulbeautyfaces.children;
    //第二个ul 的盒子
    var ulbeautymakes = document.getElementById("beautymake");
    var ulmakedivs = ulbeautymakes.children;
    //重新设置各个ul上面 每个div 盒子的 left 值 因为他的top 值初始都为0；
    //重新排布每个盒子的初始 left的值 但是它只改变 top 的值哦；
    //绑定点击事件
    var btnface = document.getElementById("btnface");
    var btnmake = document.getElementById("btnmake");
    for(var i=0;i<ulfacedivs.length;i++){
        ulfacedivs[i].style.left = 255 * i + "px";
        ulmakedivs[i].style.left = 255 * i + "px";
    }

    //for(var i=0;i<ulbeautyfaces.length;i++){
    //    ulbeautyfaces[0]
    //}

    //函数  ：第一个ul 相对于原来的位置 下移 一个距离 并且是 渐渐地 一张一张的；每一个大的ul就是他的父盒子；父盒子的高度是480;


    //---------------------------------------------fix 盒子的相关函数-------------------

    //2 ，鼠标点击 文字解释栏的  圆点 触发滚动事件；
    for(var i=0;i<olInstrlis.length;i++){
        olInstrlis[i].index  = i;
        //1：鼠标 经过 Instruction ol[i] 时 对应的 ul 显示相应的 ul[i];
        olInstrlis[i].onclick = function(){
            clearInterval(timer);
            var target = ullis[this.index].offsetTop;
            timer = setInterval(function () {
                var leader = window.pageYOffset;//当前页面被卷去的头部；
                var step = (target - leader) / 10;//每一次执行动画移动的步数；
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === target) {
                    clearInterval(timer);
                }
            }, 15);

        }
    }
    //点击 文字的某一列 页面移动到一个位置；
    for(var i=0;i<olTxtlis.length;i++){
        olTxtlis[i].index  = i;
        olTxtlis[i].onclick = function(){
            clearInterval(timer);
            var target = ullis[this.index].offsetTop;

            timer = setInterval(function () {
                var leader = window.pageYOffset;//当前页面被卷去的头部；
                var step = (target - leader) / 10;//每一次执行动画移动的步数；
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                window.scrollTo(0, leader);
                if (leader === target) {
                    clearInterval(timer);
                }
            }, 15);
        }

    }
    //鼠标经过 instruction explain 文档显示 离开 fix盒子 oltxt 不显示；
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


    //---------------------------fix 盒子的相关函数-----------------




            animateslow(followplay,{"opacity":1});


    //-------------------------所有的 滚动事件-----------------------
    window.onscroll = function(){
        var pageY = window.pageYOffset;
        var leader  = [ ];
        for(var i=0;i<ullis.length;i++){

            leader[leader.length] = ullis[i].offsetTop;
        }

        //第一个盒子的 滚动事件

        if(pageY >= leader[0]){
            //字体颜色改变
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li00other";
                Instructionlis[i].className = "li00other";
            }
            Explaintxtlis[0].className = "li00";
            Instructionlis[0].className = "li00";

        }

        //第一个盒子的 滚动事件

        //第二个盒子的 滚动事件

        if(pageY >= leader[1]){

            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li01other";
                Instructionlis[i].className = "li01other";
            }
            Explaintxtlis[1].className = "li01";
            Instructionlis[1].className = "li01";

            animateslow(keyplay,{"opacity":1});
        }

        //第二个盒子的 滚动事件



        //第三个盒子的滚动函数
        if(pageY >= leader[2]){
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li02other";
                Instructionlis[i].className = "li02other";
            }
            Explaintxtlis[2].className = "li02";
            Instructionlis[2].className = "li02";
            animateslow(identityplay,{"opacity":1});
        }



        //第四个盒子的函数；
        if(pageY >= leader[3]){
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li03other";
                Instructionlis[i].className = "li03other";
            }
            Explaintxtlis[3].className = "li03";
            Instructionlis[3].className = "li03";
            animateslow(attributeplay,{"opacity":1});
        }
        //左边鼠标移动上去的特效
        var timer=null;
        var timer1=null;
        facea.onmouseover = function () {
            animateslow(facea, {"opacity": 1});
            animateslow(facel, {"opacity": 1});
            animateslow(faceaa, {"width": 30, "height": 30, "opacity": 0, "top": 24, "right": -2});
            animateslow(faceb, {"width": 130, "left": 0});
            animateslow(facec, {"width": 100, "left": 0});
            timer=setTimeout(function(){
                animateslow(spanl1, {"opacity":1});
                animateslow(spanl2, {"opacity":1});
            },700);


        }
        //右边鼠标移动上去的特效
        faced.onmouseover = function () {
            animateslow(faced, {"opacity": 1});
            animateslow(facer, {"opacity": 1});
            animateslow(facedd, {"width": 30, "height": 30, "opacity": 0, "top": 17, "left": -14});
            animateslow(facee, {"width": 130, "right": 10});
            animateslow(facef, {"width": 100, "right": 10});
            timer1=setTimeout(function(){
                animateslow(spanr1, {"opacity":1});
                animateslow(spanr2, {"opacity":1});
            },700);

        }
        //左边小圆点离开时的效果
        facea.onmouseout = function () {
            animateslow(facea, {"opacity": 0});
            animateslow(facel, {"opacity": 0});
            faceaa.style.opacity = 1;
            faceaa.style.width = 5 + "px";
            faceaa.style.height = 5 + "px";
            faceaa.style.top = 36 + "px";
            faceaa.style.right = 10 + "px";
            faceb.style.width = 0 + "px";
            faceb.style.left =130 + "px";
            facec.style.width = 0 + "px";
            facec.style.left = 100 + "px";
            animateslow(spanl1, {"opacity":0});
            animateslow(spanl2, {"opacity":0});
            clearTimeout(timer);

        }
        //右边小圆点离开时的效果
        faced.onmouseout = function () {
            animateslow(faced, {"opacity": 0});
            animateslow(facer, {"opacity": 0});
            facedd.style.opacity = 1;
            facedd.style.width = 5 + "px";
            facedd.style.height = 5 + "px";
            facedd.style.top = 30 + "px";
            facedd.style.left = -5 + "px";
            facee.style.width = 0 + "px";
            facee.style.right =140 + "px";
            facef.style.width = 0 + "px";
            facef.style.right = 110 + "px";
            animateslow(spanr1, {"opacity":0});
            animateslow(spanr2, {"opacity":0});
            clearTimeout(timer1);
        }
        //第五个盒子的所有函数


        if(pageY >= leader[4]){
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li04other";
                Instructionlis[i].className = "li04other";
            }
            Explaintxtlis[4].className = "li04";
            Instructionlis[4].className = "li04";


            changefemale();
            function changefemale(){
                if(changefemaleflag){
                    changefemaleflag = false;
                    lastdisplaybox.style.opacity = 0;
                    for (var i = 0; i < imgs.length; i++) {
                        imgs[i].style.top = 0;
                        imgs[i].style.left = 0;
                    }
                    animateslow(gatherplay, {"opacity": 1});
                    //颜色  变换函数
                    for (var i = 0; i < colorCs.length; i++) {
                        animateslow(colorCs[i], config[i], function () {
                            for (var j = 0; j < colorCs.length; j++) {
                                animateslow(colorCs[j], configa[j]);
                            }
                            for (var i = 0; i < colorAs.length; i++) {
                                animateslow(colorAs[i], config[i], function () {
                                    for (var j = 0; j < colorAs.length; j++) {
                                        animateslow(colorAs[j], configa[j]);
                                    }
                                    for (var i = 0; i < colorBs.length; i++) {
                                        animateslow(colorBs[i], config[i], function () {
                                            for (var j = 0; j < colorBs.length; j++) {
                                                animateslow(colorBs[j], configa[j], function () {
                                                        //changefemaleflag = true;
                                                        female();
                                                    }
                                                );
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                    function female() {
                        for (var i = 0; i < imgs.length; i++) {
                            animateattr(imgs[i], configb[i], function () {
                                //函数执行完了以后  归0 再执行；
                                animateslow(lastdisplaybox, {opacity: 1},function(){
                                    //animateslow(gatherplay, {"opacity": 0});
                                    //回调函数---；
                                    changefemaleflag = true;
                                    changefemale();
                                });
                            });
                        }
                    }
                }else{
                    return;
                }


            }

        }//滑动到 page4；
        //第五个盒子的所有函数
        //滑动到 page4；
        //第五个盒子的所有函数


        //第六个盒子的滚动事件
        if(pageY >= leader[5]){
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li04other";
                Instructionlis[i].className = "li04other";
            }
            Explaintxtlis[5].className = "li04";
            Instructionlis[5].className = "li04";
            animateslow(checkplay,{"opacity":1});
        }


        //第七个盒子的滚动事件
        if(pageY >= leader[6]){
            for(var i=0;i<Explaintxtlis.length;i++){
                Explaintxtlis[i].className = "li04other";
                Instructionlis[i].className = "li04other";
            }
            Explaintxtlis[6].className = "li04";
            Instructionlis[6].className = "li04";
            btnface.onclick = function(){
                moveMDmoveFT();
                btnmake.style.color = "#444";
                btnmake.style.backgroundColor = "#fff";
                btnface.style.color = "#fff";
                btnface.style.backgroundColor = "#444";
            }
            btnmake.onclick = function(){
                moveFDmoveMT();
                btnface.style.color = "#444";
                btnface.style.backgroundColor = "#fff";
                btnmake.style.color = "#fff";
                btnmake.style.backgroundColor = "#444";
            }
            //显示文字；
            moveFDmoveMT();
            animateslow(beautyplay,{"opacity":1});
        }


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
//


    }//滚动事件的；
    var follow = document.getElementById("follow");
    var key = document.getElementById("key");
    var identity = document.getElementById("identity");
    var attribute = document.getElementById("attribute");
    var gather = document.getElementById("gather");
    var check = document.getElementById("check");
    var beauty = document.getElementById("beauty");
    var dangqian = window.pageYOffset;
    var time = null;
    var aLi = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
    var tz = key.offsetHeight;
    var flag = true;
    console.log(aLi);
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
                if (targets >= key.offsetHeight * aLi.length) {
                    targets = key.offsetHeight * aLi.length;
                    flag = true;
                }
                slither(targets, 0, function () {
                    flag = true;
                });

                dangqian = targets;
            }

        }
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
}//window.onload 的结束标志；

