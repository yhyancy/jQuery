$(function () {
    var flag = true
    var toolTop = $(".recommend").offset().top
    toggleTool()
    //为解决 刷新后 不显示的问题
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }
    $(window).scroll(function () {
        toggleTool()
        if (flag) {
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i)
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass()
                }
            })
        }
    })

    $(".fixedtool li").click(function () {
        console.log($(this).index())
        flag = false
        var current = $(".floor .w").eq($(this).index()).offset().top
        $("body, html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true
        })
        $(this).addClass("current").siblings().removeClass("current")
    })


})