$(function(){
    $('.counter').countUp();
    $(".section1").addClass('show');
    var index = 0;
    //导航栏轮播
    var timer =  setInterval(function(){
        if(index<2){
            index++;
        } else {
            index = 0;
        }
        for(var i=0;i<$('.section4  .nav a').length;i++){
            if(i===index){
                $('.section4  .nav a').eq(i).addClass('active');
            } else {
                $('.section4  .nav a').eq(i).removeClass('active');
            }
        }
        $(".section4 .item-content").eq(index).removeClass('hide').siblings().addClass('hide');

    },3000);
    //点击导航栏，清楚定时器，切换到不同的导航栏
    $(".section4 .nav a").click(function(){

        clearInterval(timer);
        var index = $(this).index(".section4 .nav a");
        $(this).parents('.section4  .nav').find("a").removeClass('active');
        $(this).addClass('active');
        $(".section4 .item-content").eq(index).removeClass('hide').siblings().addClass('hide');
    });
})
//鼠标下滑动画
$(document).scroll( function() {
    var top = $(document).scrollTop();
    if(top===0){
        $(".common-header").removeClass('scrolled');
        // $(".common-header").removeClass('logo1');
    } else {
        $(".common-header").addClass('scrolled');
        // $(".header").addClass('scrollTop');
    }

});
//显示隐藏菜单栏
$(".menu").click(function(){
    if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).addClass('close');
        $(".menu-content").addClass('close');
        $(".menu-content").removeClass('open');
    } else {
        $(this).addClass('open');
        $(this).removeClass('close');

        $(".menu-content").addClass('open');
        $(".menu-content").removeClass('close');
    }
})
