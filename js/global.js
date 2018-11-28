$(window).on('load', function(){
  // Preloader
  $('header, section, footer').animate({'opacity': 1}, 'slow');
  $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // Home slider
   $('.slider_home.flexslider').flexslider({
        animation: "fade",
        slideshow: false,
        controlNav: true,
        pauseOnHover: false,
        slideshowSpeed: 5000
    });
});


 $( document ).ready(function() {
    // main menu open
    $('#butt_menu').click(function(){
        $('#main_menu').delay(300).slideToggle('fast');
    });
    // burger menu
    (function() {
      "use strict";
      var toggles = document.querySelectorAll(".c-hamburger");
      for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
      };
      function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
          e.preventDefault();
          (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
      }
    })();
    // Fit VID
    $(".container").fitVids();
    $(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});
    // video con cover loop video
    if($('body').find('.file_video').length == 1 ){
      var videoz= $('.file_video').get(0);   
        //console.log (videoz);
        videoz.addEventListener('ended',function(){
            videoz.load(); 
            $(".frase").fadeIn();
            $('.file_video').removeAttr('controls');
            $(".file_video").hide();
            $(".sfuma_top").hide();
            $(".cover_video").show();
            $(".cover_video").get(0).play();
        },false);

        $(".file_video").hide();
        $(".btn_video").hide();

        $('.btn_cover').click(function () {
          $(".file_video").show();
          $(".file_video").get(0).play();
          $(".file_video").attr('controls', '');
          $(".frase").fadeOut();
          $(".cover_video").get(0).pause();
          $(".cover_video").hide();
          $(".sfuma_top").hide();
          $(".btn_video").show();
          $(".btn_cover").hide();
          $(".head").hide();
          //$('#main_menu').slideToggle('fast');
          //$("#social_menu").hide();
          //$(".o-grid__item").hide();
        });

        $('.btn_video').click(function () {
          $(".file_video").hide();
          $(".file_video").get(0).pause();
          $(".file_video").removeAttr('controls');
          $(".frase").fadeIn();
          
          $(".cover_video").show();
          $(".cover_video").get(0).play();
          $(".sfuma_top").show();
          $(".btn_video").hide();
          $(".btn_cover").show();
          $(".head").show();
          //$("#social_menu").show();
          //$(".o-grid__item").show();
        });











    }
    // video con cover jpg
    /*if($('body').find('.file_video_cover').length == 1 ){
      var videoz_cover= $('.file_video_cover').get(0);   
      videoz_cover.addEventListener('ended',function(){
          videoz_cover.load(); 
          $(".frase").fadeIn();
          $('.file_video_cover').removeAttr('controls');
          $(".file_video_cover").get(0).stop();
      },false);
       $(".file_video").hide();
        $('.video').click(function () {
          if($(this).children(".file_video_cover").get(0).paused){
            $(this).children(".file_video_cover").get(0).play();
            $(this).children(".frase").fadeOut();
            $(this).children(".file_video_cover").attr('controls', '');
        }else{
           $(this).children(".file_video_cover").get(0).pause();
           $(this).children(".frase").fadeIn();
           $(this).children(".file_video_cover").removeAttr('controls');
        }
      });
    }*/
}); 




$(window).scroll(function () {
    // menu header
    if ($(document).scrollTop() < 200) { 
        $('body').removeClass('scrolled');
    } else {
        $('body').addClass('scrolled');  
    }
    // top button
    if ($(document).scrollTop() < 800) { 
        $('.top').addClass('top_no');
    } else {
        $('.top').removeClass('top_no');  
    }
});

