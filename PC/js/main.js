var jobList = [
    '<p>Former Partner and COO of Liepin.com</p>',
    '<p>CEO and founder of  Blockchain company which is invested b y China Telecom  . His company developed the largest  decentralized  identity application in China. He is An early block chain PC power pool operator, CPU POWER RECORD HOLDER</p>',
    "<p>Korea Kakao's Angel Investor</br>Korea KPMG Co-founder</p>",
    '<p>Renowned Angel Investor</br>Former Senior Executive of Huawei & China Motion</br>Founder of Guoyan Investment</p>',
    '<p>Author of“A Handbook of Quantification”</br>Chief Blockchain Architect of Weway Tech. Ltd </p>',
    '<p>The Secretary-General of BSL Singapore</br>PhD of Political Economy</p>',
    "<p>Doctoral Supervisor</br>Alibaba's Huoshui Scholar</br>Distinguished One Hundred Scholars of Chongqing University</br>Senior Visiting Scholar at University of Illinois at Urbana-Champaign and City University of Hong Kong</p>",
    "<p>Chief Operating Officer of South Korea's blockchain ecosystem platform for music - Muzika and Co founder of South Korea's Youthglobe and Shadal</p>",
    "<p>Leader of China Telecom's R&D programme for blockchain applications</p>",
    "<p>Renowned Angel Investor</br>Former Senior Executive of Huawei & China Motion</br>Founder of Guoyan Investment </p>",
]

$(function() {
   
    var sceneBanner = new Swiper ('#sceneBanner', {
        // autoplay : 3000,
        // autoplayDisableOnInteraction : false,
        slidesPerView : 3,
        slidesPerGroup : 3,
        // spaceBetween : 10,
        paginationClickable :true,
        pagination: '.swiper-pagination1',
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',
        speed:1000,
    });

    $(".page7 .show-tag").on("click",function(){
        $(".details-float-model").fadeIn();
    })
    $(".details-float-model").on("click",function(){
        $(this).fadeOut();
    })
	
	$(".page5 .news-list .item").click(function(){
		$("body").css("height","100%")
		$(".article").hide();
		$(".news-box").show();
		$(".news-box .news-content").hide().eq($(this).index()).show();
	})
	$(".news-box .news-title").click(function(){
		$(".news-box").hide();
		$(".article").show();
		$("html, body").animate({
		    scrollTop: $('#page5').offset().top + "px"
		}, {
		    duration: 0
		});
	})
	$('.news-footer .news-footer-box').click(function(){
		$(".news-box .news-content").hide().eq($(this).index()).show();
	})

    $(".page9 .list .item .item-tt,.page9 .list .item .headimg").on("click",function(){
		$(".page9-zz").hide();
        var index = $(this).parents(".item").index();
		$(this).parent(".item").find(".page9-zz").fadeIn().find("p").html(jobList[index]);
    })
	$(".page9-zz").click(function(){
		$(this).hide();
	})
	
    $(".job-float-model .close").on("click",function(){
        $(".job-float-model").fadeOut();
    })


    // 锚点链接
    $(".header .nav a").on('click',function(){
		$(".news-box").hide();
		$(".article").show();
        $(".header .nav li").removeClass("active");
        $(this).parents('li').addClass("active");
        var top = $('#'+$(this).data("page")).offset().top + "px"
        $("html, body").animate({
            scrollTop: top
        }, {
            duration: 800
        });
    })


    var page2Top = $("#page2").offset().top;
    var page6Top = $("#page6").offset().top;
    var page7Top = $("#page7").offset().top;
    var page8Top = $("#page8").offset().top;
    var page9Top = $("#page9").offset().top;
    var page10Top = $("#page10").offset().top;
    $(document).scroll(function(e) {
        var scrolltop = $(document).scrollTop();

        // 从大到小判断
        if(scrolltop >= page10Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(5)').addClass("active");
        }else if(scrolltop >= page9Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(4)').addClass("active");
        }else if(scrolltop >= page8Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(3)').addClass("active");
        }else if(scrolltop >= page7Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(2)').addClass("active");
        }else if(scrolltop >= page6Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(1)').addClass("active");
        }else if(scrolltop >= page2Top){
            $(".header .nav li").removeClass("active");
            $('.header .nav li:eq(0)').addClass("active");
        }
    });

    $(".page2 .play-btn").on("click",function(){
		var src = $(this).attr("data-url");
		var sourceDom = $("<video id=\"video\" class=\"video\" controls><source src=\""+ src +"\"></video>");
        $(this).removeClass("js-anim");
        setTimeout(function(){
            $(".page2 .content").fadeOut();
			$(".video-box").append(sourceDom);
			$(".video-box").show();
			$("#video")[0].play();
        },1000)
    })
	$(".video-x").click(function(){
		$(".video-box").hide();
		$("#video").remove();
		$(".page2 .content").show();
		$(".page2 .play-btn").addClass("js-anim");
	})
	

    new WOW({
        offset: 500,
    }).init();


    var s = skrollr.init({
        easing:'linear'
    });
    
}())