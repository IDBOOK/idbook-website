
 /* jQuery Preloader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {
    /**
    * Gets the browser language type
    * @return {string} Browser national language
    */
    var getNavLanguage = function(){
      //Set language type: default is English
      var navLanguage = 'en';
      if ($.cookie('userLanguage')&&$.cookie('userLanguage')!="") {
          navLanguage = $.cookie('userLanguage');
      }else{
        if(navigator.appName == "Netscape"){
          navLanguage = navigator.language == 'zh' ? 'zh' : 'en';
        }
      }
      return navLanguage
    }
    /**
     * [jqI18nProperties description]   set html language
     * @return {string}  [description]
     */
    function jqI18nProperties(navLanguage){
      jQuery.i18n.properties({
        name : 'strings', //file name
        path : './i18n/', //file path
        mode : 'map', //Use the values in the resource file as a Map
        // language : 'en',
        // language : 'zh',
        language: navLanguage,
        callback : function() {//Set display contents after successful loading
          //mnue

          $('.smoothScroll-index').html($.i18n.prop('SmoothScroll Index'));
          $('.smoothScroll-Introduction').html($.i18n.prop('SmoothScroll Introduction'));
          $('.smoothScroll-Technical').html($.i18n.prop('SmoothScroll Technical Plan'));
          $('.smoothScroll-Road').html($.i18n.prop('SmoothScroll Road Map'));
          $('.smoothScroll-Core').html($.i18n.prop('SmoothScroll Core Team'));
          $('.smoothScroll-language').html($.i18n.prop('SmoothScroll language'));

          //HOME
          $('.color-white').html($.i18n.prop('Home p1'));

          //idbook
          $('.Idbook-p1').html($.i18n.prop('Idbook p1'));
          $('.Idbook-p2').html($.i18n.prop('Idbook p2'));
          $('.Idbook-p3').html($.i18n.prop('Idbook p3'));
          $('.Idbook-p4').html($.i18n.prop('Idbook p4'));
          $('.Idbook-p5').html($.i18n.prop('Idbook p5'));
          $('.Idbook-p6').html($.i18n.prop('Idbook p6'));
          $('.Idbook-p7').html($.i18n.prop('Idbook p7'));
          $('.Idbook-p8').html($.i18n.prop('Idbook p8'));

          //about
          $('.Problem-p1').html($.i18n.prop('Problem p1'));
          $('.Problem-p2').html($.i18n.prop('Problem p2'));
          $('.Problem-p3').html($.i18n.prop('Problem p3'));
          $('.Problem-p4').html($.i18n.prop('Problem p4'));
          $('.Problem-p5').html($.i18n.prop('Problem p5'));
          $('.Problem-p6').html($.i18n.prop('Problem p6'));
          $('.Problem-p7').html($.i18n.prop('Problem p7'));
          $('.Problem-p8').html($.i18n.prop('Problem p8'));
          $('.Problem-p9').html($.i18n.prop('Problem p9'));

          //plan
          $('.Plan-p1').html($.i18n.prop('Plan p1'));
          $('.Plan-p2').html($.i18n.prop('Plan p2'));
          $('.Plan-p3').html($.i18n.prop('Plan p3'));
          $('.Plan-p4').html($.i18n.prop('Plan p4'));
          $('.Plan-p5').html($.i18n.prop('Plan p5'));
          $('.Plan-p6').html($.i18n.prop('Plan p6'));
          $('.Plan-p7').html($.i18n.prop('Plan p7'));

          //node
          $('.node-p1').html($.i18n.prop('Node p1'));
          $('.node-p2').html($.i18n.prop('Node p2'));
          $('.node-p3').html($.i18n.prop('Node p3'));
          $('.node-p4').html($.i18n.prop('Node p4'));

          //Roadmap
          $('.Roadmap-p1').html($.i18n.prop('Roadmap p1'));
          $('.Roadmap-p2').html($.i18n.prop('Roadmap p2'));
          $('.Roadmap-p3').html($.i18n.prop('Roadmap p3'));
          $('.Roadmap-p4').html($.i18n.prop('Roadmap p4'));
          $('.Roadmap-p5').html($.i18n.prop('Roadmap p5'));
          $('.Roadmap-p6').html($.i18n.prop('Roadmap p6'));
          $('.Roadmap-p7').html($.i18n.prop('Roadmap p7'));
          $('.Roadmap-p8').html($.i18n.prop('Roadmap p8'));
          $('.Roadmap-p9').html($.i18n.prop('Roadmap p9'));
          $('.Roadmap-p10').html($.i18n.prop('Roadmap p10'));
          $('.Roadmap-p11').html($.i18n.prop('Roadmap p11'));
          $('.Roadmap-p12').html($.i18n.prop('Roadmap p12'));
          $('.Roadmap-p13').html($.i18n.prop('Roadmap p13'));
          $('.Roadmap-p14').html($.i18n.prop('Roadmap p14'));
          $('.Roadmap-p15').html($.i18n.prop('Roadmap p15'));
          $('.Roadmap-p16').html($.i18n.prop('Roadmap p16'));
          $('.Roadmap-p17').html($.i18n.prop('Roadmap p17'));
          $('.Roadmap-p18').html($.i18n.prop('Roadmap p18'));
          $('.Roadmap-p19').html($.i18n.prop('Roadmap p19'));
          $('.Roadmap-p20').html($.i18n.prop('Roadmap p20'));
          $('.Roadmap-p21').html($.i18n.prop('Roadmap p21'));

          //team
          $('.Team-p1').html($.i18n.prop('Team p1'));
          $('.Team-p2').html($.i18n.prop('Team p2'));
          $('.Team-p3').html($.i18n.prop('Team p3'));
          $('.Team-p4').html($.i18n.prop('Team p4'));
          $('.Team-p5').html($.i18n.prop('Team p5'));
          $('.Team-p6').html($.i18n.prop('Team p6'));
          $('.Team-p7').html($.i18n.prop('Team p7'));
          $('.Team-p8').html($.i18n.prop('Team p8'));
          $('.Team-p9').html($.i18n.prop('Team p9'));
          $('.Team-p10').html($.i18n.prop('Team p10'));

          //Consultants
          $('.Consultants-p1').html($.i18n.prop('Consultants p1'));
          $('.Consultants-p2').html($.i18n.prop('Consultants p2'));
          $('.Consultants-p3').html($.i18n.prop('Consultants p3'));
          $('.Consultants-p4').html($.i18n.prop('Consultants p4'));
          $('.Consultants-p5').html($.i18n.prop('Consultants p5'));
          $('.Consultants-p6').html($.i18n.prop('Consultants p6'));
          $('.Consultants-p7').html($.i18n.prop('Consultants p7'));
          $('.Consultants-p8').html($.i18n.prop('Consultants p8'));
          $('.Consultants-p9').html($.i18n.prop('Consultants p9'));
          $('.Consultants-p10').html($.i18n.prop('Consultants p10'));
          $('.Consultants-p11').html($.i18n.prop('Consultants p11'));
          $('.Consultants-p12').html($.i18n.prop('Consultants p12'));
          $('.Consultants-p13').html($.i18n.prop('Consultants p13'));
          $('.Consultants-p14').html($.i18n.prop('Consultants p14'));
          $('.Consultants-p15').html($.i18n.prop('Consultants p15'));
          $('.Consultants-p16').html($.i18n.prop('Consultants p16'));
          $('.Consultants-p17').html($.i18n.prop('Consultants p17'));
          $('.Consultants-p18').html($.i18n.prop('Consultants p18'));
          $('.Consultants-p19').html($.i18n.prop('Consultants p19'));
          $('.Consultants-p20').html($.i18n.prop('Consultants p20'));
          $('.Consultants-p21').html($.i18n.prop('Consultants p21'));
          $('.Consultants-p22').html($.i18n.prop('Consultants p22'));
          $('.Consultants-p23').html($.i18n.prop('Consultants p23'));

          //FQA
          $('.FQA-p1').html($.i18n.prop('FQA p1'));
          $('.FQA-p2').html($.i18n.prop('FQA p2'));
          $('.FQA-p3').html($.i18n.prop('FQA p3'));
          $('.FQA-p4').html($.i18n.prop('FQA p4'));
          $('.FQA-p5').html($.i18n.prop('FQA p5'));
          $('.FQA-p6').html($.i18n.prop('FQA p6'));
          $('.FQA-p7').html($.i18n.prop('FQA p7'));
          $('.FQA-p8').html($.i18n.prop('FQA p8'));
          $('.FQA-p9').html($.i18n.prop('FQA p9'));
          $('.FQA-p10').html($.i18n.prop('FQA p10'));
          $('.FQA-p11').html($.i18n.prop('FQA p11'));
          $('.FQA-p12').html($.i18n.prop('FQA p12'));
          $('.FQA-p13').html($.i18n.prop('FQA p13'));
          $('.FQA-p14').html($.i18n.prop('FQA p14'));
          $('.FQA-p15').html($.i18n.prop('FQA p15'));
          $('.FQA-p16').html($.i18n.prop('FQA p16'));
          $('.FQA-p17').html($.i18n.prop('FQA p17'));
          $('.FQA-p18').html($.i18n.prop('FQA p18'));
          $('.FQA-p19').html($.i18n.prop('FQA p19'));
          $('.FQA-p20').html($.i18n.prop('FQA p20'));
          $('.FQA-p21').html($.i18n.prop('FQA p21'));
          $('.FQA-p22').html($.i18n.prop('FQA p22'));
          $('.FQA-p23').html($.i18n.prop('FQA p23'));
          $('.FQA-p24').html($.i18n.prop('FQA p24'));

          //footer
          $('.footer-p1').html($.i18n.prop('Footer p1'));
          $('.footer-p2').html($.i18n.prop('Footer p2'));
          $('.footer-p3').html($.i18n.prop('Footer p3'));
        }
      });
    }
    var navLanguage = getNavLanguage();
    navLanguage == 'zh' ? $('.zh').addClass("active") : $('.en').addClass("active");
    navLanguage == 'zh' ? $('.color-white').removeClass("color-white-active") : $('.color-white').addClass("color-white-active");
    navLanguage == 'zh' ? $('.portfolio-bg').attr('src','./images/node-ch.png') : $('.portfolio-bg').attr('src','./images/node-en.png');
    navLanguage == 'zh' ? $('.list-item').removeClass('list-item-ac') : $('.list-item').addClass('list-item-ac');
    navLanguage == 'zh' ? $('.about-list').removeClass('about-list-ac') : $('.about-list').addClass('about-list-ac');
    navLanguage == 'zh' ? $('.white-paper').attr('href', 'https://docsend.com/view/75bvc4n') : $('.white-paper').attr('href', 'https://docsend.com/view/rri3cbx');
    $('.nav-dropdown li a').click(function(event) {
      /* Act on the event */
      if(navLanguage!=this.className){
        navLanguage = this.className;
        $(this).addClass("active").parent().siblings().children().removeClass("active");
        navLanguage == 'zh' ? $('.color-white').removeClass("color-white-active") : $('.color-white').addClass("color-white-active");
        navLanguage == 'zh' ? $('.portfolio-bg').attr('src','./images/node-ch.png') : $('.portfolio-bg').attr('src','./images/node-en.png');
        navLanguage == 'zh' ? $('.list-item').removeClass('list-item-ac') : $('.list-item').addClass('list-item-ac');
        navLanguage == 'zh' ? $('.about-list').removeClass('about-list-ac') : $('.about-list').addClass('about-list-ac');
        navLanguage == 'zh' ? $('.white-paper').attr('href', 'https://docsend.com/view/75bvc4n') : $('.white-paper').attr('href', 'https://docsend.com/view/rri3cbx');
        //set language cookie 30day
        $.cookie('userLanguage',navLanguage, { expires: 30});
        jqI18nProperties(navLanguage);
      }
    });
    jqI18nProperties(navLanguage);
    // The selector language
    $('#nav-dropdown').mouseover(function(){
      $(this).children('ul').show()
    })
    $('#nav-dropdown').mouseout(function(){
      $(this).children('ul').hide()
    })

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* jQuery to collapse the navbar on scroll
    -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
          $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }
  });


  /* BxSlider
    -----------------------------------------------*/
  (function (window, $) {
  'use strict';

  // Cache document for fast access.
  var document = window.document;

  function mainSlider() {
    $('.bxslider').bxSlider({
		auto: false,
    controls: false,
      pagerCustom: '#bx-pager',
      mode: 'fade',
      nextText: '',
      prevText: ''
    });
  }

  mainSlider();

  var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
  $links.click(function(){
     $(".slider-caption").removeClass('animated fadeInLeft');
     $(".slider-caption").addClass('animated fadeInLeft');
  });

  $(".bx-controls").addClass('container');
  $(".bx-next").addClass('fa fa-angle-right');
  $(".bx-prev").addClass('fa fa-angle-left');


  })(window, jQuery);


   /* Owl Carousel
    -----------------------------------------------*/
  $(document).ready(function() {
    $("#owl-work").owlCarousel({
      autoPlay: 3000,
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
    });
  });


  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    $('#work').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#plan').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.2);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });
