/**
 * Created by oops on 16/4/18.
 */
document.write("<script src='/static/web/js/jquery.color-2.1.2.min.js'><\/script>");

function changeIndicator(toShow) {
    $('.indicator').animate({'background-color':"transparent"}, 500);
    $(toShow).stop().animate({'background-color':"#fff"}, 500);
}

function changeVideo(toShow) {
    var toShowIdx = parseInt(toShow[toShow.length - 1]);
    $(toShow)[0].play();
    $('.player').hide()
    $(toShow).show()
    $("#black").stop().css({'opacity':1}).animate({'opacity':0}, 500);
    changeIndicator("#indicator" + toShowIdx);
}

function onPlayOver(cnt) {
    changeVideo("#banner" + cnt);
}

$(document).ready(function() {
    $(".indicator").click(function(){
        var $id = $(this).attr('id');
        $id = parseInt($id[$id.length - 1]);
        var next = "#banner" + $id;
        changeVideo(next);
    });
});
