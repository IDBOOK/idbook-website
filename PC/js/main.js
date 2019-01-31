var jobList = [
    '<p><span class="English">Former Partner and COO of Liepin.com</span><span class="Chinese">原猎聘网联合创始人兼首席运营官，搭建了猎聘网早期全国业务系统和团队</span></p>',
    '<p><span class="English">CEO and founder of  Blockchain company which is invested b y China Telecom  . His company developed the largest  decentralized  identity application in China. He is An early block chain PC power pool operator, CPU POWER RECORD HOLDER</span><span class="Chinese">中国电信投资的区块链企业的 CEO 和创始人，开发了国内最大的分布式身份应用 DApp。曾是早期区块链 PC 算力矿池运营者，CPU 算力记录保持者</span></p>',
    '<p><span class="English">Korea Kakao\'s Angel Investor</br>Korea KPMG Co-founder</span><span class="Chinese">韩国 Kakao 天使投资人，韩国 KPMG Co-founder。现任 Kakao 社外理事和监事会主席，韩国企划财政部革新成长本部顾问委员，负责韩国政府的区块链政策咨询。对 IDBOOK 日本、韩国节点的建设和社区扩大有重要的影响力</span></p>',
    '<p><span class="English">Former Director of China\'s National Engineering Laboratory for Mobile Internet System and Application Security <br/> President of the Expert Committee of Blockchain Security Lab (Singapore)</span><span class="Chinese">中国移动互联网系统与应用安全国家工程实验室前主任 <br/> 新加坡 Blockchain Security Lab 专家委员会主席</span></p>',
    '<p><span class="English">Author of“A Handbook of Quantification”</br>Chief Blockchain Architect of Weway Tech. Ltd </span><span class="Chinese">电子信息及经济学硕士，《量化红宝书》作者，精通区块链分布式架构、金融、量化及交易平台，10 年的 IT 及金融工作经验，第一批从事 Hadoop 开发研究，将分布式技术应用于量化交易平台及区块链供应链金融解决方案平台</span></p>',
    '<p><span class="English">The Secretary-General of BSL Singapore</br>PhD of Political Economy</span><span class="Chinese">俄罗斯籍，Armenia 埃尔文国立大学政治经济学 PHD</span></p>',
    '<p><span class="English">Doctoral Supervisor</br>Alibaba\'s Huoshui Scholar</br>Distinguished One Hundred Scholars of Chongqing University</br>Senior Visiting Scholar at University of Illinois at Urbana-Champaign and City University of Hong Kong</span><span class="Chinese">重庆大学博导，阿里巴巴活水学者，重庆大学百人计划学者，美国伊利诺伊州立大学厄本纳-香槟分校和香港城市大学高级访问学者</span></p>',
    '<p><span class="English">Chief Operating Officer of South Korea\'s blockchain ecosystem platform for music - Muzika and Co founder of South Korea\'s Youthglobe and Shadal</span><span class="Chinese">韩国分布式区块链音乐生态平台 Muzika 首席运营官，韩国 Youthglobe 和 Shadal 联合创始人</span></p>',
    '<p><span class="English">Leader of China Telecom\'s R&D programme for blockchain applications</span><span class="Chinese">中国电信商用的区块链产品研发团队负责人</span></p>',
    '<p><span class="English">Renowned Angel Investor</br>Former Senior Executive of Huawei & China Motion</br>Founder of Guoyan Investment </span><span class="Chinese">著名天使投资人<br/>前华为和润迅高管<br/>国研资本创始人</span></p>',
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
		var language = $(".language").val();
		if(language == 1){
		　　$(".English").hide();　
		    $(".Chinese").show();
		}else if(language == 2){
		　　$(".English").show();
			$(".Chinese").hide();
		}
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
    
	
	$(".sign,.languageon").click(function(){
		var language = $(".language").val();
		if(language == 1){
		　　$(".English").show();　
		    $(".Chinese").hide();
			$(".email").attr("placeholder","Enter your email");
			$(".WhitePaper").attr("href","https://docsend.com/view/adi48ic");
			$(".language").val("2")
		}else if(language == 2){
		　　$(".English").hide();
			$(".Chinese").show();
			$(".email").attr("placeholder","输入邮箱");
			$(".WhitePaper").attr("href","https://docsend.com/view/3vv23qu");
			$(".language").val("1")
		} 
	})
	
}())