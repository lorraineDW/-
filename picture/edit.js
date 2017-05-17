///*
//$(document).ready(function () {
//    var fromFooter = false; // mark whether the section slides from footer section.
//    var fadeInOutCurrentIndex = 3;
//    var fadeInOutEventId;
//
//    var title1 = isEnglish() ? "Demist": "去雾";
//    var title2 = isEnglish() ? "Super-resolution restoration": "超分辨率";
//    var title3 = isEnglish() ? "Restore (fast denoising)": "修复（快速去噪）";
//    var title4 = isEnglish() ? "Darkness lighting": "暗光增强";
//    var title5 = isEnglish() ? "Single picture HDR": "单图HDR";
//    var title6 = isEnglish() ? "Out-of-focus restore": "失焦修复";
//    var title7 = isEnglish() ? "Video stabilization": "视频去抖";
//    var title8 = isEnglish() ? "Post focus": "后聚焦";
//    var title9 = isEnglish() ? "Filter": "滤镜";
//
//
//    $('#fullpage').fullpage({
//        anchors: ['header', title1, title2, title3, title4, title5, title6, title7, title8, title9, 'footer'],
//        sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
//        menu: '#right-menu',
//        navigation: true,
//        navigationPosition: 'right',
//        navigationTooltips: ['header', title1, title2, title3, title4, title5, title6, title7, title8, title9, 'footer'],
//        responsiveHeight: RESPONSIVE_HEIGHT,
//        scrollOverflow: true,
//        easing: 'easeInOutCubic',
//        easingcss3: 'cubic-bezier(0.86, 0, 0.07, 1)',
//        scrollingSpeed: 1000,
//        fitToSectionDelay: 1000,
//        continuousVertical: false,
//        afterRender: function () {
//            if ($(window).height() < RESPONSIVE_HEIGHT) setScrollSectionWidth();
//            facePrettifierInit();
//        },
//        afterResize: function () {
//            showAndHideNavs(true);
//            facePrettifierResize();
//        },
//        onLeave: function (index, nextIndex, direction) {
//            if (index == 9) { // 后聚焦
//                clearTimeout(fadeInOutEventId);
//            }
//            switch (nextIndex) {
//                case 1: // header
//                    $('#fixed-nav').hide();
//                    fadeOutText();
//                    break;
//                case 2:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 3:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 4:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 5:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 6:
//                    changeNavTheme('light');
//                    fadeinText();
//                    break;
//                case 7:
//                    changeNavTheme('light');
//                    fadeinText();
//                    break;
//                case 8:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 9:
//                    changeNavTheme('dark');
//                    fadeinText();
//                    break;
//                case 10: // 滤镜
//                    changeNavTheme('light');
//                    fadeinText();
//                    break;
//                case 11: // footer
//                    changeNavTheme('light');
//                    fadeOutText();
//                    break;
//                default:
//                    break;
//            }
//        },
//        afterLoad: function (anchorLink, index) {
//            // show & hide the fixed nav
//            showAndHideNavs();
//            switch (index) {
//                case 1: // header
//                    break;
//                case 2:
//                    removeLineAnimation();
//                    showLineAnimation(2);
//                    break;
//                case 3: // face-prettifier
//                    removeLineAnimation();
//                    showLineAnimation(3);
//                    break;
//                case 4:
//                    removeLineAnimation();
//                    showLineAnimation(4);
//                    break;
//                case 5:
//                    removeLineAnimation();
//                    showLineAnimation(5);
//                    break;
//                case 6:
//                    removeLineAnimation();
//                    showLineAnimation(6);
//                    break;
//                case 7:
//                    removeLineAnimation();
//                    showLineAnimation(7);
//                    break;
//                case 8:
//                    removeLineAnimation();
//                    showLineAnimation(8);
//                    break;
//                case 9:
//                    fadeInOut(fadeInOutCurrentIndex, 1000, 2000);
//                    removeLineAnimation();
//                    showLineAnimation(8);
//                    break;
//                case 10: // filter
//                    if (!fromFooter)
//                        $(".face-button:not(.selected)").trigger("click");
//                    break;
//                case 11: // footer
//                    break;
//                default:
//                    break;
//            }
//            if (index == 11)
//                fromFooter = true;
//            else {
//                fromFooter = false;
//            }
//        }
//    });
//
//    var i = 1;
//    $(".beforeafter").each(function () {
//        i++;
//        var beforei = "before" + i;
//        $(this).append("<div class='after'></div>").find(".after").css({
//            "width": "100%",
//            "height": "100%"
//        });
//
//        $(this).find(".after").append("<section class='after-img'></section>").find(".after-img").css({
//            "min-width":"1152px",
//            "background-image": "url(" + $(this).find("img[rel=after]").attr("src") + ")",
//            "background-size": "cover",
//            "background-position": "center",
//            "background-repeat": "no-repeat",
//            "width": "100%",
//            "height": "100%"
//        });
//
//        $(this).append("<div class='before' id=" + beforei + "></div>").find(".before").css({
//            "width": $(this).find(".after").width() - $(window).width()*0.25,
//            "height": "100%"
//        });
//
//        $(this).find(".before").append("<div class='before-img-out'></div>").find(".before-img-out").css({
//            "overflow": "hidden",
//            "width": "100%",
//            "height": "100%"
//        });
//
//        $(this).find(".before-img-out").append("<section class='before-img'></section>").find(".before-img").css({
//            "min-width":"1152px",
//            "background-image": "url(" + $(this).find("img[rel=before]").attr("src") + ")",
//            "background-size": "cover",
//            "background-position": "center",
//            "background-repeat": "no-repeat",
//            "width": $(this).find(".after").width(),
//            "height": "100%"
//        });
//
//        $(this).find("img").remove();
//
//        $(this).bind('mousedown', dragline);
//
//        $(this).mousedown(function (event) {
//            $(this).bind('mousemove', dragline)
//        });
//
//        $(this).mouseup(function (event) {
//            $(this).unbind('mousemove', dragline);
//        });
//
//        $(this).mouseleave(function (event) {
//            $(this).unbind('mousemove', dragline);
//        });
//
//        function dragline(event) {
//            var offset = $(this).offset().left;
//            if ((event.clientX - offset) < ($(this).find(".after").width() - 50) && (event.clientX - offset) > 50) {
//                $(this).find(".before").width(event.clientX - offset);
//            }
//        }
//    });
//
//    $(window).resize(function () {
//        $(".beforeafter").each(function () {
//            var width =$(window).width();
//            $(this).find(".before-img").width(width);
//        });
//    });
//
//    function fadeInOut(index, deltaTime, lastTime) {
//        fadeInOutEventId = setInterval(function () {
//            var current = "#focus-frame" + index;
//            ++index;
//            if (index > 3) index = 1;
//            var next = "#focus-frame" + index;
//            $(next).fadeIn(lastTime-deltaTime,function() {
//                $(current).fadeOut(deltaTime);
//            });
//        }, lastTime);
//    }
//
//    function showLineAnimation(index) {
//        var beforei = "#before" + index;
//        $(beforei).animate({width: '50%'}, 1000, function () {
//            $(this).append("<div class='nav-box J_navBtn'></div>");
//        });
//    }
//
//    function removeLineAnimation() {
//        $(".before").each(function () {
//            $(this).animate({width: $(".after").width() - $(window).width()*0.25}, 1, function () {
//                $(this).find(".nav-box").remove();
//            });
//        });
//    }
//
//    function fadeinText() {
//        $(".section-title").stop().css({'opacity':0}).delay(700)
//            .animate({'opacity':1}, 1000);
//        $(".section-content").stop().css({'opacity':0}).delay(700)
//            .animate({'opacity':1}, 1000);
//    }
//
//    function fadeOutText() {
//        $(".section-title").stop().animate({'opacity':0}, 1000);
//        $(".section-content").stop().animate({'opacity':0}, 1000);
//    }
//
//});
//*/

