// LOADING ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

$(window).load(function(){
  //$('.loading').animate({backgroundColor: "#fff",}, 'slow');
  $('header, section, footer').animate({'opacity': 1}, 'slow');
});

jQuery(document).ready(function($) {  
  // site preloader -- also uncomment the div in the header and the css style for #preloader
  $(window).load(function(){
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
  });




/*

  $('.slider_home').BlackAndWhite({
    hoverEffect:false,
    webworkerPath: 'src/',
    intensity:1,
    onImageReady:function(img){
      $(img).parent().animate({
        opacity:1
      });
    }
  });
*/



});







$(window).scroll(function () {
    if ($(document).scrollTop() < 200) { 
        $('body').removeClass('scrolled');
    } else {
        $('body').addClass('scrolled');  
    }
});
 

$(window).scroll(function () {
    if ($(document).scrollTop() < 800) { 
        $('.top').addClass('top_no');
    } else {
        $('.top').removeClass('top_no');  
    }
});



// SLIDER ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

                                                                                        //$('.slider_home .flex-caption').animate({opacity: 0, bottom: "-155px"}, 500 );             
//$('.slider_home .flex-caption').animate({opacity: 0}, 300 );   
//$('.angolo_grigio').animate({opacity: 0}, 300 );   




$(window).load(function(){
    $('.slider_home.flexslider').flexslider({
        animation: "fade",
        slideshow: false,
        controlNav: true,
        pauseOnHover: false,
        slideshowSpeed: 5000,
        before: function(){captionMoveOut();},
        after: function(){captionMoveIn();},
        start: function(slider){
          //$('body').removeClass('loading');
         // $('.slider_home .flex-caption').animate({opacity: 1, bottom: "-155px"}, 500 );
       //   $('.slider_home .flex-caption').animate({opacity: 1}, 300 );
          //$('.angolo_grigio').animate({opacity: 1}, 300 );
        }
    });
    function captionMoveIn() {
                                                                                        //$('.slider_home .flex-caption').animate({opacity: 1, bottom: "-155px"}, 500 );
       // $('.slider_home .flex-caption').animate({opacity: 1}, 300 );
        //$('.angolo_grigio').animate({opacity: 1}, 300 );
    ;};                 
    function captionMoveOut() {
                                                                                        //$('.slider_home .flex-caption').animate({opacity: 0, bottom: "-155px"}, 250 );
       //  $('.slider_home .flex-caption').animate({opacity: 0}, 150 );
         //$('.angolo_grigio').animate({opacity: 0}, 150 );
    ;};
});

///////////////////////

/*
$(window).load(function(){
    $('.slider_home_prodotti.flexslider').flexslider({
        animation: "slide",
        slideshow: true,
        pauseOnHover: true,
        directionNav: false,
        slideshowSpeed: 4000,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
});
*/

// DROPDOWN MENU ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          
 $( document ).ready(function() {
    $('#butt_menu').click(function(){
        $('#main_menu').delay(300).slideToggle('fast');
        //$('.lang').slideToggle('fast');
        //  $('.lang').toggleClass( "disp" );
    });

    /* $('#main_menu').mouseleave(function(){
        $('#main_menu').slideToggle('fast');
        //$('#butt_menu').removeClass('is-active');
        //$('#accordion ul').hide();
    });*/

}); 

// SHOW/HIDE MENU ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/*
$(window).scroll(function () { 
    var width = $(window).width();
    if (width <= 1280) {
           $('#main_menu').hide();
    }
    else {
        $('#main_menu').show();
    }
});
*/

$( window ).resize(function() {
  var width = $(window).width();
    if (width <= 1280) {
           //$('#main_menu').hide();
    }
    else {
        //$('#main_menu').show();
    }
});

// BURGER MENU ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

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









jQuery(document).ready( function($) {
 
    // Disable scroll when focused on a number input.
    $('form').on('focus', 'input[type=number]', function(e) {
        $(this).on('wheel', function(e) {
            e.preventDefault();
        });
    });
 
    // Restore scroll on number inputs.
    $('form').on('blur', 'input[type=number]', function(e) {
        $(this).off('wheel');
    });
 
    // Disable up and down keys.
    $('form').on('keydown', 'input[type=number]', function(e) {
        if ( e.which == 38 || e.which == 40 )
            e.preventDefault();
    });  
      
});





// Basic FitVids Test
        $(".container").fitVids();
        // Custom selector and No-Double-Wrapping Prevention Test
        $(".container").fitVids({ customSelector: "iframe[src^='http://socialcam.com']"});

        








        // COVER VIDEO||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

$( document ).ready(function() {



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

    $('.video').click(function () {
      if(
        $(this).children(".file_video").get(0).paused){
          $(this).children(".file_video").get(0).play();
          $(this).children(".file_video").css({ opacity: 1 });
          $(this).children(".frase").fadeOut();
          $(this).children(".file_video").attr('controls', '');
          $(this).children(".file_video").show();
          $(this).children(".cover_video").hide();
          $(this).children(".sfuma_top").hide();
          $(this).children(".cover_video").get(0).pause();
          $(this).children("#slider_home").pause();
          $(this).children('.flex-slider').flexslider('pause');
      }else{
         $(this).children(".file_video").get(0).pause();
         $(this).children(".file_video").css({ opacity: 0.35 });
         $(this).children(".frase").fadeIn();
         $(this).children(".file_video").removeAttr('controls');
         $(this).children(".file_video").hide();
         $(this).children(".cover_video").get(0).play();
         $(this).children(".cover_video").show();
         $(this).children(".sfuma_top").show();
         $(this).children("#slider_home").play();
         $(this).children('.flex-slider').flexslider('play');
      }
  });

}








// video con cover jpg


if($('body').find('.file_video_cover').length == 1 ){
  

  var videoz_cover= $('.file_video_cover').get(0);   
  //console.log (videoz);

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

}











}); 
