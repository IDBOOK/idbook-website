
// 头部
$(".nav").css("height",$(window).height())
$(".nav-i").click(function(){
    var nav_width =  $(".nav").width();
    if(nav_width == 0){
        $(".nav").animate({width:"5.2rem"});
    }else{
        $(".nav").animate({width:"0"});
    }
    $(this).toggleClass("is-active");
})

$('.slide8-content ul li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$(".swiper-slide8 .slide8-character").hide().eq($(this).index()).fadeIn();
})


//导航切换
$('.nav-a1').click(function(){
    mySwiper.slideTo(1, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})
$('.nav-a2').click(function(){
    mySwiper.slideTo(4, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})
$('.nav-a3').click(function(){
    mySwiper.slideTo(5, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})
$('.nav-a4').click(function(){
    mySwiper.slideTo(6, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})
$('.nav-a5').click(function(){
    mySwiper.slideTo(7, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})
$('.nav-a6').click(function(){
    mySwiper.slideTo(8, 1000, true);//切换到第一个slide，速度为1秒
    $(".nav li").removeClass("active");
    $(this).addClass("active")
    $(".nav").animate({width:"0"});
})


$(".nav-Sign").click(function(){
	var language = $(".language").val();
	if(language == 1){
	　　$(".English").show();　
		$(".Chinese").hide();
		$(".footer-input").attr("placeholder","Enter your email");
		$(".language").val("2")
	}else if(language == 2){
	　　$(".English").hide();
		$(".Chinese").show();
		$(".footer-input").attr("placeholder","输入邮箱");
		$(".language").val("1")
	} 
})