var w =window.innerWidth;
//console.log(window.innerHeight);
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var after2 = document.getElementById("after2");
var after3 = document.getElementById("after3");
var after4 = document.getElementById("after4");
var after5 = document.getElementById("after5");
var after6 = document.getElementById("after6");
var after7 = document.getElementById("after7");
var before2 = document.getElementById("before2");
var before3 = document.getElementById("before3");
var before4 = document.getElementById("before4");
var before5 = document.getElementById("before5");
var before6 = document.getElementById("before6");
var before7 = document.getElementById("before7");
after2.style.width = w+"px";
after3.style.width = w+"px";
after4.style.width = w+"px";
after5.style.width = w+"px";
after6.style.width = w+"px";
after7.style.width = w+"px";
//before2.style.width = w+"px";
//shade(before2,btn2);
//shade(before3,btn3);
//shade(before4,btn4);
//shade(before5,btn5);
//shade(before6,btn6);
//shade(before7,btn7);


var shadows = [[before2,btn2],[before3,btn3],[before4,btn4],[before5,btn5],[before6,btn6],[before7,btn7]]
for(var i=0;i<shadows.length;i++){
    shade(shadows[i][0],shadows[i][1]);
}
function shade(box,btn){
    btn.onmousedown = function () {
        document.onmousemove = function (event) {
            var event = event || window.event;
            var x =window.innerWidth - 15;
            //鼠标在页面中的位置
            var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
            if(pageX > x){
                pageX = x;
            }
            //遮罩盒子的宽度跟随鼠标移动
            box.style.width = pageX + "px";
            //按钮的位置跟随鼠标移动
            btn.style.left = pageX - 14 + "px";
            //清除选中
            return false;
        }
    }
    //鼠标弹起停止事件
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}