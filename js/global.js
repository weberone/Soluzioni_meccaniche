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
    if ($(document).scrollTop() < 50) { 
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
        slideshow: true,
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

        
